import { createApp } from 'vue'
import PicturesInput from './components/PictureInput'

export default class extends window.Controller {
  connect () {
    const app = createApp({})
    app.component('picture-input', PicturesInput)
    console.log(this.element.querySelector('picture-input').parentNode.id)
    app.mount('#' + this.element.querySelector('picture-input').parentNode.id)

    this.app = app
  }

  disconnect () {
    // Destroy the Vue instance when the controller is disconnected
    this.app.unmount()
  }
}
