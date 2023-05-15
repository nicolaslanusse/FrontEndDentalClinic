import React from 'react'
import { Box } from '@chakra-ui/react'

const Layout = ({ children, ...props }) => {
  return (
    <Box
      maxWidth='1200px'
      mx='auto'
      px='20px'
      {...props}
    >
      {children}
    </Box>
  )
}

export default Layout
