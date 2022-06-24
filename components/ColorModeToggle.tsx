import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ColorModeToggle(props: {[key: string]: any}) {
  const { ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
    	aria-label={`Toggle ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      icon={colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}
      onClick={toggleColorMode}
      {...rest}
    />
  )
}