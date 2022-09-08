import styled, { keyframes } from "styled-components";
import { useRef, useLayoutEffect, useState } from 'react'

const weightAnimation = keyframes`
from {
  transform: scaleX(0);
}
to {
  transform: scaleX(1);
}
`
const Weight = styled.span`
    color: white;
    position: absolute;
    top: -20px;
    right: -7px;
    width: max-content;
  `

const PokemonWeightDiv = styled.div`
    width: ${props => props.weight / 10 < 500 ? ((props.weight / 10) * 100) / 500 : 100 }%;
    border-bottom: 3px solid white;
    position: absolute;
    animation: ${weightAnimation} .3s;
  `
const PokemonFullWeightDiv = styled.div`
    width: 80%;
    border-bottom: 3px solid grey;
    position: absolute;
    bottom: 5px;
    left: 45px;
    z-index: -1;
  `
const PokemonWeightPlus = styled.div`
width: 110%;
border-bottom: 3px solid red;
position: absolute;
z-index: -1;
`


export default function WeightLine({ weight }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)
  
  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth)
  }, [])


  return (
    <PokemonFullWeightDiv ref={ref}>
      <PokemonWeightDiv weight={weight} width={width} >
        {weight / 10 < 600 ? <Weight>{weight / 10}k</Weight> : null}
      </PokemonWeightDiv>
      {weight / 10 > 600 ? <PokemonWeightPlus><Weight>{weight / 10}k</Weight></PokemonWeightPlus> : null}
    </PokemonFullWeightDiv>
  )
}