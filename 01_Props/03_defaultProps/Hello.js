class Hello extends React.Component {
  static defaultProps = {
    from: 'Defne',
    bangs: 2,
  }
  render() {
    const repeat = '!'.repeat(this.props.bangs)
    return (
      <div>
        <p>
          Ben {this.props.to} o {this.props.from}
          {repeat}
        </p>
      </div>
    )
  }
}
