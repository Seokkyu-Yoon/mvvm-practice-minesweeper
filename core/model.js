(($w) => {
  function _noop () {}

  class Observer {
    constructor (action = _noop) {
      if (typeof action !== 'function') throw new Error('observer action must be a function')
      this.action = action
    }
    notify (data = {}) {
      this.action(data)
    }
  }

  class Model {
    constructor () {
      this.observers = []
    }
    subscribe (action = _noop) {
      this.observers.push(new Observer(action))
    }
    notifyObservers (data = {}) {
      this.observers.forEach((observer) => observer.notify(data))
    }
  }

  $w.Model = Model
})(window)