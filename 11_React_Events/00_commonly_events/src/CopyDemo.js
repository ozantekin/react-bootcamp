import React, { Component } from 'react'

class CopyDemo extends Component {
  handleCopy() {
    alert('Kopyalamak hırsızlıktır!!!')
  }
  render() {
    return (
      <div>
        <h3>Metnin Kopyalanması Doğru Değildir!</h3>
        <section
          style={{ width: '20em', display: 'inline-block' }}
          onCopy={this.handleCopy}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </section>
      </div>
    )
  }
}

export default CopyDemo
