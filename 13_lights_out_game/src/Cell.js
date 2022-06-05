import React, { Component } from 'react'

class Cell extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.flipCellsAroundMe()
  }
  render() {
    let classes = 'Cell' + (this.props.isLint ? ' Cell-list' : '')
    return <td className={classes} onclick={this.handleClick} />
  }
}

export default Cell
