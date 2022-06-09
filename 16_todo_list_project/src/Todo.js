import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task,
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  toggleForm() {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  handleRemove() {
    this.props.removeTodo(this.props.id, this.state.task)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleToggle(e) {
    this.props.toggleTodo(this.props.id)
  }

  handleUpdate(e) {
    e.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({
      isEditing: false,
    })
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <div className='Todo'>
          <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>
              <i className='fa-solid fa-spell-check'></i>
            </button>
          </form>
        </div>
      )
    } else {
      result = (
        <div className='Todo'>
          <li
            className={
              this.props.completed ? 'Todo-task completed' : 'Todo-task'
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className='Todo-buttons'>
            <button onClick={this.toggleForm}>
              <i className='fa-solid fa-pencil'></i>
            </button>
            <button onClick={this.handleRemove}>
              <i className='fa-solid fa-eraser'></i>
            </button>
          </div>
        </div>
      )
    }
    return result
  }
}

export default Todo
