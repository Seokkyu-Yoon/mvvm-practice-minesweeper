window.viewModel = window.viewModel || {};

(($w, viewModel) => {
  const { ViewModel } = $w
  class Difficult extends ViewModel {
    constructor (modelDifficult) {
      super(modelDifficult)
    }

    bind (viewDifficult, modelBoard, modelTimer) {
      this.model.subscribe(({ difficult }) => {
        viewDifficult.set(difficult)
        modelBoard.createBoard(difficult)
        modelTimer.reset()
      })

      viewDifficult.onChange((e) => {
        const difficult = e.target.value
        this.model.set(difficult)
      })

      this.model.set('easy')
    }
  }

  viewModel.Difficult = Difficult
})(window, window.viewModel)