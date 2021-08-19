window.view = window.view || {};

(($w, view) => {
  const { View } = $w

  class Row extends View {
    constructor () {
      super()
      this.el = $w.document.createElement('div')
      this.el.classList.add('row')
    }
    append(viewCell) {
      this.el.append(viewCell.el)
    }
  }
  view.Row = Row
})(window, window.view)