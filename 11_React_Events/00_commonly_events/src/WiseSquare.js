import React, { Component } from 'react'

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [
      'Merhaba',
      'Hoş geldin',
      'İyi çalışmalar',
      'React Bootcamp',
      '100 Days of React',
      'Görüşürüz',
      'Hoşça kal',
    ]
    let randomIndex = Math.floor(Math.random() * messages.length)
    alert(messages[randomIndex])
  }

  render() {
    return (
      <div>
        <h3>Üzerine Gel</h3>
        <div style={{ fontSize: '3em', display: 'inline-block' }}>
          <div onMouseEnter={this.dispenseWisdom}>👻</div>
          <div onMouseLeave={this.dispenseWisdom}>🤡</div>
        </div>
      </div>
    )
  }
}

export default WiseSquare
