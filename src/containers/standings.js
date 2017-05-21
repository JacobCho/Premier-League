import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStandings } from '../actions';
import { StandingsRow } from '../components/standings_row';

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
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Position</th>
              <th>Team Name</th>
              <th>Played</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
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