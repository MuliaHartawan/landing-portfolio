import React from 'react';
import { Routes, Route} from 'react-router-dom';
import {
  ChakraProvider,
  Container,
  Show,
} from '@chakra-ui/react';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md">
        <Show above='md'>
          <Navbar />
        </Show>
      
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={} /> */}
        </Routes>

        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
