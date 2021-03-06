import React, { useEffect, useState } from 'react';
import { Spinner, Button, Center } from '@chakra-ui/react';

import { CoinTable } from './CoinTable';

export const Browse = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const totalPages = 10;

  const perPage = 10;
  const baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  const URL = `${baseUrl}?key=${process.env.REACT_APP_NOMICS_API_KEY}&per-page=${perPage}&page=${page}&interval=1d`;

  useEffect(() => {
    const getCoins = () => {
      setLoading(true);

      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setCoins([...coins, ...res]);
          setLoading(false);
        });
    };

    getCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return (
    <>
      <CoinTable coins={coins} />

      <br></br>

      {totalPages !== page && (
        <Center>
          <Button
            colorScheme="blue"
            variant="ghost"
            onClick={() => setPage(page + 1)}
          >
            {loading ? <Spinner size="md" /> : 'Load More'}
          </Button>
        </Center>
      )}
    </>
  );
};
