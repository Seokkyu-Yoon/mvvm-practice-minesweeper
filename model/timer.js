window.model = window.model || {};

(($w, model) => {
  const { Model } = $w

  class Timer extends Model {
    constructor () {
      super()
      this.running = false
      this.seconds = 0
      this.interval = undefined
    }
    setSeconds (seconds) {
      this.seconds = seconds
      this.notifyObservers({ seconds })
    }
    get () {
      return this.seconds
    }
    start () {
      if (this.running) return
      this.running = true
      this.interval = $w.setInterval(() => {
        this.setSeconds(this.seconds + 1)
      }, 1000)
    }
    reset() {
      this.stop()
      this.setSeconds(0)
    }
    stop () {
      this.running = false
      $w.clearInterval(this.interval)
    }
  }
  model.Timer = Timer
})(window, window.model)