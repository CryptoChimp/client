import React, { useEffect, useState } from 'react';
import { Spinner, Button } from '@chakra-ui/react';

import { CoinTable } from './CoinTable';

export const Browse = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const totalPages = 10;

  const perPage = 50;
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

  return (
    <div>
      {loading ? <Spinner /> : <CoinTable coins={coins} />}

      {totalPages !== page && (
        <Button
          colorScheme="blue"
          variant="ghost"
          onClick={() => setPage(page + 1)}
        >
          {loading ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </div>
  );
};
