<?php

namespace EF\Providers;

use Illuminate\Support\ServiceProvider;
use Orchid\Platform\Dashboard;

class EfServiceProvider extends ServiceProvider
{

    public function boot(Dashboard $ds)
    {
        $ds->registerResource('scripts','/ef/js/ef-orchid-package.js');
        $ds->registerResource('stylesheets','/ef/css/ef-orchid-package.css');
        $this->loadViewsFrom(__DIR__ . '/../../../resources/views', 'ef');
    }
    
}