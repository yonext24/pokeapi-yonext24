import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import fondopokemon from '../../images/fondopokemon.avif'
import HeightLine from '../HeightLine/HeightLine'
import PokemonStats from '../pokemonStats/PokemonStats'
import WeightLine from '../weightline/WeightLine'

const opacityAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(20%);
    }
    to {
      opacity: 1;
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
  transition: all .2s;
  
  @media (max-width: 700px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 415px) {
    width: 200px;
    height: 200px;
  }
  
  `


const PhotoAnimation = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
animation: ${opacityAnimation} .5s;
@media (max-width: 450px) {
    justify-content: flex-start;
  }
`
const PhotoContainer = styled.div`
  height: 100%;
  width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  margin-bottom: 10px;
    
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
  @media (max-width: 995px) {
    width: 100%;
  }
    @media (max-width: 700px) {
    height: 600px;
  }
  `


export default function PokemonImage({ photo_oficial, height, weight, name, stats }) {
  name = name.charAt(0).toUpperCase() + name.slice(1)
  const [loaded, setLoaded] = useState(false)
  const [newImageLoading, setNewImageLoading] = useState(false)

  useEffect(() => {
    console.log('triggered')
    setNewImageLoading(true)
  }, [photo_oficial])


  return <>
    <PhotoContainer style={loaded ? {} : { display: 'none' }} onLoad={() => setLoaded(true)}>
      <PokemonName>{name}</PokemonName>
      <PhotoAnimation>
        <PokemonImg src={photo_oficial} 
        style={newImageLoading 
          ? { transform: 'translateY(20%)', opacity: 0 } 
          : {} }
        onLoad={() => {
          setTimeout(() => {
            setNewImageLoading(false)
          }, 600)
        }} />
      </PhotoAnimation>
      <PokemonStats stats={stats} ></PokemonStats>
      <HeightLine height={height} />
      <WeightLine weight={weight} />
    </PhotoContainer>
  </>
}