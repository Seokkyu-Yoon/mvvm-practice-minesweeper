window.model = window.model || {};
window.viewModel = window.viewModel || {};

(($w, viewModel, view) => {
  const { ViewModel } = $w
  class Board extends ViewModel {
    constructor (modelBoard) {
      super(modelBoard)
    }

    bind (viewBoard, viewReset, modelDifficult, modelTimer) {
      this.model.subscribe(({ board }) => {
        viewBoard.reset()
        board.forEach((row) => {
          const viewRow = new view.Row()
          row.forEach((modelCell) => {
            const viewCell = new view.Cell()
            const viewModelCell = new viewModel.Cell(modelCell)
            viewModelCell.bind(viewCell, this.model, modelTimer)
            viewRow.append(viewCell)
          })
          viewBoard.append(viewRow)
        })
      })

      viewBoard.onClick(() => {
        if (this.model.gameover) return
        modelTimer.start()
      })

      viewReset.onClick(() => {
        this.model.createBoard(modelDifficult.get())
      })
    }
  }

  viewModel.Board = Board
})(window, window.viewModel, window.view)