import React from 'react';
import styled from 'styled-components';
import { Link , BrowserRouter as Router, HashRouter } from "react-router-dom";
import WaltonLogo from "../../assets/logo/waltonlogo.png";

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  top: 0;
  flex-flow: row nowrap;
  visibility: hidden;
  align-items: center;
  height: 0;
  width: 0;
  background-color: #f4f4f4;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 800px) {
    flex-flow: column nowrap;
    position: fixed;
    justify-content: space-evenly;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
    top: -1em;
    right: 0;
    height: 100vh;
    width: ${windowWidth}px;
    visibility: visible;
    transition: transform 0.3s ease-in-out;
    padding-left: 0;
    li {
      color: #fff;
    }
  }
`;

const NavLinks = styled.a`
  display: flex;
  font-family: Spartan;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0px;
  opacity: 1;
`;

const LogoImg = styled.img`
  display: flex;
  flex-direction: column;
  width: 207px;
  height: 67px;
`;

const Links = ["Kalkulator", "Realizacje", "Referencje", "O firmie", "Serwis", "Aktualności", "Kontakt"]

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
          <HashRouter basename="/">
              <Link to="/Home"><LogoImg src={WaltonLogo}/></Link>
              {Links.map(function (link){
                return <NavLinks><Link to={ link } style={{ textDecoration: 'none', color:'black' }}>{link}</Link></NavLinks>
            })}
          </HashRouter>
    </Ul>
  )
}

export default RightNav