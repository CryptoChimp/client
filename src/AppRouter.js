import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from './components/landing';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Home } from './components/home';
import { Navbar } from './components/navbar';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={() => <Navbar main={<Home />} />} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
};
