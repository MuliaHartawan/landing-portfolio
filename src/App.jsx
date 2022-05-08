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
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md">
        <Show above='md'>
          <Navbar />
        </Show>
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>

        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
