import React from 'react'
import { Flex, Box, Button, Image } from '@chakra-ui/react'
import Layout from '../containers/Layout'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box as='header' w='100%'>
      <Layout w='100%'>
        <Flex w='100%'>
          <Flex flex={1} justifyContent='center' alignItems='center'>
            <Link to='/'>
              <Button mr={5} size='md' variant='ghost' colorScheme='blue'>Inicio</Button>
            </Link>
            <Button mr={5} size='md' variant='ghost' colorScheme='blue'>Centros</Button>
            <Button size='md' variant='ghost' colorScheme='blue'>Contacto</Button>
          </Flex>
          <Flex
            flex={1}
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src='/logo.jpeg'
              alt='dental clinic logo'
              maxW='100px'
              transition='all ease-out .2s'
              _hover={{
                transform: 'scale(1.1) rotateZ(15deg)',
                cursor: 'pointer'
              }}
            />
          </Flex>
          <Flex flex={1} justifyContent='center' alignItems='center'>
            <Link to='/login'>
              <Button mr={5} size='md' variant='ghost' colorScheme='blue'>Iniciar sesión</Button>
            </Link>
            <Link to='/register'>
              <Button size='md' variant='ghost' colorScheme='blue'>Registrarse</Button>
            </Link>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  )
}

export default Header
