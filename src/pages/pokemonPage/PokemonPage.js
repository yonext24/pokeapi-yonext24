import { useParams } from 'react-router-dom'
import { getPokemons } from '../../services/getPokemons'
import { useEffect, useState } from 'react'

export default function PokemonPage () {
  const [pokemonData, setPokemonData] = useState(null)
  const { pokemon } = useParams()

  useEffect(() => {
    getPokemons(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => setPokemonData(res))
  }, [pokemon]) 

  if (pokemonData === null || pokemonData.ok === false) {
    return null
  }

  return (
  <div>
    <h2>{pokemonData.name}</h2>
    <img alt='pokemon' src={pokemonData.sprites.front_default}  />
  </div>
  )
}