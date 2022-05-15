import React, { Component } from 'react'
import note from './image/note.jpg'
import './Giris.css'

class Giris extends Component {
  render() {
    return (
      <div className='Giris'>
        <h1>Introduction</h1>
        <img className='Dog-img' src={note} />
      </div>
    )
  }
}

export default Giris
