import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStandings } from '../actions';
import { StandingsRow } from '../components/standings_row';
import '../styles/standings.css';

class Standings extends Component {
  componentDidMount() {
    this.props.fetchStandings();
  }

  renderBody(team) {
    return <StandingsRow team={team} key={team.teamName}/>;
  }

  render() {
    if (!this.props.standings.teams) {
      return <div></div>;
    }

    return (
      <div className="col-md-8 col-md-offset-2">
        <div className="header">
          <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" alt="" />
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="numeric">Position</th>
              <th className="qualify">European Qualification</th>
              <th className="icon-row"></th>
              <th className="club-name">Club</th>
              <th className="numeric">Played</th>
              <th className="numeric">Wins</th>
              <th className="numeric">Draws</th>
              <th className="numeric">Losses</th>
              <th className="numeric">GF</th>
              <th className="numeric">GA</th>
              <th className="numeric">GD</th>
              <th className="numeric">Points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.standings.teams.map(this.renderBody)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    standings: state.standings
  };
}

export default connect(mapStateToProps, { fetchStandings })(Standings);