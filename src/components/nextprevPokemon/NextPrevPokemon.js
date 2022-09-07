import React from "react";
import styled from "styled-components";
import nextPage from '../../images/nextPage.svg'
import prevPage from '../../images/prevPage.svg'
import { useNavigate } from "react-router-dom";

const NextButton = styled.button`
  display: flex;
  align-items: center;
  background-color: unset;
  border: none;
  cursor: pointer;
`
const PrevButton = styled.button`
  display: flex;
  align-items: center;
  background-color: unset;
  border: none;
  cursor: pointer;
`

export default function NextPrevPokemon (props) {
  const navigate = useNavigate()

  const id = parseInt(props.id)
  const handleNextClick = () => {
    navigate(`/pokemons/${id+1}`)
  }
  const handlePrevClick = () => {
    navigate(`/pokemons/${id-1}`)
  }
  return <>
  <PrevButton onClick={handlePrevClick} >
    <img src={prevPage} alt='prev arrow' />
    Prev Pokemon
  </PrevButton>
  <NextButton onClick={handleNextClick} >Next Pokemon
    <img src={nextPage} alt='arrow' />
  </NextButton>
  </>
}