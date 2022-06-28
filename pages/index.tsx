import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Box, Text } from '@chakra-ui/react'
import ColorModeToggle from '../components/ColorModeToggle'
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/react';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box className='main-outer-box'>
      <Box className={`main-inner-box-${colorMode}`} borderRadius='lg' p = {10}>
        <Heading textAlign={"center"} mb = {5}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Hey, I'm Tinu Vanapamula").start();
            }}
          />
        </Heading>
        <Text fontSize={'1.3rem'}>
          I'm a rising junior at Montgomery Blair High School interested in all things tech. I'm interested in full-stack web development, engineering, server management, and a variety of other topics. In my spare time, I like to play chess and work with my homelab.
        </Text>
      </Box>
      <ColorModeToggle />
    </Box>
  )
}

export default Home
