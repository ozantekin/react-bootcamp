class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name=' Aram' hobbies={['Yüzme', 'Kayak', 'Hokey']} />
        <Friend name='Defne' hobbies={['Voleybol', 'Kitap Okuma', 'Koşu']} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
