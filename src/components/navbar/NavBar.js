import React from "react";
import styled from "styled-components";
import Pokédex_logo from '../../images/Pokédex_logo.png'
import { Link } from "react-router-dom";
import gitlogo from '../../images/gitlogo.svg'

const MyNavBar = styled.div`
  width: 100%;
  height: 60px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--orange);
  margin-bottom: 30px;
  `
const NavContainer = styled.div`
  background-color: var(--orange);
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 0 10px;
`

const GitButton = styled.button`
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: var(--blue);
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: black;
    img {
      filter: invert(100%);
    }
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: none;
    }
  }
  img {
    margin-left: 10px;
  }
`

const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MyLogo = styled.img`
  height: 70%;
`

export default function NavBar() {
  return <MyNavBar>
    <NavContainer>
      <NavLink to='/' >
        <MyLogo src={Pokédex_logo} alt='home' />
      </NavLink>
      <a href='https://github.com/yonext24/pokeapi-yonext24' target='_blank' rel='noreferrer'>
        <GitButton>
          GitHub
          <img src={gitlogo} alt='see on github' />
        </GitButton>
      </a>
    </NavContainer>
  </MyNavBar>
}