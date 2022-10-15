import { useEffect } from "react";
import { useState } from "react";
import getPokemonsDetail from "../../services/getPokemonsDetail";
import PokemonCard from "../../components/PokemonCard/PokemonCard.js";
import './PageOfPokemons.css'
import { useLocation, useNavigate } from "react-router-dom";
import Error404 from "../error404/Error404";
import nextPage from '../../images/nextPage.svg'
import prevPage from '../../images/prevPage.svg'

export default function PageOfPokemons({filteredPokemons}) {
  const { search } = useLocation()
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  // const [generation, setGeneration] = useState(null)
  // const [type, setType] = useState(null)

  useEffect(() => {
    let query = new URLSearchParams(search)
    let pageRaw = query.get('page') === null || parseInt(query.get('page')) < 0 || parseInt(query.get('page')) > 55 ? 0 : query.get('page')
    setPage(parseInt(pageRaw))
    // const typeRaw = query.get('type') === null  
  }, [search])

  const handleNextClick = () => {
    if (filteredPokemons) {
      if (page >= Math.floor(filteredPokemons.length / 20)) return
      setPage(page + 1)
      return
    }
    if (page >= 56) return
    navigate(`/?page=${page + 1}`)
  }
  const handlePrevClick = () => {
    if (filteredPokemons) {
      if (page <= 0) return
      setPage(page - 1)
      return
    }
    if (page <= 0) return
    navigate(`/?page=${page - 1}`)
  }
  useEffect(() => {
    setPage(0)
  }, [filteredPokemons])

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true)
      try {
        const data = await getPokemonsDetail(filteredPokemons ? {p: page, filteredPokemons} : {p: page})
        setLoading(false)
        return data
      }
      catch (err) {
        setLoading(false)
        return <Error404 />
      }
    }
    fetchPokemons()
      .then(res => setPokemons(res))
  }, [page, search, filteredPokemons]) // eslint-disable-line

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
        {
          !filteredPokemons 
          ? <span>Página {page} de 55</span>
          : <span>Página {page} de {Math.floor(filteredPokemons.length / 20)}</span>
        }
        <button onClick={handleNextClick}>
          <img src={nextPage} alt='prev' />
        </button>
      </div>
    </div>
    {!loading ?
      <div className={`container${filteredPokemons ? ' has-height' : ''}`}>
        {
          pokemons.map((pokemon) => {
            const { 'official-artwork': sprite } = pokemon.sprites.other
            return <PokemonCard key={pokemon.name} photo={sprite.front_default} name={pokemon.name} types={pokemon.types} />
          })
        }
      </div>
      : <div className='loading'>
          <div className="spinner"></div>
        </div>
    }
    {
      filteredPokemons && <div className='height-holder'></div>
    }
  </>
}