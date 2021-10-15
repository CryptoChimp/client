import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';

import './Login.css';
import { GoogleButton } from './GoogleButton';

export const Login = () => {
  return (
    <div className="login">
      <Flex width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderRadius={8}>
          <Box textAlign="center">
            <Heading>Log in to CryptoChimp</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <GoogleButton />
          </Box>
        </Box>
      </Flex>
    </div>
  );
};
