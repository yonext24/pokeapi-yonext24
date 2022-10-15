import './App.css';
import PageOfPokemons from './pages/pageOfPokemons/PageOfPokemons.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PokemonPage from './pages/pokemonPage/PokemonPage.js';
import Error404 from './pages/error404/Error404';
import PokemonSearcher from './components/pokemonSearcher/PokemonSearcher.js';
import React, { useState } from 'react';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';


function App() {
  const [filteredPokemons, setFilteredPokemons] = useState(null)
  const [searchingLoading, setSearchingLoading] = useState(false)
  const [searchingError, setSearchingError] = useState(false)

  return (
    <div className="App">
        <Router>
          <NavBar />
          <PokemonSearcher 
            parentSetState={setFilteredPokemons}
            setSearchLoading={setSearchingLoading}
            setSearchingError={setSearchingError} />
          <Routes>
            <Route exact path='/pokemons/:pokemon' element={<PokemonPage />} />
            <Route exact path='/' element={<PageOfPokemons 
                                           filteredPokemons={filteredPokemons}
                                           searchingLoading={searchingLoading} 
                                           searchingError={searchingError} />} />
            <Route path='*' element={<Error404 />}/>
          </Routes>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
