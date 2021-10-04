import React, { useEffect, useState } from 'react';
import { Spinner } from '@chakra-ui/react';

import { CoinTable } from './CoinTable';

export const Browse = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const perPage = 10;
  const baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  const URL = `${baseUrl}?key=${process.env.REACT_APP_NOMICS_API_KEY}&per-page=${perPage}&page=${page}&interval=1d`;

  useEffect(() => {
    const getCoins = () => {
      setLoading(true);

      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setCoins(res);
          setLoading(false);
        });
    };

    getCoins();
  }, [URL]);

  return <div>{loading ? <Spinner /> : <CoinTable coins={coins} />}</div>;
};
