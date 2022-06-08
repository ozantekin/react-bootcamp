import React, { Component } from 'react'

class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: `${this.props.color}`,
          }}
        ></div>
        <button onClick={this.props.remove}>Remove!</button>
      </div>
    )
  }
}

export default Box
