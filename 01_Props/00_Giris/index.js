class App extends React.Component {
  render() {
    return (
      <div>
        <Hi to='Ozan' from='Nida' />
        <Hi
          to='Aram'
          from='Defne'
          num={3}
          data={[1, 2, 3, 4, 5]}
          isChild={true}
          value={4}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
