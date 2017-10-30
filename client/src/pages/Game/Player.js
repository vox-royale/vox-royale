import React from 'react'

export default class Player extends React.Component {

  render() {

    return (
      <div className="player-div">
        <img src={this.props.imgURL} alt={this.props.alter} /> 
      </div>
    )
  }
}