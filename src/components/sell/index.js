import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';

import { fetchCurrentUser, sellCoin } from '../../api';

export const Sell = () => {
  const [loading, setLoading] = useState(false);
  const [ownedCoins, setOwnedCoins] = useState([]);
  const [symbol, setSymbol] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await sellCoin(symbol);

    setLoading(false);
    window.location.reload(false);
  };

  useEffect(() => {
    fetchCurrentUser()
      .then((res) => res.json())
      .then((res) => {
        setOwnedCoins(res.wallet);
      });
  }, []);

  return (
    <Flex align={'center'} justify={'center'}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'xl'}
        p={8}
      >
        <Stack spacing={4}>
          <form onSubmit={onSubmit}>
            <FormControl id="symbol" isRequired>
              <FormLabel>Symbol</FormLabel>
              <Select
                placeholder="Coin symbol"
                onChange={(e) => setSymbol(e.target.value)}
                width={56}
              >
                {ownedCoins.map((ownedCoin) => {
                  return (
                    <option key={ownedCoin.symbol}>{ownedCoin.symbol}</option>
                  );
                })}
              </Select>
            </FormControl>
            <Stack spacing={10} pt={4}>
              {loading ? (
                <Button isLoading colorScheme="blue" variant="solid"></Button>
              ) : (
                <Button colorScheme="blue" type="submit">
                  Sell
                </Button>
              )}
            </Stack>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};
