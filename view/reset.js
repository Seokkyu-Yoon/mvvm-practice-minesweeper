window.view = window.view || {};

(($w, view) => {
  const { View } = $w

  class Reset extends View {
    constructor () {
      super()
      this.el = $w.document.querySelector('#reset')
      this.el.addEventListener('click', this.emitClick.bind(this))
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
  view.Reset = Reset
})(window, window.view)