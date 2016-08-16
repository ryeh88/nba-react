require('normalize.css/normalize.css');
require('styles/App.css');

import $ from "jquery";
import React from 'react';
import Header from './HeaderComponent';
import TeamIconWrapper from './TeamIconWrapperComponent';
import TeamIcon from './TeamIconComponent';

$.ajax({
    type: "GET",
    dataType: 'jsonp',
    contentType: "application/jsonp; charset=utf-8",
    url: "http://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID="+teamId+"&season=2015-16",
    success: function(data) {
      console.log(data.resultSets[1].rowSet);
      var PPGRank = data.resultSets[1].rowSet[0][3];
      var PPG = data.resultSets[1].rowSet[0][4];
      var ReboundRank = data.resultSets[1].rowSet[0][5];
      var Rebound = data.resultSets[1].rowSet[0][6];
      var AssistRank = data.resultSets[1].rowSet[0][7];
      var Assist = data.resultSets[1].rowSet[0][8];
      var OPPGRank = data.resultSets[1].rowSet[0][9];
      var OPPG = data.resultSets[1].rowSet[0][10];
      console.log("PPG Rank: " + PPGRank + ", PPG: " +PPG+", Rebound Rank: "+ ReboundRank + ", Rebounds Per Gae: " + Rebound + ", Assist Rank: " + AssistRank + ", Assists per game: " + Assist + ", Opponents point Rank: " + OPPGRank + ", Opponents points per game: " + OPPG);
      $('#ppg').html(PPG);
      $('#pointsRank').html(PPGRank + 'th');
      $('#apg').html(Assist);
      $('#assistsRanks').html(AssistRank + 'th') ;
      $('#rpg').html(Rebound);
      $('#reboundsRank').html(ReboundRank + 'th');
      $('#oppPoints').html(OPPG);
      $('#oppPpg').html(OPPGRank + 'th');


    }
  });

export default class Layout extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <TeamIconWrapper>
        	<TeamIcon />
        </TeamIconWrapper>
      </div>
    );
  }
}

Layout.defaultProps = {
};


