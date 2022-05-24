import React, { Component } from 'react'

class ScoreKeeper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.triple = this.triple.bind(this)
    this.double = this.double.bind(this)
  }
  decrease() {
    this.setState({ score: this.state.score - 1 })
  }

  // sadece 1 artar
  increase() {
    this.setState({ score: this.state.score + 1 })
    this.setState({ score: this.state.score + 1 })
    this.setState({ score: this.state.score + 1 })
  }

  triple() {
    this.setState((st) => {
      return { score: st.score + 1 }
    })
    this.setState((st) => {
      return { score: st.score + 1 }
    })
    this.setState((st) => {
      return { score: st.score + 1 }
    })
  }

  incrementScore(curState) {
    return { score: curState.score + 1 }
  }

  double() {
    this.setState(this.incrementScore)
    this.setState(this.incrementScore)
  }

  // bind gerek yok
  reset = () => {
    this.setState({ score: 0 })
  }

  render() {
    return (
      <div>
        <h1>Skor: {this.state.score} </h1>
        <button onClick={this.state.score > 0 && this.decrease}>Azalt</button>
        <button onClick={this.increase}>Arttır</button>
        <button onClick={this.triple}>Triple</button>
        <button onClick={this.double}>Double</button>
        <br />
        <button onClick={this.reset}>Reset!</button>
      </div>
    )
  }
}

export default ScoreKeeper
