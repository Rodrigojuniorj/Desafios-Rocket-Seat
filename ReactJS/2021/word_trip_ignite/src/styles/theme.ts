import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181b23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#47585B",
      "300": "#999999",
      "200": "#DADADA",
      "100": "#F5F8FA",
    },
    white: '#FFFFFF',
    yellow: {
      "800": "#FFBA08",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.50'
      }
    }
  }
})