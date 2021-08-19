window.view = window.view || {};

(($w, view) => {
  const { View } = $w

  class Cell extends View {
    constructor () {
      super()
      this.el = $w.document.createElement('div')
      this.el.classList.add('cell')
      this.el.addEventListener('click', this.emitClick.bind(this))
    }
    open() {
      this.el.classList.add('opened')
    }
    setValue(value) {
      this.el.classList.add(`cell-${value}`)
      const innerHTML = value === -1 ? '*' : String(value)
      this.el.innerHTML = innerHTML
    }
    onClick (callback) {
      this.on('click', callback)
    }
    offClick (callback) {
      this.off('click', callback)
    }
    emitClick (e) {
      this.emit('click', e)
    }
  }
  view.Cell = Cell
})(window, window.view)