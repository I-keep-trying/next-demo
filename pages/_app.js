import { SessionProvider } from 'next-auth/react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import '../styles/globals.css'
import chakra_theme from '../styles/chakra_theme'
import DefaultLayout from '../layouts/default'
import { ContextProvider } from '../modules/Context'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={chakra_theme}>
        <ColorModeScript
          initialColorMode={chakra_theme.config.initialColorMode}
        />
        <DefaultLayout>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </DefaultLayout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
