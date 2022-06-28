import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
import ColorModeToggle from '../components/ColorModeToggle'
import Typewriter from 'typewriter-effect';

const Home: NextPage = () => {
  return (
    <div>
      <Heading pt = {10} textAlign={"center"}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.changeDelay(50).typeString("Hi, I'm Tinu Vanapamula").start();
          }}
        />
      </Heading>
      <ColorModeToggle />
    </div>
  )
}

export default Home
