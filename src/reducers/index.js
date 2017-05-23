import { combineReducers } from 'redux';
import StandingsReducer from './reducer_standings';
import PlayersReducer from './reducer_players';
import TeamDetailsReducer from './reducer_teamDetails';

const rootReducer = combineReducers({
  standings: StandingsReducer,
  players: PlayersReducer,
  teamDetails: TeamDetailsReducer
});

export default rootReducer;