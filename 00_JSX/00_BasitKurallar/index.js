function getGreeting() {
  const greeting = [
    'hi!',
    'hi there',
    'selam',
    'merhaba',
    'Hoş geldin',
    'selam gardaş',
    'sa',
  ]
  return greeting[Math.floor(Math.random() * greeting.length)]
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Selamlama: {getGreeting()} </h1>
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))
