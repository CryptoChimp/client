import React from 'react';
import { Box, Stack, HStack, Text } from '@chakra-ui/react';

export const Cash = ({ amount }) => {
  return (
    <Stack textAlign="center">
      <Box
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderRadius={'xl'}
      >
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl">
            Cash
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="400">
              $
            </Text>
            <Text fontSize="5xl" fontWeight="600">
              {amount}
            </Text>
          </HStack>
        </Box>
      </Box>
    </Stack>
  );
};
