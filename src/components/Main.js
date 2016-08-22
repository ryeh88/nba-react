require('normalize.css/normalize.css');
require('styles/App.css');


import React from 'react';
import Header from './HeaderComponent';
import TeamIconWrapper from './TeamIconWrapperComponent';
import {requestTeamInfo} from '../actions/actions';
import {connect} from "react-redux";
import recieveTeam from '../actions/actions'
import api from '../api';

 


export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	team: []
    };
  }

  componentWillMount(){
   	api.getTeam();
  }

  render() {
  	console.log(this.props.team)
    return (
      <div className="index">
        <Header />
        <TeamIconWrapper />
      </div>
    );
  }
}


