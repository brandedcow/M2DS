import { decorate, observable, action } from 'mobx'

class GridStore {
    constructor() {
        this.height = 20
        this.width = 20
        this.grid = new Array(this.height).fill(0).map(() => new Array(this.width).fill(0))
    }


    setGrid = (newGrid) => {
        this.grid = newGrid
    }

    setHeight = (newHeight) => {
        if (newHeight == "") {
            this.height = 0;
        } 

        const diff = this.height - newHeight

        if (diff > 0) {
            this._decreaseGridRowBy(diff)
        } else if (diff < 0) {
            this._increaseGridRowBy(Math.abs(diff))
        }
        this.height = Number(newHeight)
    }

    setWidth = (newWidth) => {
        if (newWidth == "") {
            this.width = 0
        }

        const diff = this.width - newWidth

        if (diff > 0) {
            this._decreaseGridColBy(diff)
        } else if (diff < 0) {
            this._increaseGridColBy(Math.abs(diff))
        }

        this.width = Number(newWidth)
    }

    setCellMaterial = (row, col, mat) => {
        this.grid[row][col] = mat
    }

    _decreaseGridRowBy = (num) => {
        const newLength = this.height - num

        this.grid = this.grid.slice(0, newLength)
    }

    _increaseGridRowBy = (num) => {
        const newRows = new Array(num).fill(0).map(() => new Array(this.width).fill(0))

        this.grid = [...this.grid, ...newRows]
    }

    _decreaseGridColBy = (num) => {
        const newWidth = this.width - num

        this.grid = this.grid.map(row => row.slice(0, newWidth))
    }

    _increaseGridColBy = (num) => {
        const newCols = new Array(num).fill(0)

        this.grid = this.grid.map(row => ([...row, ...newCols]))
    }
}

decorate(GridStore, {
    height: observable,
    width: observable,
    grid: observable,
    setGrid: action,
    setHeight: action,
    setWidth: action,
    setCellMaterial: action
})

const gridStore = new GridStore()

export default gridStore