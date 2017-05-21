import React, { Component } from 'react';

export class StandingsRow extends Component {
  render() {
    const team = this.props.team;
    return (
      <tr>
        <td><h5>{team.position}</h5></td>
        <td><h5>{team.teamName}</h5></td>
        <td><h5>{team.playedGames}</h5></td>
        <td><h5>{team.wins}</h5></td>
        <td><h5>{team.draws}</h5></td>
        <td><h5>{team.losses}</h5></td>
        <td><h5>{team.goals}</h5></td>
        <td><h5>{team.goalsAgainst}</h5></td>
        <td><h5>{team.goalDifference}</h5></td>
        <td><h5>{team.points}</h5></td>
      </tr>
    );
  }
}