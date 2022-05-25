import React, { Component } from 'react'
import { choice } from './helpers'
import Coin from './Coin'
import './CoinContainer.css'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      {
        side: 'tails',
        imgSrc:
          'https://raw.githubusercontent.com/ozantekin/100-Days-Of-React/main/image/yazi.png?token=GHSAT0AAAAAABTCN3OXDY3GPYKP72G5N66MYUOVJHA',
      },
      {
        side: 'heads',
        imgSrc:
          'https://raw.githubusercontent.com/ozantekin/100-Days-Of-React/main/image/tura.png?token=GHSAT0AAAAAABTCN3OWFXENKYRKTISQOCWKYUOVI2Q',
      },
    ],
  }
  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)
    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0),
      }
    })
  }

  handleClick(e) {
    this.flipCoin()
  }
  render() {
    return (
      <div className='CoinContainer'>
        <h1>Madeni Para Oyunu</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Fırlat!</button>
        <p>
          Yapılan toplam fırlatma {this.state.nFlips}, bunların
          {this.state.nTails} tanesi yazı ve {this.state.nHeads} tanesi de
          turadır.
        </p>
      </div>
    )
  }
}

export default CoinContainer
