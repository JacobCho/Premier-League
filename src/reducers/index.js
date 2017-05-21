import { combineReducers } from 'redux';
import StandingsReducer from './reducer_standings';

const rootReducer = combineReducers({
  standings: StandingsReducer
});

export default rootReducer;