import React from 'react'
import './PokemonCard.css'
import { useState } from 'react'
import Buttons from '../buttons/Buttons'
import { Link } from 'react-router-dom'

export default function PokemonCard({ photo, name, types = [] }) {
  const [currentImage, setCurrentImage] = useState(0)
  const finalTypes = types.map((singleType) => singleType.type.name)
  const finalName = name.charAt(0).toUpperCase() + name.slice(1)


  return (
    <div key={name} className="pokemon-card">
      <div className='image-container'>
        <img className="card-photo" src={photo[currentImage]} alt="pokemon" ></img>
        <Buttons state={currentImage} setState={setCurrentImage} list={photo} />
      </div>
      <Link to={'/pokemons/' + name}>
        <h2 className="card-name">{finalName}</h2>
      </Link>
      <div className="type-container">
        {
          finalTypes.map((singleType) => <div className={singleType}>{singleType}</div>)
        }
      </div>
    </div>
  )
}