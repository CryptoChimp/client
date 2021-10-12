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

import { buyCoin } from '../../api';

export const Buy = () => {
  const toast = useToast();

  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState();

  const onSubmit = async () => {
    const res = await buyCoin(symbol.toUpperCase(), quantity);

    toast({
      title: res.message,
      status: res.status,
      isClosable: true,
    });
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
          <FormControl id="symbol">
            <FormLabel>Symbol</FormLabel>
            <Input type="text" onChange={(e) => setSymbol(e.target.value)} />
          </FormControl>
          <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <NumberInput min={1} onChange={(e) => setQuantity(e)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Stack spacing={10}>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={onSubmit}
            >
              Buy
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};
