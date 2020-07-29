import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login'
import SignUp from './SignUp'
import Dash from './Dashboard'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dash} />
    </div>
  </Router>
  , document.getElementById('root'));

