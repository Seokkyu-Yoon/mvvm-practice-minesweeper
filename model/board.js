window.model = window.model || {};

(($w, model) => {
  const { Model } = $w
  const DIFFICULT_MAP = {
    easy: {
      width: 9,
      height: 9,
      mines: 10
    },
    medium: {
      width: 16,
      height: 16,
      mines: 40,
    },
    hard: {
      width: 30,
      height: 16,
      mines: 99,
    },
    hell: {
      width: 118,
      height: 60,
      mines: 1460,
    },
  }

  function getRandomInt(dt = 1, axis = 0) {
    return Math.round(Math.random() * dt) + axis
  }

  class Board extends Model {
    constructor () {
      super()
      this.gameover = false
      this.width = 0
      this.height = 0
      this.mines = 0
      this.board = []
    }
    setGameover() {
      this.gameover = true
    }
    isFinished() {
      return !this.board.some((row) => {
        return row.some((cell) => {
          return !cell.isMine() && !cell.isOpened
        })
      })
    }
    openAll() {
      this.board.forEach((row) => {
        row.forEach((cell) => {
          if (cell.isMine()) return
          cell.open()
        })
      })
    }
    createBoard(difficult) {
      const { width, height, mines } = DIFFICULT_MAP[difficult]
      this.gameover = false
      this.board = []
      for (let y = 0; y < height; y += 1) {
        const row = []
        for (let x = 0; x < width; x += 1) {
          const cell = new model.Cell(x, y)
          row.push(cell)
        }
        this.board.push(row)
      }
      this.width = width
      this.height = height
      this.mines = mines
      this.setMines()

      this.notifyObservers({
        board: this.board
      })
    }
    getCell(x, y) {
      if (y < 0 || y >= this.height) return null
      if (x < 0 || x >= this.width) return null
      return this.board[y][x]
    }
    setMines(count = 0) {
      if (count >= this.mines) return
      const x = getRandomInt(this.width - 1)
      const y = getRandomInt(this.height - 1)

      if (!this.setMine(x, y)) return this.setMines(count)
      this.addValue(x - 1, y - 1)
      this.addValue(x - 1, y)
      this.addValue(x - 1, y + 1)
      this.addValue(x, y - 1)
      this.addValue(x, y + 1)
      this.addValue(x + 1, y - 1)
      this.addValue(x + 1, y)
      this.addValue(x + 1, y + 1)
      return this.setMines(count + 1)
    }
    setMine(x, y) {
      const cell = this.getCell(x, y)
      if (cell === null) return false
      return cell.setMine()
    }
    addValue(x, y) {
      const cell = this.getCell(x, y)
      if (cell === null) return
      cell.addValue()
    }
    open (x, y) {
      const cell = this.getCell(x, y)
      if (cell === null) return
      if (cell.isOpened) return

      cell.open()
      if (!cell.isEmpty()) return

      this.open(x - 1, y - 1)
      this.open(x - 1, y)
      this.open(x - 1, y + 1)
      this.open(x, y - 1)
      this.open(x, y + 1)
      this.open(x + 1, y - 1)
      this.open(x + 1, y)
      this.open(x + 1, y + 1)
    }
  }

  model.Board = Board
})(window, window.model)