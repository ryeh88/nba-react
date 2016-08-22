
var api = {
   getTeam () {
       var url = 'http://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID=1610612737&season=2015-16';
       return fetch(url).then((res) => res.json());
   }
};

module.exports = api;