window.viewModel = window.viewModel || {};

(($w, viewModel) => {
  const { ViewModel } = $w
  class Timer extends ViewModel {
    constructor (modelTimer) {
      super(modelTimer)
    }

    bind (viewTimer, viewReset) {
      this.model.subscribe(({ seconds }) => {
        viewTimer.set(seconds)
      })

      viewReset.onClick(() => {
        this.model.reset()
      })
    }
  }

  viewModel.Timer = Timer
})(window, window.viewModel)