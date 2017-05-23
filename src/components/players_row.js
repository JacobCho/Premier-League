import React, { Component } from 'react';

export class PlayersRow extends Component {
  render() {
    const player = this.props.player;
    return (
        <tr>
        <td><h5>{player.jerseyNumber}</h5></td>
        <td><h5>{player.nationality}</h5></td>
        <td><h5>{player.name}</h5></td>
        <td><h5>{player.dateOfBirth}</h5></td>
      </tr>
    );
  }
}