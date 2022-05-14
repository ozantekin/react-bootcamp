class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name=' Aram' hobbies={['Yüzme', 'Kayak', 'Hokey']} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
