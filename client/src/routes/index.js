import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Main from 'pages/Main';
import Dashboard from 'pages/Dashboard';
import NotFound from 'pages/NotFound';
// import Profile from 'pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      {/* <Route path="/profile" component={Profile} isPrivate /> */}
      <Route component={NotFound} />
    </Switch>
  );
}
