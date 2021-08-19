window.model = window.model || {};

(($w, model) => {
  const { Model } = $w

  class Difficult extends Model {
    constructor() {
      super()
      this.set('easy')
    }
    get() {
      return this.difficult
    }
    set(difficult) {
      this.difficult = difficult
      this.notifyObservers({ difficult: this.difficult })
    }
  }

  model.Difficult = Difficult
})(window, window.model)