import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert('Sa')}>Click Me!</button>
      </div>
    )
  }
}

export default Button
