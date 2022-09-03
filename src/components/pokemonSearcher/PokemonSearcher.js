import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import  './pokemonSearcher.css'

export default function PokemonSearcher () {
  const [keyword, setKeyword] = useState('')
  let navigate = useNavigate()

  const handleChange = e => {
    setKeyword(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    navigate(`/pokemons/${keyword}`)
  }
  return <div className="input-container">
    <form onSubmit={handleSubmit}>
      <input placeholder="Busca tu pokemon favorito" onChange={handleChange} />
      <button>Buscar</button>
    </form>
  </div>
}