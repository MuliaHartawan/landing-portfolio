import React from 'react';
import {
  Box, Heading, HStack, Text, Show, Hide
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import NavLink from './NavLink';
import {BracesAsterisk, Cursor, Pencil} from 'react-bootstrap-icons'


function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between" py="5">
        <NavLink 
          to="/" 
        >
                <Heading as='h1' size="md" fontWeight="600">Mulia Hartawan</Heading>
        </NavLink>
        <HStack ml="auto" spacing="9">
            <NavLink 
              to="/about" 
            >
                <Cursor />
                <Text ml="2">About</Text>
            </NavLink>

            <NavLink 
              to="/portfolio" 
            >
                <BracesAsterisk />
                <Text ml="2">Portfolio</Text>
            </NavLink>

            <NavLink
              to="/blog" 
            >
                <Pencil />
                <Text ml="2">Writings</Text>
            </NavLink>

          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>  
    </Box>
  );
}

export default Navbar;
