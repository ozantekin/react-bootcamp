import React, { Component } from 'react'

class NumberListItem extends Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }
  handleRemove() {
    this.setState(this.props.remove(this.props.value))
  }
  render() {
    return (
      <li>
        {this.props.value}
        <button onClick={this.handleRemove}>X</button>
      </li>
    )
  }
}

export default NumberListItem
