import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Flex, Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex>
      <Flex flex={1} justifyConent='space-between'>
        <Button>Inicio</Button>
        <Button>Centros</Button>
        <Button>Contacto</Button>
      </Flex>
      <Box flex={1}>logo</Box>
      <Flex flex={1}>
        <Button>Iniciar sesión</Button>
        <Button>Registrarse</Button>
      </Flex>
    </Flex>
  )
}

export default Header
