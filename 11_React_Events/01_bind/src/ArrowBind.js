import React, { Component } from 'react'

class ArrowBind extends Component {
  static defaultProps = {
    messages: ['Selam', 'Merhaba', 'Hoş geldin', 'Sa', 'Welcome', 'Greeting'],
  }

  useArrow = () => {
    let { messages } = this.props
    let randomIndex = Math.floor(Math.random() * messages.length)
    alert(messages[randomIndex])
    console.log('Attention', this)
  }
  render() {
    return (
      <div>
        <div>
          <h1 onMouseEnter={this.useArrow}>Bind Method 5</h1>
        </div>
      </div>
    )
  }
}

export default ArrowBind
