import { useEffect } from "react";
import { useState } from "react";
import getPokemonsDetail from "../../services/getPokemonsDetail";
import PokemonCard from "../../components/PokemonCard/PokemonCard.js";
import './PageOfPokemons.css'
import { useLocation, useNavigate } from "react-router-dom";
import Error404 from "../error404/Error404";
import nextPage from '../../images/nextPage.svg'
import prevPage from '../../images/prevPage.svg'

export default function PageOfPokemons() {
  const { search } = useLocation()
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    let query = new URLSearchParams(search)
    let pageRaw = query.get('page') === null || parseInt(query.get('page')) < 0 || parseInt(query.get('page')) > 55 ? 0 : query.get('page')
    setPage(parseInt(pageRaw))
  },[search])

  const handleNextClick = () => {
    if (page >= 56) return
    navigate(`/?page=${page+1}`)
  }
  const handlePrevClick = () => {
    if (page <= 0) return
    navigate(`/?page=${page-1}`)
  }
  
  const fetchPokemons = async () => {
    try {
      const data = await getPokemonsDetail(page)
      return data
    }
    catch (err) {
      return <Error404 />
    }
  }
  useEffect(() => {
    fetchPokemons()
      .then(res => setPokemons(res))
  }, [page, search]) // eslint-disable-line

  if (parseInt(page) > 55) return <Error404 />

  return <>
    <div className="pages-buttons">
      <div className='pokedex'>
        <h3>Pokédex</h3>
      </div>
      <div className='buttons'>
        <button onClick={handlePrevClick}>
          <img src={prevPage} alt='prev' />
        </button>
        <span>Página {page} de 55</span>
        <button onClick={handleNextClick}>
          <img src={nextPage} alt='prev' />
        </button>
      </div>
    </div>
    <div className="container">
      {
        pokemons.map((pokemon) => {
          const { 'official-artwork': sprite } = pokemon.sprites.other
          return <PokemonCard key={pokemon.name} photo={sprite.front_default} name={pokemon.name} types={pokemon.types} />
        })
      }
    </div>
  </>
}