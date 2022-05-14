class App extends React.Component {
  render() {
    return (
      <div>
        <Hi />
        <Hi />
        <Hi />
        <NumPicker />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
