import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

export const CoinTable = ({ coins }) => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Logo</Th>
            <Th>Name</Th>
            <Th>Symbol</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>1d change</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coins.map((coin) => {
            return (
              <Tr key={coin.id}>
                <Td>{coin.rank}</Td>
                <Td>
                  <img src={coin.logo_url} alt={coin.id} width="24px"></img>{' '}
                </Td>
                <Td>{coin.name}</Td>
                <Td>{coin.symbol}</Td>
                <Td isNumeric>${Number(coin.price).toFixed(2)}</Td>
                <Td
                  isNumeric
                  color={
                    Number(coin['1d'].price_change_pct) < 0
                      ? 'red.400'
                      : 'green.400'
                  }
                >
                  {coin['1d'].price_change_pct}%
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};
