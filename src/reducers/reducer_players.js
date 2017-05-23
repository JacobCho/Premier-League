import { FETCH_PLAYERS } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYERS:
    if (!action.payload.data) {
      return state;
    }
    return action.payload.data.players;

    default:
      return state;
  }
}