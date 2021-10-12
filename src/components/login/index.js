import React from 'react';
import { Button, Flex, Box, Heading } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import './Login.css';

const handleSignInClick = () => {
  window.open(`${process.env.REACT_APP_API}/auth/google`, '_self');
};

export const Login = () => {
  return (
    <div className="login">
      <Flex width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderRadius={8}>
          <Box textAlign="center">
            <Heading>Log in to CryptoChimp</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Button
              onClick={handleSignInClick}
              colorScheme="blue"
              size="lg"
              leftIcon={<FaGoogle />}
              width="full"
              mt={4}
              rounded={'full'}
            >
              Google
            </Button>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};
