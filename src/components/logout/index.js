import React from 'react';
import { Button, Box, Heading, Text, Stack, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './Logout.css';

const handleLogoutClick = () => {
  window.open(`${process.env.REACT_APP_API}/auth/logout`, '_self');
};

export const Logout = () => {
  return (
    <div className="logout">
      <Box
        borderRadius="2xl"
        boxShadow="2xl"
        alignItems="center"
        padding="50px"
      >
        <Heading textAlign="center" paddingBottom="10px">
          Log out of CryptoChimp?
        </Heading>
        <Text colorScheme={'gray'} maxW={'sm'} textAlign="center">
          You can always log back in at any time.
        </Text>
        <Center>
          <Stack spacing={6} direction={'row'} paddingTop="20px">
            <Link to="/browse">
              <Button rounded={'full'} px={6}>
                Cancel
              </Button>
            </Link>
            <Button
              rounded={'full'}
              px={6}
              colorScheme="blue"
              onClick={handleLogoutClick}
            >
              Log out
            </Button>
          </Stack>
        </Center>
      </Box>
    </div>
  );
};
