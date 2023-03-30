export default class extends window.Controller {
  connect () {
    document.querySelector('button').onclick = e => {
      let btnType = e.target.attributes['type']
      if (btnType != undefined) {
        if (btnType.value == 'submit') {
          document.getElementById('div-loading').hidden = false
        }
      }
    }
  }
  disconnect () {}
}
