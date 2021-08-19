window.view = window.view || {};

(($w, view) => {
  const { View } = $w

  class Difficult extends View {
    constructor () {
      super()
      this.el = $w.document.querySelector('#difficult')
      this.el.addEventListener('change', this.emitChange.bind(this))
    }
    set (difficult) {
      this.el.value = difficult
    }
    onChange (callback) {
      this.on('change', callback)
    }
    offChange (callback) {
      this.off('change', callback)
    }
    emitChange (e) {
      this.emit('change', e)
    }
  }
  view.Difficult = Difficult
})(window, window.view)