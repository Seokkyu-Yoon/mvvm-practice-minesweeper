(($w) => {
  class ViewModel {
    constructor(model) {
      this.model = model
    }
    bind() {
      throw new Error('bind is not implement')
    }
  }
  $w.ViewModel = ViewModel
})(window)