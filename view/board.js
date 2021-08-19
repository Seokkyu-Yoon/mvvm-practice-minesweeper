window.view = window.view || {};

(($w, view) => {
  const { View } = $w

  class Board extends View {
    constructor () {
      super()
      this.el = $w.document.querySelector('#board')
      this.el.addEventListener('click', this.emitClick.bind(this))
    }
    reset() {
      this.el.innerHTML = ''
    }
    append(viewRow) {
      this.el.append(viewRow.el)
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
  view.Board = Board
})(window, window.view)
