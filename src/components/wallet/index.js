import React, { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';

import { Cash } from './Cash';
import { fetchCurrentUser } from '../../api';
import { WalletTable } from './WalletTable';

export const Wallet = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchCurrentUser()
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Cash
        amount={
          loading ? (
            <Spinner size="md" />
          ) : (
            Math.round((user.cash + Number.EPSILON) * 100) / 100
          )
        }
      />

      <WalletTable coins={[1]} />
    </div>
  );
};
