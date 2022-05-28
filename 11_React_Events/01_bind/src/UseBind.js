import React, { Component } from 'react'

class UseBind extends Component {
  static defaultProps = {
    messages: ['Selam', 'Merhaba', 'Hoş geldin', 'Sa', 'Welcome', 'Greeting'],
  }
  useBind() {
    let { messages } = this.props
    let randomIndex = Math.floor(Math.random() * messages.length)
    alert(messages[randomIndex])
  }
  render() {
    return (
      <div>
        <div onMouseEnter={this.useBind.bind(this)}>
          <h1>Bind Method 1</h1>
        </div>
        <div onMouseEnter={() => this.useBind()}>
          <h1>Bind Method 2</h1>
        </div>
      </div>
    )
  }
}

export default UseBind
