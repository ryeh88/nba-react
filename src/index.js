import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Main';
import {createStore} from 'redux';
// import Header from './components/HeaderComponent';

// // Render the main component into the dom
// ReactDOM.render(<Layout />, document.getElementById('app'));

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);