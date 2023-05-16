import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Heading
} from '@chakra-ui/react'

const Register = () => {
  return (
    <>
        <Header />
      <Flex h='70vh' flexDir='column' justifyContent='center' maxW='350px' mx='auto' my={10}>
        <Heading textAlign='center' mb={10}>Registrarse</Heading>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input type='name' />
        </FormControl>
        <FormControl>
          <FormLabel>Apellidos</FormLabel>
          <Input type='name' />
        </FormControl>
        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input type='password' />
        </FormControl>
        <Button type='submit' mt={5} colorScheme='green'>Registrarse</Button>
      </Flex>
      <Footer />
    </>
  )
}

export default Register
