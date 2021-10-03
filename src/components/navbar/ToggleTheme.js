import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
      rounded={'full'}
      size="md"
      variant="ghost"
      onClick={toggleColorMode}
      paddingLeft="-16"
    ></IconButton>
  );
};
