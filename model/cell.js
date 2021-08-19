window.model = window.model || {};

(($w, model) => {
  const { Model } = $w

  class Cell extends Model {
    constructor (x, y) {
      super()
      this.value = 0
      this.x = x
      this.y = y
      this.isOpened = false
    }
    isMine() {
      return this.value === -1
    }
    isEmpty() {
      return this.value === 0
    }
    set({
      value = this.value,
      isOpened = this.isOpened
    }) {
      this.value = value
      this.isOpened = isOpened
      this.notifyObservers()
    }
    setMine() {
      if (this.isMine()) return false
      const value = -1
      this.set({ value })
      return true
    }
    addValue() {
      if (this.isMine()) return false
      const value = this.value + 1
      this.set({ value })
      return true
    }
    open() {
      const isOpened = true
      this.set({ isOpened })
      return this.isMine()
    }
  }
  model.Cell = Cell
})(window, window.model)