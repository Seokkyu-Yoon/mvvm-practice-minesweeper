(($w, model, view, viewModel) => {
  $w.onload = () => {
    const modelBoard = new model.Board()
    const modelDifficult = new model.Difficult()
    const modelTimer = new model.Timer()

    const viewBoard = new view.Board()
    const viewDifficult = new view.Difficult()
    const viewReset = new view.Reset()
    const viewTimer = new view.Timer()

    const viewModelBoard = new viewModel.Board(modelBoard)
    const viewModelDifficult = new viewModel.Difficult(modelDifficult)
    const viewModelTimer = new viewModel.Timer(modelTimer)

    viewModelBoard.bind(viewBoard, viewReset, modelDifficult, modelTimer)
    viewModelDifficult.bind(viewDifficult, modelBoard, modelTimer)
    viewModelTimer.bind(viewTimer, viewReset)
  }
})(window, window.model, window.view, window.viewModel)