import { FETCH_STANDINGS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_STANDINGS:
      const data = action.payload.data;
      if (!data) {
        return state;
      }
      const standings = data.standing;
      return {
        leagueTitle: data.leagueCaption,
        matchDay: data.matchday,
        teams: _.sortBy(standings, "position")
      };  
      
    default:
      return state;
  }
}