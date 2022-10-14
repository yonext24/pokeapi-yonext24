import gengar from '../../images/gengar.png'
import React from 'react'
import styled from 'styled-components'

const MyGengar = styled.img`
  width: 210px;
  height: 210px;
`
const MyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 75vh;
`

export default function Error404 () {
  return <MyContainer>
    <MyGengar src={gengar} />
    <h2>Pokemon Not Found 😔</h2>
  </MyContainer >
}