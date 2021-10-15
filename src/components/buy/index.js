import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  useColorModeValue,
  Input,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { buyCoin } from '../../api';

export const Buy = () => {
  let history = useHistory();
  const toast = useToast();

  const [loading, setLoading] = useState(false);
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await buyCoin(symbol.toUpperCase(), quantity);

    setLoading(false);

    toast({
      title: res.message,
      status: res.status,
      isClosable: true,
    });

    history.push('/wallet');
  };

  return (
    <Flex align={'center'} justify={'center'}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'xl'}
        p={8}
      >
        <Stack spacing={4}>
          <form onSubmit={onSubmit}>
            <FormControl id="symbol" isRequired>
              <FormLabel>Symbol</FormLabel>
              <Input type="text" onChange={(e) => setSymbol(e.target.value)} />
            </FormControl>
            <FormControl id="quantity" isRequired pt={4}>
              <FormLabel>Quantity</FormLabel>
              <NumberInput min={1} onChange={(e) => setQuantity(e)}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Stack spacing={10} pt={4}>
              {loading ? (
                <Button isLoading colorScheme="blue" variant="solid"></Button>
              ) : (
                <Button colorScheme="blue" type="submit">
                  Buy
                </Button>
              )}
            </Stack>
          </form>
        </Stack>
      </Box>
    </Flex>
  );
};
