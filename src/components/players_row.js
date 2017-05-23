import React, { Component } from 'react';

export class PlayersRow extends Component {
  getAge(birthday) {
    var ageDifMs = Date.now() - new Date(birthday);
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    const player = this.props.player;
    const age = this.getAge(player.dateOfBirth);
    return (
        <tr>
        <td><h5>{player.jerseyNumber}</h5></td>
        <td><h5>{player.nationality}</h5></td>
        <td><h5>{player.name}</h5></td>
        <td><h5>{age}</h5></td>
      </tr>
    );
  }

}