import React, { Component } from 'react'
const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`
    return (
      <div className='Pokecard'>
        <h3 className='Pokecard-title'>{this.props.name}</h3>
        <img
          className='Pokecard-image'
          src={imgSrc}
          alt={this.props.name}
        ></img>
        <div className='Pokecard-data'>Type: {this.props.type}</div>
        <div className='Pokecard-data'>EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard
