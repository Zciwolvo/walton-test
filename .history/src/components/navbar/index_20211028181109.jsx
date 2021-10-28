import React from "react";
import styled from "styled-components";
import { Link , BrowserRouter as Router } from "react-router-dom";
import NavbarBurger from "../mobilenavbar";

import WaltonLogo from "../../assets/logo/waltonlogo.png";

const Container = styled.div`
width: 100%;
height: 127px;
background: #F4F4F4 0% 0% no-repeat padding-box;
display: flex;
flex-direction: column;
align-items: center;
`;

const TopContainer = styled.div`
  width: 70%;
  max-width: 1440px;
  margin: auto;
  height: 127px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    visibility: hidden;
    height: 0;
  }
`;

const LogoImg = styled.img`
  display: flex;
  flex-direction: column;
  width: 207px;
  height: 67px;
`;

const NavLinks = styled.a`
  display: flex;
  padding: 2em 0em 2em 2em;
  text-align: center;
  font-family: Spartan;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0px;
  opacity: 1;
`;

const Links = ["Kalkulator", "Realizacje", "Referencje", "O firmie", "Serwis", "Aktualności"]

const NavLinksSpecial = styled.a`
  display: flex;
  margin-left: 1em;
  padding: 1em;
  width: 113px;
  justify-content: space-evenly;
  text-align: center;
  font-family: Spartan;
  border-radius: 40px 40px 40px 40px;
  background-color: #F58500;
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0px;
  opacity: 1;
`;

const Triangle = styled.div`
  margin-left: 2px;
  margin-top: 6px;
  display: flex;
  border-style: solid;
  border-color: transparent transparent #F58500 transparent;
  border-width: 0 0 12px 12px;
  height: 0;
  width: 0;
`;

export function Navbar(props) {


    return(
    <Container>
      <NavbarBurger /> 
      <TopContainer>
          <Router basename="walton-test">
              <Link to="/" onClick={() => {window.location.href="/"}}><LogoImg src={WaltonLogo}/></Link>
              <NavLinks><Link to="/Usługi" onClick={() => {window.location.href="/Usługi"}} style={{ textDecoration: 'none', color:'black' }}>Usługi</Link><Triangle></Triangle></NavLinks>
              <NavLinks><Link to={"/Kalkulator"} onClick={() => {window.location.href="/Kalkulator"}} style={{ textDecoration: 'none', color:'black' }}>Kalkulator</Link></NavLinks>
              <NavLinks><Link to={"/Realizacje"} onClick={() => {window.location.href="/Realizacje"}} style={{ textDecoration: 'none', color:'black' }}>Realizacje</Link></NavLinks>
              <NavLinks><Link to={"/Referencje"} onClick={() => {window.location.href="/Referencje"}} style={{ textDecoration: 'none', color:'black' }}>Referencje</Link></NavLinks>
              <NavLinks><Link to={"/O firmie"} onClick={() => {window.location.href="/O firmie"}} style={{ textDecoration: 'none', color:'black' }}>O firmie</Link></NavLinks>
              <NavLinks><Link to={"/Serwis"} onClick={() => {window.location.href="/Serwis"}} style={{ textDecoration: 'none', color:'black' }}>Serwis</Link></NavLinks>
              <NavLinks><Link to={"/Aktualności"} onClick={() => {window.location.href="/Aktualności"}} style={{ textDecoration: 'none', color:'black' }}>Aktualności</Link></NavLinks>
              <NavLinksSpecial><Link to="kontakt" onClick={() => {window.location.href="walton-test/kontakt"}} style={{ textDecoration: 'none', color:'white' }}>Kontakt</Link></NavLinksSpecial>
          </Router>
      </TopContainer>
    </Container>
    );
}