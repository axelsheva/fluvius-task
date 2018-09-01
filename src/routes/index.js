import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';

import Login from '../containers/Login';
import Calendar from '../containers/Calendar';
import PrivateRoute from '../containers/PrivateRoute';

const routes = (
  <div>
    <Header />
    <div className="container">
      <Switch>
        <PrivateRoute exact path="/" component={Calendar} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </div>
);

export default routes;
