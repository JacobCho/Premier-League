import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/standings.css';

export class StandingsRow extends Component {
  getQualifyRow() {
    const team = this.props.team;
    const qualify = team.position < 5 ? "cl" : team.position < 6 ? "el" : "";
    var qualifyLogo = qualify === "cl" ? "https://seeklogo.com/images/U/UEFA_Champions_League-logo-DD9AE0500D-seeklogo.com.png" : 
                      qualify === "el" ? "https://www.seeklogo.net/wp-content/uploads/2016/11/uefa-europa-league-logo-preview.png" :
                      "";
    if (qualifyLogo !== "") {
      return <img src={qualifyLogo} className="standings-icon" alt="qualify"/>;
    } else {
      return <div></div>;
    }
  }

  render() {
    const team = this.props.team;
    const link = team._links.team.href;
    const id = link.substring(link.length - 2, link.length);
    return (
      <tr>
        <td><h5>{team.position}</h5></td>
        <td>{this.getQualifyRow()}</td>
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