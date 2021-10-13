import React, { useState, useEffect } from 'react';

import { Cash } from './Cash';
import { fetchCurrentUser } from '../../api';

export const Wallet = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchCurrentUser()
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      });
  }, []);

  return <Cash amount={user.cash.toFixed(2)} />;
};
