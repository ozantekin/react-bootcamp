import React, { Component } from 'react'
import Cell from './Cell'

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  }
  constructor(props) {
    super(props)
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    }
  }
  createBoard() {
    let board = []
    for (let y = 0; y < this.props.nrows; y++) {
      let row = []
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row)
    }
    return board
  }
  flipeCollsAround(coord) {
    let { ncols, nrows } = this.props
    let board = this.state.board
    let [y, x] = coord.split('-').map(Number)

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x]
      }
    }
  }

  render() {
    let tblBoard = []
    for (let y = 0; y < this.props.nrows; y++) {
      let row = []
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`
        row.push(<Cell key={coord} esLint={this.state.board[y][x]} />)
      }
      tblBoard.push(<tr key={y}>{row}</tr>)
    }
    return (
      <table className='Board'>
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }
}

export default Board
