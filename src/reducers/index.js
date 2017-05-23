import { combineReducers } from 'redux';
import StandingsReducer from './reducer_standings';
import PlayersReducer from './reducer_players';

const rootReducer = combineReducers({
  standings: StandingsReducer,
  players: PlayersReducer
});

export default rootReducer;