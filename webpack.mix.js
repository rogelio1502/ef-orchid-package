let mix = require('laravel-mix')
mix
  .setPublicPath('public/ef')
  .sourceMaps()
  .vue()
  .js('resources/js/app.js', 'public/ef/js/ef-orchid-package.js')
  .css('resources/css/app.css', 'public/ef/css/ef-orchid-package.css')
