import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { task: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false })
    this.setState({ task: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Yeni Görev: </label>
        <input
          type='text'
          id='task'
          name='task'
          placeholder='Yeni yapılacak'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Ekle</button>
      </form>
    )
  }
}

export default NewTodoForm
