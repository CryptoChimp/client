import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Landing } from './components/landing';
import { Login } from './components/login';
import { Logout } from './components/logout';
import { Navbar } from './components/navbar';
import { Browse } from './components/browse';
import { Buy } from './components/buy';
import { Sell } from './components/sell';
import { Wallet } from './components/wallet';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route
        path="/browse"
        component={() => <Navbar main={<Browse />} title="Coins" />}
      />
      <Route
        path="/buy"
        component={() => <Navbar main={<Buy />} title="Buy" />}
      />
      <Route
        path="/sell"
        component={() => <Navbar main={<Sell />} title="Sell" />}
      />
      <Route
        path="/wallet"
        component={() => <Navbar main={<Wallet />} title="Wallet" />}
      />
    </Switch>
  );
};
