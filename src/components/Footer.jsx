import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Layout from '../containers/Layout'

const Footer = () => {
  return (
    <Box
      as='footer'
      h='80px'
      bgColor='lightblue'
    >
      <Layout
        display='flex'
        justifyContent='center'
        alignItems='center'
        h='100%'
      >
        <Text fontWeight='semibold'>© Clínica Dental Barcelona</Text>
      </Layout>
    </Box>
  )
}

export default Footer
