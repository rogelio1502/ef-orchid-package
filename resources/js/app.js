import './bootstrap'

import DemoSelectController from './controllers/demo_select'
import BasicLoaderController from './controllers/basic_loader_controller'
import LiveSelectController from './controllers/live_select_controller'

application.register('basic-loader-controller', BasicLoaderController)
application.register('demo_select', DemoSelectController)
application.register('live-select-controller', LiveSelectController)