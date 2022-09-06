import { useParams } from 'react-router-dom'
import { getPokemons } from '../../services/getPokemons'
import { useEffect, useState } from 'react'
import PokemonCardPage from '../../components/pokemonCardPage/PokemonCardPage'
import './pokemonPage.css'

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
  const { sprites, types, name } = pokemonData

  return (
  <div className='page-container'>
    <PokemonCardPage sprites={sprites} name={name}/>
  </div>
  )
}