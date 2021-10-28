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
          <HashRouter>
              <Link to="/" onClick={() => {window.location.href="/"}}><LogoImg src={WaltonLogo}/></Link>
              <NavLinks><Link to="/Usługi" onClick={() => {window.location.href="/Usługi"}} style={{ textDecoration: 'none', color:'black' }}>Usługi</Link></NavLinks>
              <NavLinks><Link to={"/Kalkulator"} onClick={() => {window.location.href="/Kalkulator"}} style={{ textDecoration: 'none', color:'black' }}>Kalkulator</Link></NavLinks>
              <NavLinks><Link to={"/Realizacje"} onClick={() => {window.location.href="/Realizacje"}} style={{ textDecoration: 'none', color:'black' }}>Realizacje</Link></NavLinks>
              <NavLinks><Link to={"/Referencje"} onClick={() => {window.location.href="/Referencje"}} style={{ textDecoration: 'none', color:'black' }}>Referencje</Link></NavLinks>
              <NavLinks><Link to={"/O firmie"} onClick={() => {window.location.href="/O firmie"}} style={{ textDecoration: 'none', color:'black' }}>O firmie</Link></NavLinks>
              <NavLinks><Link to={"/Serwis"} onClick={() => {window.location.href="/Serwis"}} style={{ textDecoration: 'none', color:'black' }}>Serwis</Link></NavLinks>
              <NavLinks><Link to={"/Aktualności"} onClick={() => {window.location.href="/Aktualności"}} style={{ textDecoration: 'none', color:'black' }}>Aktualności</Link></NavLinks>
              <NavLinks><Link to="/kontakt" onClick={() => {window.location.href="walton-test/kontakt"}} style={{ textDecoration: 'none', color:'black' }}>Kontakt</Link></NavLinks>
          </HashRouter>
    </Ul>
  )
}

export default RightNav