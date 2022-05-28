import React, { Component } from 'react'

class AnnoyingFrom extends Component {
  handleKey(e) {
    // alert('Bir şeylere tıkladın!')
    // console.log(e)
    if (e.keyCode === 223) {
      alert("Star'a tıkladın!")
    } else {
      alert('yıldıza tıkla!')
    }
  }
  render() {
    return (
      <div>
        <h3>Form</h3>
        <textarea onKeyUp={this.handleKey}></textarea>
      </div>
    )
  }
}

export default AnnoyingFrom
