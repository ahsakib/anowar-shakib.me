<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class PreventInvalidInput
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Add your custom logic here to handle invalid input.
        return $next($request);
    }
}
