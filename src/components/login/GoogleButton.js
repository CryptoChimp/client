import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text } from '@chakra-ui/react';

const handleSignInClick = () => {
  window.open(`${process.env.REACT_APP_API}/auth/google`, '_self');
};

export const GoogleButton = () => {
  return (
    <Button
      w={'full'}
      variant={'outline'}
      leftIcon={<FcGoogle />}
      onClick={handleSignInClick}
    >
      <Center>
        <Text>Sign in with Google</Text>
      </Center>
    </Button>
  );
};
