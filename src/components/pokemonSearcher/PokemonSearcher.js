import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom'
import './pokemonSearcher.css'

export default function PokemonSearcher({ parentSetState, setSearchLoading, setSearchingError }) {
  const [keyword, setKeyword] = useState('')
  const [allPokemons, setAllPokemons] = useState(null)
  let navigate = useNavigate()
  const input = useRef(null)

  const getFilteredPokemons = async () => {
    if (!allPokemons && keyword.length > 0) {
      setSearchLoading(true)
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
        const data = await res.json()
        setAllPokemons(data.results)
      } catch (err) {
        setSearchingError(true)
      }
      setSearchLoading(false)
    }
    if (keyword.length > 1) {
      const filtered = allPokemons.filter(element => {
        return element.name.toLowerCase().includes(keyword.toLowerCase())
      })
      parentSetState(filtered)
    }
  }

  const handleChange = e => {
    setKeyword(e.target.value)
    if (allPokemons && e.target.value.length === 0) {
      parentSetState(null)
    }
  }
  
  useEffect(() => {
    getFilteredPokemons()
  }, [keyword]) //eslint-disable-line

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
      <input placeholder="Busca tu pokemon favorito" onChange={handleChange} ref={input} />
      <button>Buscar</button>
    </form>

  </div>
}