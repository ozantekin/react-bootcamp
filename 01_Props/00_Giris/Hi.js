class Hi extends React.Component {
  render() {
    const props = this.props
    return (
      <h1>
        Merhaba {props.to} ben {this.props.from}
      </h1>
    )
  }
}
