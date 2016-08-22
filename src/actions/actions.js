export const REQUEST_TEAM_INFO = 'REQUEST_TEAM_INFO';
export const SELECT_TEAM = 'SELECT_TEAM';
export const INVALIDATE_TEAM = 'INVALIDATE_TEAM';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const FETCH_TEAM = 'FETCH_TEAM';

export function selectTeam(team) {
  return {
    type: SELECT_TEAM,
    team
  }
}

export function invalidateTeam(team) {
  return {
    type: INVALIDATE_TEAM,
    team
  }
}
export function requestTeamInfo(team) {
  return {
    type: REQUEST_TEAM_INFO,
    team
  }
}		

export function receiveTeam(team, json) {
  return {
    type: RECEIVE_TEAM,
    team,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchTeamInfo(team) {
return dispatch => {
    dispatch(requestPosts(team))
    return fetch(`http://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID=1610612737&season=2015-16`)
      .then(response => response.json())
      .then(json => dispatch(receiveTeam(team, json)))
  }
}		