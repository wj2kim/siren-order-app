import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact render={props => <App {...props} /> }/>
          <Route path="/dashboard" exac
          {/* <Route path="/login" exact render={props => <Login {...props} /> }/> */}
          <Redirect to='/'/>
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

