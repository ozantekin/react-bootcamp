import React, { Component } from 'react'

class Random extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lucky: 0,
    }
    this.makeLucky()
  }
  makeLucky() {
    setInterval(() => {
      let rand = Math.floor(Math.random() * this.props.maxLucky)
      this.setState({ lucky: rand })
    }, 1000)
  }
  render() {
    return (
      <div>
        <h1>Lucky Number: {this.state.lucky}</h1>
      </div>
    )
  }
}

export default Random
