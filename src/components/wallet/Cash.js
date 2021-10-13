import React from 'react';
import { Box, Stack, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export const Cash = ({ amount }) => {
  return (
    <Stack>
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderRadius={'xl'}
      >
        <Box p={4}>
          <Stat>
            <StatLabel>Cash</StatLabel>
            <StatNumber>${amount}</StatNumber>
          </Stat>
        </Box>
      </Box>
    </Stack>
  );
};
