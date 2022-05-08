import React from 'react';
import {
  Box, Image, Stack, Heading, VStack, Text, Button
} from '@chakra-ui/react';
import avatar from '../../images/avatar.JPG'
import { Envelope } from 'react-bootstrap-icons';

function Home() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" py="5" minH="calc(100vh - (80px + 120px))" >
        <Stack direction={['column', 'row']} spacing={9}>
          <Image src={avatar} m={['auto', 0]} borderRadius="full" boxSize="250px" alt='Mulia Hartawan Negara' boxShadow='lg' />

           <VStack align={['center', 'left']} textAlign={['center', 'left']} spacing={5}>
               <Heading as="h2" size="lg">Mulia Hartawan N</Heading>
               <Text>
                    Software engineer specialized in frontend development and Jamstack-based ecosystems.
               </Text>

               <Text>
                    Doing frontend development at Strangelove Ventures. Tinkering open source projects at Koding Ninja. Previous core organizer at SurabayaJS. Previous maintainer at Deno Land Indonesia and Frontend Indonesia.
               </Text>

               <Text mr={["0", "auto"]} display="block">
                    Currently based on 🇮🇩 Cikarang, Indonesia.
               </Text>
               <Stack direction={['column', 'row']}>
                    <Button leftIcon={<Envelope />}>
                        mulia.hartawan011@gmail.com
                    </Button>
               </Stack>
           </VStack>
        </Stack>
    </Box>
  );
}

export default Home;
