class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to='Ozan' from='Nida' bangs={4} />
        <Hello to='Aram' />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
