window.model = window.model || {};
window.viewModel = window.viewModel || {};

(($w, viewModel) => {
  const { ViewModel } = $w
  class Cell extends ViewModel {
    constructor (modelCell) {
      super(modelCell)
    }

    bind (viewCell, modelBoard, modelTimer) {
      this.model.subscribe(() => {
        viewCell.open()
      })

      viewCell.onClick(() => {
        if (modelBoard.gameover) return
        modelBoard.open(this.model.x, this.model.y)
        if (this.model.isMine()) {
          modelTimer.stop()
          modelBoard.setGameover()
          modelBoard.openAll()
          return
        }
        if (modelBoard.isFinished()) {
          modelTimer.stop()
          modelBoard.setGameover()
        }
      })

      viewCell.setValue(this.model.value)
    }
  }

  viewModel.Cell = Cell
})(window, window.viewModel)