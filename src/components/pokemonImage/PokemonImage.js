import React from 'react'
import styled, { keyframes } from 'styled-components'
import fondopokemon from '../../images/fondopokemon.jfif'
import PokemonStats from '../pokemonStats/PokemonStats'

const opacityAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to {
      opacity: 1;
    }
  `
const heightAnimation= keyframes`
from {
  transform: scaleY(0);
}
to {
  transform: scaleY(1);
}
`
const weightAnimation= keyframes`
from {
  transform: scaleX(0);
}
to {
  transform: scaleX(1);
}
`
const PokemonName = styled.h2`
    color: white;
    font-size: 2.3rem;
    justify-self: flex-start;
  `

const PokemonImg = styled.img`
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

const PhotoAnimation = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
animation: ${opacityAnimation} .5s;
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
    max-height: 400px;
    height: calc(0% + ${props => (props.height * 200) / 100}px);
    border-left: 3px solid white;
    position: absolute;
    bottom: 0;
    left: -3px;
    animation: ${heightAnimation} .3s;
  `
const PokemonWeightDiv = styled.div`
    width: ${props => props.weight / 10 < 600 ? props.weight / 10 : 600}px;
    border-bottom: 3px solid white;
    position: absolute;
    bottom: 5px;
    left: 45px;
    animation: ${weightAnimation} .3s;
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


export default function PokemonImage({ photo_oficial, height, weight, name, stats }) {
  name = name.charAt(0).toUpperCase() + name.slice(1)

  return <>
    <PhotoContainer>
      <PokemonName>{name}</PokemonName>
      <PhotoAnimation>
        <PokemonImg src={photo_oficial} />
      </PhotoAnimation>
      <PokemonStats stats={stats} ></PokemonStats>
      <PokemonHeightFullDiv>
        <PokemonHeightDiv height={height}>
          <Height>{height / 10} Metros</Height>
        </PokemonHeightDiv>
      </PokemonHeightFullDiv>
      <PokemonFullWeightDiv />
      {weight / 10 > 600 ? <PokemonWeightPlus><Weight>{weight / 10}k</Weight></PokemonWeightPlus> : null}
      <PokemonWeightDiv weight={weight}>
        {weight / 10 < 600 ? <Weight>{weight}k</Weight> : null}
      </PokemonWeightDiv>
    </PhotoContainer>
  </>
}