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
    if (keyword === '') {
      return
    }
    const finalKeyword = keyword.toLowerCase()
    navigate(`/pokemons/${finalKeyword}`)
  }
  return <div className="input-container">
    <form onSubmit={handleSubmit}>
      <input placeholder="Busca tu pokemon favorito" onChange={handleChange} />
      <button>Buscar</button>
    </form>
  </div>
}