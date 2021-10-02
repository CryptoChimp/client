import React from 'react';
import { Button, Flex, Box, Heading } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import './Login.css';

const handleSignInClick = () => {
  window.open(`${process.env.REACT_APP_API_HOME}/auth/google`, '_self');
};

export const Login = () => {
  return (
    <div className="login">
      <Flex width="full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderRadius={8}>
          <Box textAlign="center">
            <Heading>Sign In to CryptoChimp</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <Button
              onClick={handleSignInClick}
              colorScheme="blue"
              size="lg"
              leftIcon={<FaGithub />}
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
