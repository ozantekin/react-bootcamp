import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './NewTodoForm.css'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.createTodo({ ...this.state, id: uuidv4(), completed: false })
    this.setState({ task: '' })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <form className='NewTodoForm' onSubmit={this.handleSubmit}>
        <label htmlFor='task'>Planların Neler:</label>
        <input
          id='task'
          type='text'
          name='task'
          placeholder='Eklemeler Yap!'
          value={this.state.task}
          onChange={this.handleChange}
        ></input>
        <button>
          <i className='fa-solid fa-plus'></i>
        </button>
      </form>
    )
  }
}

export default NewTodoForm
