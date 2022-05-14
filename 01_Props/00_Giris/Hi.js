class Hi extends React.Component {
  render() {
    const props = this.props
    const repeat = '!'.repeat(this.props.value)
    return (
      <div>
        <h1>
          <p>
            {' '}
            Merhaba {props.to} ben {this.props.from}
            {repeat}
          </p>
          <img src='https://pbs.twimg.com/media/FSiwUWcXEAMEuHS.jpg' />
        </h1>
      </div>
    )
  }
}
