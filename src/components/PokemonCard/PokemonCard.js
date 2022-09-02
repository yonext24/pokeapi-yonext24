import React from 'react'
import './PokemonCard.css'
import { useState } from 'react'
import { ReactComponent as Leftsvg } from '../../images/bxs-left-arrow.svg'
import { ReactComponent as Rightsvg } from '../../images/bxs-right-arrow.svg'

export default function PokemonCard ({photo, name, types = []}) {
  const [currentImage, setCurrentImage] = useState(0)
  const finalTypes = types.map((singleType) => singleType.type.name)
  const finalName = name.charAt(0).toUpperCase() + name.slice(1)
  function handleNextPhoto () {
    if (currentImage >= 1) {
      setCurrentImage(0)
      return
    }
    setCurrentImage(1)
  }
  function handlePrevPhoto () {
    if (currentImage <= 0) {
      setCurrentImage(1)
      return
    }
    setCurrentImage(0)
  }
  return (
    <div key={name} className="pokemon-card">
      <img className="card-photo" src={photo[currentImage]} alt="pokemon" />
      <button className='btn left' onClick={handlePrevPhoto}>
        <Leftsvg/>
      </button>
      <button className='btn right' onClick={handleNextPhoto}>
        <Rightsvg />
      </button>
      <h2 className="card-name">{finalName}</h2>
      <div className="type-container">
      {
        finalTypes.map((singleType) => <div className={singleType}>{singleType}</div>)
      }
      </div>
    </div>
  )
}