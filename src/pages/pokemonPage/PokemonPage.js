import { useParams } from 'react-router-dom'
import { getPokemons } from '../../services/getPokemons'
import { useEffect, useState } from 'react'
import Error404 from '../error404/Error404'

export default function PokemonPage () {
  const [loading, setLoading] = useState(false)
  const [pokemonData, setPokemonData] = useState(null)
  const { pokemon } = useParams()

  useEffect(() => {
    setLoading(true)
    getPokemons(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => setPokemonData(res))
    .then(setLoading(false))
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