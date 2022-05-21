import React, { Component } from 'react'

class Click extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.setState({ clicked: true })
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Selamlandı ✅' : 'Selamlanmadı ❌'}</h1>
        <button onClick={this.handleClick}>Salute! </button>
      </div>
    )
  }
}

export default Click
