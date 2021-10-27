import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 0;
  height: 0;
  border-bottom: 2px solid #f1f1f1;
  background-color: #f1f1f1;
  padding: 0 20px;
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 100;
  @media (max-width: 800px) {
    width: 100%;
    height: 55px; 
    visibility: visible;
  }
`

const NavbarBurger = () => {
  return (
    <Nav>
      <Burger />
    </Nav>
  )
}

export default NavbarBurger