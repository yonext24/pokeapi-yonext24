import styled, { keyframes } from "styled-components";

const heightAnimation = keyframes`
from {
  transform: scaleY(0);
}
to {
  transform: scaleY(1);
}
`
const Height = styled.span`
    color: white;
    position: absolute;
    top: -10px;
    left: 5px;
    width: max-content;
  `
const PokemonHeightFullDiv = styled.div`
    height: 80%;
    border-left: 3px solid grey;
    position: absolute;
    left: 5px;
    bottom: 45px;
    z-index: -1;
    `
const PokemonHeightDiv = styled.div`
    height: ${props => ((props.height) * 100) / 200}%;
    border-left: 3px solid white;
    position: absolute;
    bottom: 0;
    left: -3px;
    animation: ${heightAnimation} .3s;
    transition: height .3s;
  `

export default function HeightLine({ height }) {
  return <PokemonHeightFullDiv>
    <PokemonHeightDiv height={height}>
      <Height>{height / 10} M</Height>
    </PokemonHeightDiv>
  </PokemonHeightFullDiv>
}