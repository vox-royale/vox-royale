import React from 'react'

export default class Link extends React.Component {

  render() {
    
    return <a className={this.props.btn} href={this.props.url} id="linkColorFooter"></a>
  }
}