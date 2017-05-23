import axios from 'axios';
import { API_TOKEN } from '../keys';

export const FETCH_STANDINGS = 'FETCH_STANDINGS';
export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FETCH_TEAM_DETAILS = 'FETCH_TEAM_DETAILS';

export function fetchStandings() {
  const url = 'http://api.football-data.org/v1/soccerseasons/426/leagueTable';
  const request = fetchRequest(url);
  
  return {
    type: FETCH_STANDINGS,
    payload: request
  };
}

export function fetchPlayers(id) {
  let url = `http://api.football-data.org/v1/teams/${id}/players`;
  const request = fetchRequest(url);

  return {
    type: FETCH_PLAYERS,
    payload: request
  }
}

export function fetchTeamDetails(id) {
  let url = `http://api.football-data.org/v1/teams/${id}`;
  const request = fetchRequest(url);

  return {
    type: FETCH_TEAM_DETAILS,
    payload: request
  }
}

function fetchRequest(url) {
  return axios.request({
    url: url,
    headers: {'X-Auth-Token': API_TOKEN}
  });
}