import React from 'react'
import './PokemonCard.css'
import { Link } from 'react-router-dom'

export default function PokemonCard({ photo, name, types = [] }) {
  const finalTypes = types.map((singleType) => singleType.type.name)
  const finalName = name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <Link to={'/pokemons/' + name}>
      <div key={name} className={`pokemon-card${' ' + finalTypes[0]} ${finalTypes[1] ? finalTypes[1] : ''}`}>
        <div className='image-container'>
          <img className="card-photo" src={photo} alt="pokemon" ></img>
        </div>
        <div className='name-types-container'>
          <h2 className="card-name">{finalName}</h2>
          <div className="type-container">
            {
              finalTypes.map((singleType) => <div key={singleType}>{singleType}</div>)
            }
          </div>
        </div>
      </div>
    </Link>
  )
}