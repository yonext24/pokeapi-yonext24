import { useState } from "react";
import Buttons from "../buttons/Buttons";
import "./pokemonCardPage.css"

export default function PokemonCardPage({ sprites, name }) {
  const [game, setGame] = useState(0)
  const [image, setImage] = useState(0)
  const [shinyImage, setShinyImage] = useState(0)

  const hasShiny = sprites.front_shiny ? true : false
  const shinyPhotos = hasShiny ? [{ front_shiny: sprites.front_shiny }, { back_shiny: sprites.back_shiny }] : []
  const defaultPhotos = [{ front_default: sprites.front_default }, { back_default: sprites.back_default }]

  console.log()

  function imagesGetter() {
    const { versions } = sprites
    const games = Object.entries(versions).map(gen => {
      return gen[1]
    })
    const entriesOfGames = games.map(game => {
      return Object.entries(game)
    })
    const objOfGames = {}
    entriesOfGames.forEach(listOfGames => {
      for (let i of listOfGames) {
        objOfGames[i[0]] = i[1]
      }
    })
    const objectOfFrontSprites = {}

    Object.entries(objOfGames).forEach(game => {
      game[1] = Object.entries(game[1])
      const frontSprites = game[1].filter(sprite => {
        if (typeof (sprite[0]) === 'string' && sprite[0].startsWith('front') && sprite[1] !== null) return true
        return false
      })
      frontSprites.forEach(sprite => {
        objectOfFrontSprites[game[0]] ||= [];
        objectOfFrontSprites[game[0]].push({ [sprite[0]]: sprite[1] })
      })
    })

    let orderedSprites = { 'Change Game': { 'default': defaultPhotos, shiny: shinyPhotos } }

    Object.entries(objectOfFrontSprites).forEach(element => {
      const game = element[0]
      const sprites = element[1]
      sprites.forEach((sprite, index, array) => {
        const normalName = Object.keys(sprite)[0]
        const name = Object.keys(sprite)[0].substring(6)
        const finalName = `back_${name}`

        const backSprite = objOfGames[game][finalName]
        if (backSprite !== undefined) {
          orderedSprites[game] ||= {}
          orderedSprites[game][name] ||= []
          orderedSprites[game][name].push({ [normalName]: sprite[normalName] })
          orderedSprites[game][name].push({ [finalName]: backSprite })
        }

      })
    })
    orderedSprites['1st'] = { 'default': defaultPhotos, shiny: shinyPhotos }

    return orderedSprites

  }
  const spritesFinal = imagesGetter();

  const currentGame = Object.keys(spritesFinal)[game]

  const images = Object.entries(spritesFinal[currentGame]).map(element => {
    const x = element[1].map(number => {
      const final = Object.entries(number)
      return final
    })
    return x
  })
  console.log(name)
  console.log(spritesFinal[currentGame])
  let title = currentGame
  .replace('_', ' ')
  .replace('-', ' ')
  title = title.charAt(0).toUpperCase() + title.slice(1)
  name = name.charAt(0).toUpperCase() + name.slice(1)



  return (
    <div className='pokemoncard-container'>
      <h1>{name}</h1>
      <div className="game-container" >
        <h2>{title}</h2>
        <Buttons state={game} setState={setGame} list={Object.entries(spritesFinal[currentGame])} />
      </div>
      <div className="photos-container">
        {
          images.map(type => {
            return (
              <div className="photo">
                <img alt="pokemon" src={type[image][0][1]}></img>
                <Buttons state={image} setState={setImage} list={type[image][0]} />
              </div>
            )
          })
        }
      </div>
    </div>
  )

}