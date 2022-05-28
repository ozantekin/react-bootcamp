import React, { Component } from 'react'

class ConstructorBind extends Component {
  static defaultProps = {
    messages: ['Selam', 'Merhaba', 'Hoş geldin', 'Sa', 'Welcome', 'Greeting'],
  }

  constructor(props) {
    super(props)
    this.useConstructor = this.useConstructor.bind(this)

    this.useArrowConst = () => {
      let { messages } = this.props
      let randomIndex = Math.floor(Math.random() * messages.length)
      alert(messages[randomIndex])
    }
  }

  useConstructor() {
    let { messages } = this.props
    let randomIndex = Math.floor(Math.random() * messages.length)
    alert(messages[randomIndex])
  }

  render() {
    return (
      <div>
        <div onMouseEnter={this.useConstructor}>
          <h1>Bind Method 3</h1>
        </div>
        <div onMouseEnter={this.useArrowConst}>
          <h1>Bind Method 4</h1>
        </div>
      </div>
    )
  }
}

export default ConstructorBind
