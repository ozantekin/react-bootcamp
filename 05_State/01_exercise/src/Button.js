import React, { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1,
    }
    this.randomNum = this.randomNum.bind(this)
  }
  randomNum() {
    let random = Math.floor(Math.random() * 10) + 1
    this.setState({ num: random })
  }

  render() {
    return (
      <div>
        <h2>Tombala: {this.state.num} </h2>
        {this.state.num === 5 ? (
          <h4>🎉 TEBRİKLER 🎉</h4>
        ) : (
          <button onClick={this.randomNum}>Şansını Dene!</button>
        )}
      </div>
    )
  }
}

export default Button

/*
 * Uzun yol 
  {this.state.num === 5 && <h4>🎉 TEBRİKLER 🎉</h4>}
        {this.state.num !== 5 && (
          <button onClick={this.randomNum}>Şansını Dene!</button>
        )}
 */
