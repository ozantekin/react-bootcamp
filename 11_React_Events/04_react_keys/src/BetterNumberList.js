import React, { Component } from 'react'
import BetterNumberItem from './BetterNumberItem'

class NumberList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6],
    }
    this.remove = this.remove.bind(this)
  }
  remove(num) {
    console.log('SUCCESSFUL INSIDE BETTER NUMBER LIST (ADDED IDX PARAMETER) ')
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }))
  }
  render() {
    let nums = this.state.nums.map((n, idx) => (
      <BetterNumberItem key={idx} value={n} remove={this.remove} />
    ))
    return (
      <div>
        <h1>Better Number List - SUCCESSFUL</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default NumberList
