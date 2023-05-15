import React from 'react'
import { Flex, Box, Text, Heading, Icon } from '@chakra-ui/react'
import Layout from '../containers/Layout'
import { IoHeart, IoPeople, IoCalendar } from 'react-icons/io5'

const Information = () => {
  return (
    <Box>
      <Layout>
        <Flex flexDir='column' my={10}>
          <Heading mb={5} fontWeight='light' textAlign='center'>Tu dentista en Barcelona</Heading>
          <Flex
            flexDir='column'
            bgColor='blue.800'
            color='white'
            p={10}
            alignItems='center'
          >
            <Box maxW='70%' mx='auto'>
              <Heading mb={2} fontWeight='normal'>Una clínica dental en Barcelona 100% segura</Heading>
              <Text mb={7} fontSize='lg'>La salud bucodental de nuestros pacientes es nuestra prioridad, así como su seguridad. Por ello, hemos adaptado las instalaciones y protocolos de nuestra clínica dental, para luchar contra el Covid-19 y proteger a nuestros pacientes.</Text>
            </Box>
            <Flex justifyContent='center' alignItems='center' maxW='70%' mb={7}>
              <Icon as={IoHeart} flex={1} boxSize={12} />
              <Text flex={4} fontSize='lg'>Realizamos un control de temperatura al paciente, le entregamos unas polainas y mascarilla, disponemos de pantallas de protección y gel hidroalcohólico y acomodamos al paciente en una sala de espera acondicionada con aforo limitado.</Text>
            </Flex>
            <Flex justifyContent='center' alignItems='center' maxW='70%' mb={7}>
            <Icon as={IoPeople} flex={1} boxSize={12} />
              <Text flex={4} fontSize='lg'>Nuestro equipo viste EPIs y prepara el material de antemano para minimizar riesgos.  Facilitamos a nuestros pacientes un enjuague de agua con agua oxigenada al 1% para reducir la posible carga viral y durante el tratamiento utilizamos un sistema de aspiración extraoral.</Text>
            </Flex>
            <Flex justifyContent='center' alignItems='center' maxW='70%' mb={7}>
            <Icon as={IoCalendar} flex={1} boxSize={12} />
              <Text flex={4} fontSize='lg'>El día de la cita, el paciente es acompañado en todo momento por las instalaciones, hasta su salida de la clínica.</Text>
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  )
}

export default Information
