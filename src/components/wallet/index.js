import React, { useState, useEffect } from 'react';
import { Spinner } from '@chakra-ui/react';

import { Cash } from './Cash';
import { fetchCurrentUser, fetchCoinPrices } from '../../api';
import { WalletTable } from './WalletTable';

export const Wallet = () => {
  const [user, setUser] = useState({});
  const [wallet, setWallet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getWalletData = async () => {
      setLoading(true);

      const fetchedUser = await fetchCurrentUser();
      const userJson = await fetchedUser.json();

      console.log(await fetchCoinPrices(userJson.wallet));

      // const fetchedWallet = await calculateWalletData(userJson.wallet);

      setUser(userJson);
      setLoading(false);
    };

    getWalletData();
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
