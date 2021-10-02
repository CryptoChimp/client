import React from 'react';
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Illustration } from './Illustration';

export const Landing = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Welcome to{' '}
          <Text as={'span'} color={'blue.400'}>
            CryptoChimp
          </Text>
        </Heading>
        <Text colorScheme={'gray'} maxW={'3xl'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus aperiam
          harum alias officiis assumenda officia quibusdam deleniti eos
          cupiditate.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Link to="/login">
            <Button rounded={'full'} px={6} colorScheme={'blue'}>
              Get started
            </Button>
          </Link>
          <a href="https://github.com/CryptoChimp">
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </a>
        </Stack>
        <Flex w={'full'}>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
};
