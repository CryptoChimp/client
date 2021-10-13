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
                <Td>BTC</Td>
                <Td isNumeric>{2}</Td>
                <Td isNumeric>${4569.32}</Td>
                <Td isNumeric>${209.12}</Td>
                <Td isNumeric color={12.4 < 0 ? 'red.400' : 'green.400'}>
                  {12.4}%
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};
