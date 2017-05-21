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
    return <StandingsRow team={team} key={team.teamName} />;
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
              <th className="Numeric">Position</th>
              <th className="icon-row"></th>
              <th className="club-name">Club</th>
              <th className="Numeric">Played</th>
              <th className="Numeric">Wins</th>
              <th className="Numeric">Draws</th>
              <th className="Numeric">Losses</th>
              <th className="Numeric">GF</th>
              <th className="Numeric">GA</th>
              <th className="Numeric">GD</th>
              <th className="Numeric">Points</th>
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