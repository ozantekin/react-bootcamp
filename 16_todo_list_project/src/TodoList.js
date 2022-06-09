import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    })
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    })
  }

  update(id, updateTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updateTask }
      }
      return todo
    })
    this.setState({ todos: updatedTodos })
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })
    this.setState({
      todos: updatedTodos,
    })
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          removeTodo={() => this.remove(todo.id)}
          updateTodo={this.update}
          completed={todo.completed}
          toggleTodo={this.toggleCompletion}
          task={todo.task}
        />
      )
    })
    return (
      <div className='TodoList'>
        <h1>
          Yapılacaklar Listesi <span>React ile Todo List Uygulaması</span>
        </h1>
        <ul> {todos} </ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    )
  }
}

export default TodoList
