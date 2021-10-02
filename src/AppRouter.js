import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from './components/landing';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Home } from './components/home';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
};
