export default class extends window.Controller {
  connect () {
    document.querySelector('#post-form').onsubmit = e => {
      if (e.target.getAttribute('data-form-submit')) {
        document.getElementById('div-loading').hidden = false
      }
    }
  }
  disconnect () {}
}
