import '../styles/style.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import Background from '../components/Background'

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  body: "Lexend, system-ui, sans-serif",
  heading: "Lexend, system-ui, sans-serif",
  mono: "Menlo, monospace",
};

const theme = extendTheme({ 
  config, 
  fonts, 
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Background />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
