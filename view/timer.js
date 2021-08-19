window.view = window.view || {};

(($w, view) => {
  const { View } = $w

  class Timer extends View {
    constructor () {
      super()
      this.el = $w.document.querySelector('#timer')
    }
    set (seconds) {
      this.el.innerHTML = `${seconds}`.padStart(3, '0')
    }
  }
  view.Timer = Timer
})(window, window.view)