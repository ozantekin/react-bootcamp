import React, { Component } from 'react'
import './ButtonList.css'

class ButtonList extends Component {
  static defaultProps = {
    colors: ['pink', 'green', 'blue', 'red', 'yellow'],
  }

  constructor(props) {
    super(props)
    this.state = { color: 'transparent' }
  }

  changeColor(newColor) {
    this.setState({ color: newColor })
  }
  render() {
    return (
      <div className='ButtonList' style={{ backgroundColor: this.state.color }}>
        {this.props.colors.map((c) => {
          const colorObj = { backgroundColor: c }
          return (
            <button style={colorObj} onClick={() => this.changeColor(c)}>
              Tıkla
            </button>
          )
        })}
      </div>
    )
  }
}

export default ButtonList
