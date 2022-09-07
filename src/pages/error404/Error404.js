import gengar from '../../images/gengar.png'
import React from 'react'
import styled from 'styled-components'

const MyGengar = styled.img`
  width: 50%;
  height: 50%;
`
const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

export default function Error404 () {
  return <MyContainer>
    <MyGengar src={gengar} />
    <h2>Pokemon Not Found 😔</h2>
  </MyContainer >
}