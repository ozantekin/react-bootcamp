function getNum() {
  return Math.floor(Math.random() * 10) + 1
}

class NumPicker extends React.Component {
  render() {
    const num = getNum()
    let msg
    // bu işlemler if içinde de yapılabilirdi tabii ki
    if (num === 5) {
      msg = 'Helal olsun bee'
    } else {
      msg = 'sağlık olsun yenile bakalım'
    }
    return (
      <div>
        <h1>Şanslı sayıyı bul: {num} </h1>
        <p>{num === 5 ? 'Buldun!' : 'Tekrar Dene :('}</p>
        <p>{msg}</p>
        <p>
          {num === 5 ? (
            <img src='https://media.giphy.com/media/XpBiDKOlQ6gR7OW2jD/giphy.gif' />
          ) : null}
        </p>
      </div>
    )
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))
