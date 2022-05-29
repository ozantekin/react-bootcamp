import React, { Component } from 'react'

class NumberListItem extends Component {
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.props.remove}>X</button>
      </li>
    )
  }
}

export default NumberListItem
