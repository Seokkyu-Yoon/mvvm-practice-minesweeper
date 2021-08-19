(($w) => {
  function _noop () {}

  class View {
    constructor () {
      this.callbacks = {}
    }
    on (eventType = '', callback = _noop) {
      if (typeof eventType !== 'string') throw new Error('event type must be a string')
      if (typeof callback !== 'function') throw new Error('callback must be a function')
      this.callbacks[eventType] = this.callbacks[eventType] || []
      this.callbacks[eventType].push(callback)
    }
    off (eventType = '', callback = _noop) {
      if (typeof eventType !== 'string') throw new Error('event type must be a string')
      if (typeof callback !== 'function') throw new Error('callback must be a function')
      const callbackIndex = this.callbacks[eventType].indexOf(callback)
      if (callbackIndex < 0) return
      this.callbacks[eventType].splice(callbackIndex, 1)
    }
    emit (eventType = '', e) {
      if (typeof eventType !== 'string') throw new Error('event type must be a string')
      const callbacks = this.callbacks[eventType] || []
      callbacks.forEach((callback) => callback(e))
    }
  }
  
  $w.View = View
})(window)