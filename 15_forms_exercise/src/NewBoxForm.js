import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

class NewBoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = { height: '', width: '', backgroundColor: '' }
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
    const newBox = { ...this.state, id: uuidv4() }
    this.props.createBox(newBox)
    this.setState({ height: '', width: '', backgroundColor: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='height'>Height: </label>
          <input
            type='text'
            id='height'
            name='height'
            placeholder='Please enter number'
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='width'>Width: </label>
          <input
            id='width'
            name='width'
            type='text'
            placeholder='Please enter number'
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='backgroundColor'>Color: </label>
          <input
            type='text'
            id='backgroundColor'
            name='backgroundColor'
            placeholder='Please enter color'
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
        </div>
        <button>Create New Box!</button>
      </form>
    )
  }
}

export default NewBoxForm
