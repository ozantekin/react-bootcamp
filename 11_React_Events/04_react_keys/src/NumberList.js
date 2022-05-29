import React, { Component } from 'react'
import NumberListItem from './NumberListItem'

class NumberList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nums: [1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6],
    }
    this.remove = this.remove.bind(this)
  }
  remove(num) {
    console.log('ERROR INSIDE NUMBER LIST REMOVE')
    this.setState((st) => ({
      nums: st.nums.filter((n) => n !== num),
    }))
  }
  render() {
    let nums = this.state.nums.map((n) => (
      <NumberListItem key={n} value={n} remove={() => this.remove(n)} />
    ))
    return (
      <div>
        <h1>First Number List - WARNING</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default NumberList
