import { useEffect } from "react";
import { useState } from "react";
import getPokemonsDetail from "../../services/getPokemonsDetail";
import PokemonCard from "../../components/PokemonCard/PokemonCard.js";
import './PageOfPokemons.css'

export default function PageOfPokemons () {
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = async () => {
    try {
      const data = await getPokemonsDetail()
      return data
    }
     catch(err) {
      console.log(err)
     }
  }
  useEffect(() => { 
    fetchPokemons()
    .then(res => setPokemons(res))
  },[])
  return <div className="container">
    {
      pokemons.map((pokemon) => {
        const {'official-artwork' : sprite} = pokemon.sprites.other
        return <PokemonCard key={pokemon.name} photo={sprite.front_default} name={pokemon.name} types={pokemon.types}/>
      })
    }
  </div>
}