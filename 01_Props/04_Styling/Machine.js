class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props
    const winner = s1 === s2 && s2 === s3
    const textStyle = { fontSize: '30px', color: '#fff' }
    return (
      <div className='Machine'>
        <label htmlFor='textInput'></label>
        <p style={{ fontSize: '50px', backgroundColor: 'Purple' }}>
          {' '}
          {s1} {s2} {s3}{' '}
        </p>
        <p className={winner ? 'win' : 'lose'} style={textStyle}>
          {' '}
          {winner ? 'Helal sana' : 'Sad story'}{' '}
        </p>
      </div>
    )
  }
}
