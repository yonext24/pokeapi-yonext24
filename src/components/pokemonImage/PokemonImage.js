import './pokemonImage.css'
import React from 'react'
import styled from 'styled-components'
import fondopokemon from '../../images/fondopokemon.jfif'


export default function PokemonImage ({ photo_oficial, height, weight, name }) {
    name = name.charAt(0).toUpperCase() + name.slice(1)

    const PokemonName = styled.h2`
      color: white;
      font-size: 2.3rem;
    `

    const PokemonImage = styled.img`
      width: 50%;
      height: 50%;
    `

    const Height = styled.span`
      color: white;
      position: absolute;
      top: -10px;
      left: 5px;
      width: max-content;
    `
    const Weight = styled.span`
      color: white;
      position: absolute;
      top: -20px;
      right: -7px;
      width: max-content;
    `

    const PhotoContainer = styled.div`
      min-height: 500px;
      min-width: 500px;
      height: 100%;
      width: 90%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      flex-direction: column;
      margin-bottom: 50px;
      
      &::after {
        content: '';
        background-image: url(${fondopokemon});
        background-size: cover, contain;
        position: absolute;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        filter: brightness(30%);
        top: 0%;
        left: 0;
        z-index: -100;
        border-radius: 20px;
      }
    `
    const PokemonHeightFullDiv = styled.div`
      height: 400px;
      border-left: 3px solid grey;
      position: absolute;
      left: 5px;
      bottom: 45px;
      z-index: -1;
    `
    const PokemonHeightDiv = styled.div`
      height: calc(0% + ${(height*200) / 100}px);
      border-left: 3px solid white;
      position: absolute;
      left: 5px;
      bottom: 45px;
    `
    console.log(weight)
    const PokemonWeightDiv = styled.div`
      width: ${weight/10 < 600 ? weight/10 : 600}px;
      border-bottom: 3px solid white;
      position: absolute;
      bottom: 5px;
      left: 45px;
    `
    const PokemonFullWeightDiv = styled.div`
      width: 600px;
      border-bottom: 3px solid grey;
      position: absolute;
      bottom: 5px;
      left: 45px;
      z-index: -1;
    `
    const PokemonWeightPlus = styled.div`
      width: 630px;
      border-bottom: 3px solid red;
      position: absolute;
      bottom: 5px;
      left: 45px;
      z-index: -1;
    `


    return <>
      <PhotoContainer>
        <PokemonName>{name}</PokemonName>
        <PokemonImage src={photo_oficial} />
        <PokemonHeightFullDiv />
        <PokemonHeightDiv>
          <Height>{height/10} Metros</Height>
        </PokemonHeightDiv>
        <PokemonFullWeightDiv />
        { weight/10 > 600 ? <PokemonWeightPlus ><Weight>{weight/10}k</Weight></PokemonWeightPlus> : null}
        <PokemonWeightDiv>
        { weight/10 < 600 ? <Weight>{weight}k</Weight> : null}
        </PokemonWeightDiv>
      </PhotoContainer>
    </>
}