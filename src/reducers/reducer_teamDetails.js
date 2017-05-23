import { FETCH_TEAM_DETAILS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TEAM_DETAILS:
    if (!action.payload.data) {
      return state;
    }
    return action.payload.data;

    default:
      return state;
  }
}