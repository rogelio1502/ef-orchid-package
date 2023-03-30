import TomSelect from 'tom-select'
export default class extends window.Controller {
  connect () {
    const select = this.element.querySelector('select')

    this.choices = new TomSelect(select, {
      valueField: 'value',
      labelField: 'text',
      searchField: 'text',
      // fetch remote data
      load: function (query, callback) {
        var url =
          select.getAttribute('data-url') +
            '?q=' +
            encodeURIComponent(query) +
            '&limit=' +
            select.getAttribute('data-limit') ?? 10
        window.axios
          .get(url)
          .then(response => {
            callback(response.data.items)
          })
          .catch(e => {
            callback()
          })
      },
      // custom rendering functions for options and items
      render: {
        option: function (item, escape) {
          return `<div>${escape(item.text)}</div>`
        },
        item: function (item, escape) {
          return `<div>${escape(item.text)}</div>`
        }
      }
    })
  }
  disconnect () {
    this.choices.destroy()
  }
}
