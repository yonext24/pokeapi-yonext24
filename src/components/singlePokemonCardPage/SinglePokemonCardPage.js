import React, { useState } from 'react'
import './singlepokemoncardpage.css'
import Buttons from '../buttons/Buttons'

export default function SinglePokemonCardPage({type}) {
  const [image, setImage] = useState(0)


  return <div className={'photo'} key={type[image][0][0]}>
    <img alt="pokemon" src={type[image][0][1]}></img>
    <Buttons state={image} setState={setImage} list={type[image][0]} />
  </div>
}