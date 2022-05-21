import React, { Component } from 'react'

class AlternativeClick extends Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: true })
  }
  render() {
    return (
      <div>
        <h1>{this.state.clicked ? 'Gittim' : 'Buralardayım'}</h1>
        <button onClick={this.handleClick}>See You</button>
      </div>
    )
  }
}

export default AlternativeClick
