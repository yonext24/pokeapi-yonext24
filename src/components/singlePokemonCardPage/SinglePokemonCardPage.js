import React, { useState } from 'react'
import './singlepokemoncardpage.css'
import Buttons from '../buttons/Buttons'

export default function SinglePokemonCardPage({type}) {
  const [image, setImage] = useState(0)
  const [loading, setLoading] = useState(false)

  return <div className='photo' key={type[image][0][0]}>
    <img alt="pokemon" src={type[image][0][1]} className={loading ? 'hidden' : ''} onLoad={() => {
      setLoading(false)
    }}></img>
    {
      loading ? <div className='card-image-loading'>
        <div className='mini-spinner'></div>
      </div>
      : null
    }
    <Buttons state={image} setState={setImage} setLoading={setLoading} list={type[image][0]} />
  </div>
}