import './App.css';
import PageOfPokemons from './pages/pageOfPokemons/PageOfPokemons.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PokemonPage from './pages/pokemonPage/PokemonPage.js';
import Error404 from './pages/error404/Error404';
import PokemonSearcher from './components/pokemonSearcher/PokemonSearcher.js';
import React from 'react';

function App() {
  return (
    <div className="App">
        <Router>
          <PokemonSearcher />
          <Routes>
            <Route exact path='/pokemons/:pokemon' element={<PokemonPage />} />
            <Route exact path='/' element={<PageOfPokemons />} />
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
