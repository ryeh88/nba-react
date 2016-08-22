import { combineReducers } from 'redux';
import {
  SELECT_TEAM, INVALIDATE_TEAM,
  REQUEST_TEAM_INFO, RECEIVE_TEAM_INFO
} from '../actions';
import fetch from 'isomorphic-fetch';



export default function reducer (state={
	team: [],
	fetching: false;
	fetched: false;
	error: null
}, action){
	switch (action.type){
		case "FETCH_TEAM": {
			return {...state, fetching: true}
		}
		case "FETCH_TEAM_FULFILLED": {
			return {...state, fetching: false, fetched: true, team: action.payload}
		}
		case "FETCH_TEAM_REJECTED"
			return {...state, fetching: false, error: action.payload}
	}
	return state;
};