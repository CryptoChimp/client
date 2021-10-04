import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ReactLink, useHistory } from 'react-router-dom';

import { ToggleTheme } from './ToggleTheme';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
  >
    {children}
  </Link>
);

export const Navbar = ({ main, title }) => {
  let history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchCurrentUser = () =>
      fetch(process.env.REACT_APP_API_HOME, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            history.push('/');
          }
          return res.json();
        })
        .then((res) => {
          setUser(res);
        });

    fetchCurrentUser();
  }, [history]);

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>CryptoChimp</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <ReactLink to="/browse">
                <NavLink>Browse</NavLink>
              </ReactLink>

              <ReactLink to="/wallet">
                <NavLink>Wallet</NavLink>
              </ReactLink>

              <ReactLink to="/buy">
                <NavLink>Buy</NavLink>
              </ReactLink>

              <ReactLink to="/sell">
                <NavLink>Sell</NavLink>
              </ReactLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <ToggleTheme />
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar size={'sm'} src={user.avatar} />
              </MenuButton>
              <MenuList>
                <MenuItem>{user.displayName}</MenuItem>
                <MenuDivider />
                <ReactLink to="/logout">
                  <MenuItem>Log out</MenuItem>
                </ReactLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <ReactLink to="/browse">
                <NavLink>Browse</NavLink>
              </ReactLink>

              <ReactLink to="/wallet">
                <NavLink>Wallet</NavLink>
              </ReactLink>

              <ReactLink to="/buy">
                <NavLink>Buy</NavLink>
              </ReactLink>

              <ReactLink to="/sell">
                <NavLink>Sell</NavLink>
              </ReactLink>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Center pt={12} pb={4}>
        <Heading fontSize={'4xl'}>{title}</Heading>
      </Center>

      <Box p={8}>{main}</Box>
    </>
  );
};