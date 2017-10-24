import React from 'react'

export default class Link extends React.Component {

  render() {
    console.log(this.props.thing)
    return <a href={this.props.url} id="linkColor"  target="_blank">{this.props.name}</a>
  }
}
