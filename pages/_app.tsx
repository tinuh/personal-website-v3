import '../styles/style.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Box } from '@chakra-ui/layout'
import Background from '../components/Background'
import Nav from '../components/Nav'

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  body: "Lexend, system-ui, sans-serif",
  heading: "Lexend, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#ffffff", "#000000")(props),
    }
  })
}

const theme = extendTheme({ 
  config, 
  fonts,
  styles
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Background />
      <Nav />
      <Box p = {5} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
