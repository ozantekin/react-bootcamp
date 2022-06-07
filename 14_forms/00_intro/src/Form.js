import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { userName: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    alert(`Adınızın ${this.state.userName} olduğundan emin misiniz?`)
    this.setState({
      userName: '',
    })
  }
  handleChange(e) {
    this.setState({
      userName: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1>Introduction to Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='fullname'>Adınız: </label>
          <input
            type='text'
            name='userName'
            id='fullname'
            value={this.state.userName}
            onChange={this.handleChange}
          ></input>
          <button>Devam Et</button>
        </form>
      </div>
    )
  }
}
export default Form
