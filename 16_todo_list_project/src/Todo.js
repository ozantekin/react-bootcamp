import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      task: this.props.task,
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleRemove() {
    this.props.removeTodo(this.props.id, this.state.task)
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleUpdate(e) {
    e.preventDefault()
    // take new task
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({
      isEditing: false,
    })
  }
  handleToggle(e) {
    this.props.toggleTodo(this.props.id)
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
            ></input>
            <button>
              <i class='fa-solid fa-spell-check'></i>
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
              <i class='fa-solid fa-pencil'></i>
            </button>
            <button onClick={this.handleRemove}>
              <i class='fa-solid fa-eraser'></i>
            </button>
          </div>
        </div>
      )
    }
    return result
  }
}

export default Todo
