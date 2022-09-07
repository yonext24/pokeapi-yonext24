import React from 'react'
import './PokemonCard.css'
import { Link } from 'react-router-dom'

export default function PokemonCard({ photo, name, types = [] }) {
  const finalTypes = types.map((singleType) => singleType.type.name)
  const finalName = name.charAt(0).toUpperCase() + name.slice(1)
  console.log(photo)

  return (
    <div key={name} className="pokemon-card">
      <div className='image-container'>
        <img className="card-photo" src={photo} alt="pokemon" ></img>
      </div>
      <Link to={'/pokemons/' + name}>
        <h2 className="card-name">{finalName}</h2>
      </Link>
      <div className="type-container">
        {
          finalTypes.map((singleType) => <div key={singleType} className={singleType}>{singleType}</div>)
        }
      </div>
    </div>
  )
}