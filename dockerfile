# Stage 1: Build PHP dependencies
FROM composer:2.7 as vendor

WORKDIR /app

COPY database/ database/
COPY composer.json composer.lock ./
RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist \
    --optimize-autoloader \
    --no-dev

# Stage 2: Build Node dependencies and assets
FROM node:18 as frontend

WORKDIR /app

COPY package.json package-lock.json vite.config.js tailwind.config.js postcss.config.js ./
COPY resources/js/ resources/js/
COPY resources/css/ resources/css/

RUN npm install && npm run build

# Stage 3: Application image
FROM php:8.2-fpm-alpine

WORKDIR /var/www/html

# Install PHP extensions and dependencies
RUN apk add --no-cache \
    nginx \
    supervisor \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql zip gd

# Configure nginx and supervisor
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy application files
COPY --chown=www-data:www-data . .
COPY --from=vendor --chown=www-data:www-data /app/vendor/ ./vendor/
COPY --from=frontend --chown=www-data:www-data /app/public/build/ ./public/build/

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage
RUN chown -R www-data:www-data /var/www/html/bootstrap/cache

# Generate key and optimize
RUN php artisan key:generate --force
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache

EXPOSE 8000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]