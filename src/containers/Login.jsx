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

const Login = () => {
  return (
    <>
      <Header />
      <Flex h='70vh' flexDir='column' justifyContent='center' maxW='350px' mx='auto' my={10}>
        <Heading textAlign='center' mb={10}>Iniciar sesión</Heading>
        <FormControl>
          <FormLabel>Correo electrónico</FormLabel>
          <Input type='email' />
        </FormControl>
        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input type='password' />
        </FormControl>
        <Button type='submit' mt={5} colorScheme='green'>Iniciar sesión</Button>
      </Flex>
      <Footer />
    </>
  )
}

export default Login
