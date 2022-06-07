import React, { Component } from 'react'

class Multiple extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '', email: '', password: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    alert(`Bilgilerinizi doğru girdiğinize emin misiniz?`)
    this.setState({ username: '' })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <h1>Multiple From</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Adınız: </label>
          <input
            type='text'
            placeholder='name'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Gönder</button>
        </form>
      </div>
    )
  }
}

export default Multiple
