import React, { Component } from 'react'
import './IconList.css'

class IconList extends Component {
  static defaultProps = {
    options: [
      'angry',
      'dizzy',
      'flushed',
      'frown',
      'grimace',
      'grin',
      'kiss',
      'meh',
      'tired',
      'surprise',
    ],
  }
  constructor(props) {
    super(props)
    this.state = { icons: [] }
    this.addIcon = this.addIcon.bind(this)
  }

  // addIcon() {
  //   let idx = Math.floor(Math.random() * this.props.options.length)
  //   let newIcon = this.props.options[idx]
  //   let icons = this.state.icons
  //   icons.push(newIcon)
  //   this.setState({ icons: icons })
  // }

  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length)
    let newIcon = this.props.options[idx]
    this.setState({ icons: [...this.state.icons, newIcon] })
  }

  render() {
    const icons = this.state.icons.map((i) => (
      <i className={`fa-solid fa-face-${i}`}></i>
    ))
    return (
      <div>
        <h1>Günün Emojisi: {icons} </h1>
        <button onClick={this.addIcon}>Modunu görmek için tıkla</button>
      </div>
    )
  }
}

export default IconList
