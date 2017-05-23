import React, { Component } from 'react';
import { fetchPlayers } from '../actions';
import { connect } from 'react-redux';
import { PlayersRow } from '../components/players_row';
import '../styles/players.css';

class Players extends Component {
  componentDidMount() {
    const { url } = this.props.match;
    const id = url.substring(1, url.length);
    this.props.fetchPlayers(id);
  }

  renderBody(player) {
    return <PlayersRow player={player} key={player.jerseyNumber}/>;
  }

  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="Numeric">Number</th>
              <th className="icon-row">Nationality</th>
              <th>Name</th>
              <th className="Numeric">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {this.props.players.map(this.renderBody)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players
  };
}

export default connect(mapStateToProps, { fetchPlayers })(Players);