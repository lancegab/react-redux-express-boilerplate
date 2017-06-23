import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';


ReactDOM.render(
    <Router history={browserHistory}>
  		<Route path="/" component={App}>
  		</Route>
  	</Router>
     ,
  document.getElementById('container')
);
