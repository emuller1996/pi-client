import React from 'react';
import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import PokemonList from './components/PokemonList/PokemonList';
import './App.css';
import PokemonDetail from './components/PokemonDetail';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>

        <Route exact path='/'>
          <Navbar />
          <PokemonList />
        </Route>
        <Route path='/pokemon/:id'>
          <PokemonDetail />
        </Route>


      </Router>








    </ChakraProvider>
  );
}

export default App;
