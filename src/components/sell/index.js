import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  useColorModeValue,
  Select,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export const Sell = () => {
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
            <Select placeholder="Coin symbol">
              <option>Bitcoin</option>
              <option>Dogecoin</option>
            </Select>
          </FormControl>
          <FormControl id="quantity">
            <FormLabel>Quantity</FormLabel>
            <NumberInput min={1}>
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
            >
              Sell
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  );
};
