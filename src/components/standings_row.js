import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/standings.css';

export class StandingsRow extends Component {
  render() {
    const team = this.props.team;
    const link = team._links.team.href;
    const id = link.substring(link.length - 2, link.length);
    return (
      <tr>
        <td><h5>{team.position}</h5></td>
        <td><img src={team.crestURI} className="standings-icon" alt=""/></td>
        <td className="club-name">
          <h5>
            <Link to={`/${id}`}>
            {team.teamName}
            </Link>
          </h5>
        </td>
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