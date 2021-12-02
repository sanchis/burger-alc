import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const colors = {
  brand: {
    100: '#fee1b1',
    200: '#fccd82',
    300: '#fbb953',
    400: '#f9a524',
    500: '#df8b0e',
    600: '#ae6c07',
    700: '#7d4d03',
    800: '#4c2e00',
    900: '#1d0e00'
  }
}

export default extendTheme({
  colors
}, withDefaultColorScheme({ colorScheme: 'brand' }))
