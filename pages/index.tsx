import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, Box, Text, Stack } from '@chakra-ui/react'
import ColorModeToggle from '../components/ColorModeToggle'
import Typewriter from 'typewriter-effect';
import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box className='main-outer-box'>
      <motion.div
        initial={{opacity: 0, borderRadius: '8.5px', scale: 0.95}}
        animate={{opacity: 1, scale: 1, boxShadow: "5px 5px 25px 10px rgba(255, 255, 255, 0.25), -5px -5px 25px 10px rgba(255, 255, 255, 0.22)"}}
        transition={{duration: 0.75}}
      >
        <Box className={`main-inner-box-${colorMode}`} borderRadius='lg' p={10}>
          <Stack direction={['column', 'row']} spacing={10}>
            <Box textAlign="center" w={['100%', '100%', '100%', '100%', '75%', '50%']}>
              <img style={{ "borderRadius": "50%" }} alt="Photo of Me" src="/assets/personal.jpeg" />
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
                I&apos;m a rising junior at Montgomery Blair High School interested in all things tech.
                I&apos;m interested in full-stack web development, engineering, server management, and a variety of other topics.
                In my spare time, I like to play chess and work with my homelab.
              </Text>
            </Box>
          </Stack>
        </Box>
      </motion.div>
    </Box>
  )
}

export default Home
