<?php

namespace EF\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Platform\Dashboard;
class EfServiceProvider extends ServiceProvider
{

    public function boot(Dashboard $ds)
    {
        $ds->registerResource('scripts','/js/app.js');
        $ds->registerResource('stylesheets','/css/tom-select.default.css');
        $this->loadViewsFrom(__DIR__ . '/../../../resources/views', 'ef');
    }
    
}