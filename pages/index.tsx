import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Box, Text, Stack } from '@chakra-ui/react'
import ColorModeToggle from '../components/ColorModeToggle'
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box className='main-outer-box'>
      <Box className={`main-inner-box-${colorMode}`} borderRadius='lg' p={10}>
        <Stack direction={['column', 'row']} spacing={10}>
          <Box textAlign="center" w = {['100%', '100%', '100%', '100%', '75%', '50%']}>
            <img style={{ "borderRadius": "50%" }} src="/assets/personal.jpeg" />
          </Box>
          <Box>
            <Heading textAlign={"center"} mb={5}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.changeDelay(50).typeString("Hey, I'm Tinu Vanapamula").start();
                }}
              />
            </Heading>
            <Text fontSize={'1.3rem'}>
              I'm a rising junior at Montgomery Blair High School interested in all things tech.
              I'm interested in full-stack web development, engineering, server management, and a variety of other topics.
              In my spare time, I like to play chess and work with my homelab.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Home
