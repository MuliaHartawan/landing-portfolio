import React from 'react';
import {
  GridItem,
  Grid,
  Text,
  Heading,
  Image,
  Divider,
  Box,
  HStack,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import PortfolioCard from '../../components/PortfolioCard';
import { Envelope, ArrowRight} from 'react-bootstrap-icons';
import item1 from '../../images/chakraui.png';

const portfolios = [
  {
    title: 'Kerangka Kerja dan Paradigma Interaksi',
    thumbnail:
      'https://images.unsplash.com/photo-1649963801418-60de295ae373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. At a atque reiciendis ipsa culpa? Dolorem, molestiae. Sit ipsam, facere libero odit officia modi accusantium culpa velit, dicta veritatis officiis illo?',
    tech: [
      {
        name: 'Express Js',
        icon: '',
        color: '',
      },
      {
        name: 'React Js',
        icon: '',
        color: '',
      },
    ],
  },
];

function Portfolio() {
  const colorCardHidden = useColorModeValue('rgb(0, 0, 0, 0.08)', 'rgb(255, 255, 255, 0.06)');
  return (
    <>
      <Heading size="lg" my="2rem">
        Recent Projects
      </Heading>
      <Text mb="1rem">
        Curated handcrafted projects I have made in the past
      </Text>
      <Divider />
      <Grid my={8} templateColumns={['1fr', '2fr 1.5fr']} gap={6}>
        <GridItem>
          <HStack spacing="2">
            <Badge display="flex" alignItems="center" colorScheme="teal">
              <Envelope /> Express Js
            </Badge>
            <Badge colorScheme="telegram">React Js</Badge>
            <Badge colorScheme="yellow">Mysql</Badge>
          </HStack>
          <Heading as="h2" size="md" mt="2">
            Kerangka Kerja dan Paradigma Interaksi
          </Heading>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At a atque
            reiciendis ipsa culpa? Dolorem, molestiae. Sit ipsam, facere libero
            odit officia modi accusantium culpa velit, dicta veritatis officiis
            illo?
          </Text>
          <Link href="#" isExternal display="flex" alignItems="center">
            Visit Website <ArrowRight mx="10px" />
          </Link>
        </GridItem>
        <GridItem>
          <Box
            bg={colorCardHidden}
            borderRadius="lg"
            h="100%"
            w="100%"
            overflow="hidden"
            _hover={{
              bg: 'rgb(0, 0, 0, 0.16)',
            }}
          >
            <Image
              transition="0.2s"
              shadow="lg"
              transform="translate(1.9rem,1.5rem)scale(1.2)"
              _hover={{
                transform: 'translate(1.9rem,1.25rem)scale(1.2)',
              }}
              src={item1}
            />
          </Box>
        </GridItem>
      </Grid>
      <Grid my={8} templateColumns="2fr 1.5fr" gap={6}>
        <GridItem>
          <HStack spacing="2">
            <Badge display="flex" alignItems="center" colorScheme="teal">
              <Envelope /> Express Js
            </Badge>
            <Badge colorScheme="telegram">React Js</Badge>
            <Badge colorScheme="yellow">Mysql</Badge>
          </HStack>
          <Heading as="h2" size="md" mt="2">
            Kerangka Kerja dan Paradigma Interaksi
          </Heading>
          <Text color="gray.500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At a atque
            reiciendis ipsa culpa? Dolorem, molestiae. Sit ipsam, facere libero
            odit officia modi accusantium culpa velit, dicta veritatis officiis
            illo?
          </Text>
          <Link href="#" isExternal display="flex" alignItems="center">
            Visit Website <ArrowRight mx="10px" />
          </Link>
        </GridItem>
        <GridItem>
          <Box
            bg={colorCardHidden}
            borderRadius="lg"
            h="100%"
            w="100%"
            overflow="hidden"
            _hover={{
              bg: 'rgb(0, 0, 0, 0.16)',
            }}
          >
            <Image
              transition="0.2s"
              shadow="lg"
              transform="translate(1.9rem,1.5rem)scale(1.2)"
              _hover={{
                transform: 'translate(1.9rem,1.25rem)scale(1.2)',
              }}
              src={item1}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Portfolio;
