class App extends React.Component {
  render() {
    return (
      <div>
        <Hi to='Ozan' from='Nida' />
        <Hi to='Aram' from='Defne' />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
