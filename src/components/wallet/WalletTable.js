import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
import uuid from 'uuid';

export const WalletTable = ({ coins }) => {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderRadius={'xl'}
    >
      <Table>
        <Thead>
          <Tr>
            <Th>Symbol</Th>
            <Th isNumeric>Quantity</Th>
            <Th isNumeric>Amount invested</Th>
            <Th isNumeric>Current price</Th>
            <Th isNumeric>Gain</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coins.map((coin) => {
            return (
              <Tr key={uuid.v4()}>
                <Td>{coin.symbol}</Td>
                <Td isNumeric>{coin.quantity}</Td>
                <Td isNumeric>${coin.amountInvested}</Td>
                <Td isNumeric>${coin.currentPrice}</Td>
                <Td
                  isNumeric
                  color={coin.profitPct < 0 ? 'red.400' : 'green.400'}
                >
                  {coin.profitPct}%
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
