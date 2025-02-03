import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx', // Add this line
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: 'hsl(var(--card))',
                primary: 'hsl(var(--primary))',
                secondary: 'hsl(var(--secondary))',
                muted: 'hsl(var(--muted))',
                accent: 'hsl(var(--accent))',
                destructive: 'hsl(var(--destructive))',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
              },
        },
    },
    plugins: [],
};
