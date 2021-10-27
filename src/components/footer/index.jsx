import React from "react";
import styled from "styled-components";
import { Link , BrowserRouter as Router } from "react-router-dom";

import waltonLogo from "../../assets/logo/logo_blue.png";
import markerLogo from "../../assets/logo/lokalizacja.png";
import phoneLogo from "../../assets/logo/telefon.png";
import mailLogo from "../../assets/logo/mail.png";

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

const BigBox = styled.div`
  width: 35vw;
  max-width: 35em;
  height: auto;
  background: #2E6EA6 0% 0% no-repeat padding-box;
  box-shadow: 10px 3px 14px #00000029;
  border-radius: 0px 200px 0px 0px;
  opacity: 1;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10%;
  @media (max-width: 800px) {
    width: ${windowWidth}px;
    align-items: center;
    padding: auto;
    }
`;

const SmallBox = styled.div`
  margin-top: 10em;
  width: 55vw;
  max-width: 55em;
  height: auto;
  background: #0477BF 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-left: -0.5em;
  z-index: 1;
  display: flex;
  visibility: visible;
  flex-direction: row;
  justify-content: space-between;
  padding: 10% 5em 5% 5em;
  @media (max-width: 800px) {
    width: 0;
    height: 0;
    visibility: hidden;
    margin: 0;
    padding: 0;
    }
`;

const SmallBoxMobile = styled.div`
  margin-top: 10em;
  width: 0;
  padding: 0;
  margin: 0;
  height: 0;
  font-size: 0;
  visibility: hidden;
  opacity: 1;
  z-index: 1;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    font-size: 1em;
    background: #0477BF 0% 0% no-repeat padding-box;
    width: ${windowWidth}px;
    visibility: visible;
    align-items: center;
    padding: auto;
    margin: auto;
    flex-direction: column;
    height: auto;
    }
`;

const WaltonLogo = styled.img`
  width: 207px;
  height: 67px;
`;

const MarkerLogo = styled.img`
  width: 25px;
  height: 32px;
  margin-right: 1em;
`;

const PhoneLogo = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 1em;
`;

const MailLogo = styled.img`
  width: 33px;
  height: 27px;
  margin-right: 1em;
`;

const LeftBigText = styled.h1`
  text-align: left;
  font-family: Spartan;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0px;
  color: #F4F4F4;
  opacity: 1;
`;

const LeftSmallText = styled.p`
  text-align: left;
  font-family: Spartan;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 0px;
  color: #89C8FF;
  opacity: 1;
  
`;

const RightBigText = styled.h1`
  text-align: left;
  font-family: Spartan;
  font-size: 1em;
  font-weight: 900;
  letter-spacing: 0px;
  color: #F4F4F4;
  opacity: 1;
`;

const RightSmallText = styled.p`
  text-align: left;
  font-family: Spartan;
  font-size: 0.9em;
  font-weight: 300;
  letter-spacing: 0px;
  color: #C1E7FF;
  opacity: 1;
`;

const RightSideColumn = styled.div`
width: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    align-items: left;
    }
`;

const LeftSideRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Zakres = ["Fotowoltaika dla domu", "Fotowoltaika dla biznesu", "Fotowoltaika dla rolnictwa", "Pompy ciepła", "Mój prąd"]
const Kalkulator = ["Fotowoltaika - cena instalacji", "Fotowoltaika - zwrot inwestycji", "Pompy ciepła - cena instalacji"]
const Serwis = ["Zrób to sam", "Plik nr 1", "Plik nr 2", "Plik nr 3", "Plik nr 4"]
const Firma = ["Historia", "Opinie", "Realizacje", "Obszar działania"]
const Walton = ["NIP", "KRS", "Adres siedziby"]

export function Footer(props){
    return(
        <FooterContainer>
            <Row>
                <BigBox>
                    <WaltonLogo src={waltonLogo}/>
                    <LeftSideRow style={{marginTop:"8em"}}>
                        <MarkerLogo src={markerLogo}/>
                    <RightSideColumn>
                      <LeftBigText>Rybnik, Polska</LeftBigText>
                      <LeftSmallText>ul. Wodzisławska 1</LeftSmallText>
                      <LeftSmallText>44-000, Rybnik</LeftSmallText>
                    </RightSideColumn>
                    </LeftSideRow>
                    <LeftSideRow style={{marginTop:"3em"}}>
                        <PhoneLogo src={phoneLogo}/>
                        <RightSideColumn>
                        <LeftBigText>Nr telefonu</LeftBigText>
                      <LeftSmallText>(32) 342 223 211</LeftSmallText>
                      </RightSideColumn>
                    </LeftSideRow>
                    <LeftSideRow style={{marginTop:"3em"}}>
                        <MailLogo src={mailLogo}/>
                        <RightSideColumn>
                        <LeftBigText>Adres e-mail</LeftBigText>
                    <LeftSmallText>biuro@walton.pl</LeftSmallText> 
                    </RightSideColumn>
                    </LeftSideRow>
                </BigBox>
                <SmallBox>
                    <RightSideColumn style={{marginTop:"-3em"}}>
                        <RightBigText>Zakres</RightBigText>
                        {Zakres.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        <RightBigText style={{marginTop:"5em"}}>Kalkulator</RightBigText>
                        {Kalkulator.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        <RightSmallText style={{marginTop:"5em"}}>2021 Walton Consulting</RightSmallText>
                    </RightSideColumn>
                    <RightSideColumn style={{marginTop:"-3em"}}>
                        <RightBigText>Serwis</RightBigText>
                        {Serwis.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                    </RightSideColumn>
                    <RightSideColumn style={{marginTop:"-3em"}}>
                        <RightBigText >O firmie</RightBigText>
                        {Firma.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        <RightSideColumn  style={{marginTop:"7.2em",marginLeft:"-8em"}}>
                        <RightBigText style={{width:"16em"}}>Walton Consulting Sp. z o.o.</RightBigText>
                        {Walton.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        </RightSideColumn>
                    </RightSideColumn>
                </SmallBox>
                <SmallBoxMobile>
                <RightSideColumn>
                        <RightBigText>Zakres</RightBigText>
                        {Zakres.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        <RightBigText>Kalkulator</RightBigText>
                        {Kalkulator.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        <RightSmallText>2021 Walton Consulting</RightSmallText>
                    </RightSideColumn>
                    <RightSideColumn>
                        <RightBigText style={{marginRight:"11.5em"}}>Serwis</RightBigText>
                        {Serwis.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                    </RightSideColumn>
                    <RightSideColumn>
                        <RightBigText >O firmie</RightBigText>
                        {Firma.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        <RightSideColumn>
                        <RightBigText>Walton Consulting Sp. z o.o.</RightBigText>
                        {Walton.map(function (link){
                            return <RightSmallText>{link}</RightSmallText>
                        })}
                        </RightSideColumn>
                    </RightSideColumn>
                </SmallBoxMobile>
            </Row>
        </FooterContainer>
    )
}
