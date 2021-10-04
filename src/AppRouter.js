import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from './components/landing';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Navbar } from './components/navbar';
import { Browse } from './components/browse';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/browse" component={() => <Navbar main={<Browse />} />} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
    </Switch>
  );
};
