import axios from 'axios';
import { API_TOKEN } from '../keys';

export const FETCH_STANDINGS = 'FETCH_STANDINGS';
const ROOT_URL = 'http://api.football-data.org/v1/soccerseasons/426/leagueTable';

export function fetchStandings() {
  const url = `${ROOT_URL}`;
  const request = axios.request({
                  url: url, 
                  headers: {'X-Auth-Token': API_TOKEN}
                });
  
  return {
    type: FETCH_STANDINGS,
    payload: request
  };
}