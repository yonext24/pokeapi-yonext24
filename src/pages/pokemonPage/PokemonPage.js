import { useParams } from 'react-router-dom'
import { getPokemons } from '../../services/getPokemons'
import { useEffect, useState } from 'react'

export default function PokemonPage () {
  const [pokemonData, setPokemonData] = useState({})
  const { pokemon } = useParams()


  useEffect(() => {
    const fetchData = async () => {
      try {
        return await getPokemons(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      } catch(err) {console.log(err)}
    }
    fetchData()
    .then(res => setPokemonData(res))
  }, [pokemon]) 

  console.log(pokemonData)


  return <div>
    <h2>{pokemonData.name}</h2>
    <img alt='pokemon' src={pokemonData.sprites.front_default} />
  </div>
}