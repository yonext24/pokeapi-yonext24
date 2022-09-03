import { useState } from "react";
import { ReactComponent as Leftsvg } from '../../images/bxs-left-arrow.svg'
import { ReactComponent as Rightsvg } from '../../images/bxs-right-arrow.svg'
import Buttons from "../buttons/Buttons";
import "./pokemonCardPage.css"

export default function PokemonCardPage({ sprites }) {
  const [image, setImage] = useState(0)
  const [shinyImage, setShinyImage] = useState(0)
  const [game, setGame] = useState(0)

  const hasShiny = sprites.front_shiny ? true : false
  const shinyPhotos = hasShiny ? [sprites.front_shiny, sprites.back_shiny] : []
  const defaultPhotos = [sprites.front_default, sprites.back_default]

  console.log(hasShiny)
  const games = Object.entries(sprites).forEach(element => {
  });

  return (
    <>
      <div className="photo default">
        <Buttons state={image} setState={setImage} list={defaultPhotos} />
        <img alt='pokemon' src={defaultPhotos[image]} />
      </div>
      {
        hasShiny ? 
        <div className="photo shiny">
          <Buttons state={shinyImage} setState={setShinyImage} list={shinyPhotos} />
          <img alt="shinyPokemon" src={shinyPhotos[shinyImage]} />
        </div>
         : null
      }
    </>
  )

}