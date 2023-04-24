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
        $this->publishes([
            __DIR__.'/../../../resources/views/vendor' => resource_path('views/vendor'),
        ]);
        $this->publishes([
            __DIR__.'/../../../resources/views/brand' => resource_path('views/brand'),
        ]);
        $this->publishes([
            __DIR__.'/../../../public/ef' => public_path('ef'),
        ], 'public');
    }
    
}