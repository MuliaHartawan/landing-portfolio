import React from 'react';
import {
  GridItem, Grid, Text, Heading, Image
} from '@chakra-ui/react';

function PortfolioCard(props) {
    return (
        <Grid my={8} templateColumns='1fr 2fr' gap={6}>
            <GridItem>
                <Image borderRadius="lg" src="https://images.unsplash.com/photo-1649963801418-60de295ae373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </GridItem>
            <GridItem>
                <Text color='gray.500'>Javascript</Text>
                <Heading as="h2" size="md" mt="2">Kerangka Kerja dan Paradigma Interaksi</Heading>
                <Text color='gray.500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At a atque reiciendis ipsa culpa? Dolorem, molestiae. Sit ipsam, facere libero odit officia modi accusantium culpa velit, dicta veritatis officiis illo?</Text>
            </GridItem>
        </Grid>
    );
}

export default PortfolioCard;
