import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Container,
} from '@chakra-ui/react';

export const TopStocks = () => {
  return (
    <Container borderWidth={1} rounded="2xl">
      <StatGroup p={4}>
        <Stat>
          <StatLabel>DOGE</StatLabel>
          <StatNumber>$345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>ETH</StatLabel>
          <StatNumber>$45</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            9.05%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>BTC</StatLabel>
          <StatNumber>$34500,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            1.19%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Container>
  );
};
