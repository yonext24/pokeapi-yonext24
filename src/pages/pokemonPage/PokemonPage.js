import { useParams } from 'react-router-dom'
import { getPokemons } from '../../services/getPokemons'
import { useEffect, useState } from 'react'
import PokemonCardPage from '../../components/pokemonCardPage/PokemonCardPage'
import './pokemonPage.css'
import PokemonImage from '../../components/pokemonImage/PokemonImage'
import Error404 from '../error404/Error404'
import NextPrevPokemon from '../../components/nextprevPokemon/NextPrevPokemon'

// Agregar línea de peso y de altura
// Agregar un map de base stats con imagenes como "hp", attack(espada) etc
// Agregar los tipos
// Agregar la navbar con imágen de pokedex
// Agregar habilidades

export default function PokemonPage () {
  const [pokemonData, setPokemonData] = useState(null)
  const { pokemon } = useParams()

  useEffect(() => {
    getPokemons({url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`})
    .then(res => setPokemonData(res))
  }, [pokemon]) 


  if (pokemonData === null || pokemonData.ok === false) {
    return null
  }
  if (pokemonData === false) return <Error404 />

  const { sprites, name, height, weight, id, stats } = pokemonData
  const { 'official-artwork' : photo_oficial } = sprites.other
  const { front_default } = photo_oficial


  return (
  <>
    <div className='buttons-container'>
      <NextPrevPokemon id={id} />  
    </div>
    <div className='page-container'>
      <PokemonImage photo_oficial={front_default} height={height} weight={weight} name={name} stats={stats} />
      <PokemonCardPage sprites={sprites}/>
    </div>
  </>
  )
}