import { InputGroup, Form, Button, Table } from 'react-bootstrap'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const changeInput = (e) => {
    setNewTodo(e.target.value)
  }

  // useEffect(() => {
  //   console.log(todo)
  // }, [todo])

  // useEffect(() => {
  //   console.log(todoList)
  // }, [todoList])

  const changeEditInput = (e) => {
    setTodo(e.target.value)
  }

  const addTodo = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: uuidv4(),
        todo: newTodo,
        completed: false,
        edit: false,
      },
    ])
    setNewTodo('')
  }

  // useEffect(() => {
  //   console.log(todoList)
  // }, [todoList])

  const completedTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = (id, oldTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, edit: !todo.edit } : todo
      )
    )
    setTodo(oldTodo)
  }

  const saveTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, edit: !todoItem.edit, todo: todo }
          : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id))
  }

  return (
    <div className='App'>
      <h1>Todo List App with React </h1>
      <InputGroup className='my-3 w-75'>
        <Form.Control
          placeholder='Add Todo'
          aria-describedby='basic-addon2'
          value={newTodo}
          onChange={changeInput}
        />
        <Button
          variant='outline-success'
          onClick={() => {
            addTodo()
          }}
        >
          Add
        </Button>
      </InputGroup>

      <Table striped bordered hover className='w-75'>
        <tbody>
          {todoList.map((todoItem) => (
            <tr key={todoItem.id}>
              {todoItem.edit ? (
                ''
              ) : (
                <td>
                  <Form.Check
                    type='switch'
                    value={todoItem.completed}
                    onChange={() => {
                      completedTodo(todoItem.id)
                    }}
                  />
                </td>
              )}
              <td
                className={`${
                  todoItem.completed
                    ? 'text-decoration-line-through '
                    : 'fw-bold'
                }`}
              >
                {todoItem.edit ? (
                  <InputGroup>
                    <InputGroup.Text id='basic-addon1'>edit</InputGroup.Text>
                    <Form.Control
                      placeholder='Edit Todo'
                      aria-describedby='basic-addon1'
                      value={todo}
                      onChange={changeEditInput}
                    />
                  </InputGroup>
                ) : (
                  todoItem.todo
                )}
              </td>

              {todoItem.edit ? (
                <td>
                  <Button
                    variant='outline-info'
                    onClick={() => saveTodo(todoItem.id)}
                  >
                    Save
                  </Button>
                </td>
              ) : (
                <>
                  <td>
                    <Button
                      variant='outline-danger'
                      onClick={() => deleteTodo(todoItem.id)}
                    >
                      Remove
                    </Button>
                  </td>
                  {todoItem.completed ? (
                    ''
                  ) : (
                    <td>
                      <Button
                        variant='outline-warning'
                        value={todoItem.id}
                        onClick={() => editTodo(todoItem.id, todoItem.todo)}
                      >
                        Edit
                      </Button>
                    </td>
                  )}
                </>
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default App
