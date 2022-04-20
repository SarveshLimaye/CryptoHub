import { ChakraProvider, Flex } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'


function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
    <Flex>
      <Sidebar />
      <Component {...pageProps} />
      </Flex>
    </ChakraProvider>

    
  )
}

export default MyApp
