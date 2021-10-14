import React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import { Logo } from './Logo';
import './Footer.css';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Logo />
          <Text>© 2021 CryptoChimp. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton
              label={'GitHub'}
              href={'https://github.com/MaximilianHagelstam'}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={'Twitter'}
              href={'https://twitter.com/MaximilianHag12'}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={'Linkedin'}
              href={
                'https://www.linkedin.com/in/maximilian-hagelstam-704840186/'
              }
            >
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};
