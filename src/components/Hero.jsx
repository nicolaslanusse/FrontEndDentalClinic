import React from 'react'
import { Flex, Box, Heading, Text } from '@chakra-ui/react'
import Layout from '../containers/Layout'

const Hero = () => {
  return (
    <Box
      w='100%'
      h='70vh'
      bgImage='/smile.jpg'
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      <Layout h='100%'>
        <Flex
          height='100%'
          alignItems='center'
        >
          <Box flex={1}>
            <Heading mb={5} fontSize='5xl' color='GrayText'>Clínica Dental</Heading>
            <Text fontSize='lg' fontWeight='medium' color='GrayText'>
              En Clínica dental Barcelona unimos los profesionales más destacados, los últimos tratamientos y técnicas, la tecnología más innovadora y las mejores instalaciones para ofrecer el mejor servicio a nuestros pacientes.
              Nos avalan casi 30 años de experiencia y crecimiento constante, ofreciendo a nuestros pacientes no solo la mejor calidad asistencial, sino también el mejor trato humano.
            </Text>
          </Box>
          <Box flex={1} />
        </Flex>
      </Layout>
    </Box>
  )
}

export default Hero
