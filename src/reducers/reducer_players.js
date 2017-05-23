import { FETCH_PLAYERS } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS:
    if (!action.payload.data) {
      return state;
    }
    return _.sortBy(action.payload.data.players, "jerseyNumber");

    default:
      return state;
  }
}