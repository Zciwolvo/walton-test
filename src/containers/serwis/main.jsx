import react from "react";
import styled from "styled-components";

import ContactFrame from "../../components/contactframeorange";

import BackgroundPhoto from "../../assets/photos/serwis.jpeg"
import { BigLogos } from "../../components/big_logos_bar";

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const MainContainer = styled.div`
  width: 70%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5em;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    text-align: center;
}
`;

const Background = styled.div`
    position: absolute;
    z-index: -1;
    max-width: 1980px;
    width: 100%;
    height: 762px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-image: url(${BackgroundPhoto});
    background-size: cover;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        background-position: center;
        width: ${windowWidth}px;
        text-align: center;
}
    
`;


const BigText = styled.h1`
    text-align: center;
    font-family: Rubik;
    font-size: 3em;
    font-weight: 600;
    letter-spacing: 0px;
    color: #FCFCFC;
    margin: 0;
    text-shadow: 0px 3px 6px #00000076;
    text-transform: uppercase;
    opacity: 2;
    @media (max-width: 800px) {
        font-size: 3em;
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin: auto auto 0 auto;
}
`;

const NormalText = styled.h1`
    text-align: left;
    font-family: Rubik;
    font-size: 2em;
    font-weight: 600;
    letter-spacing: 0px;
    color: #FCFCFC;
    margin: 0 0 0.5em 0;
    text-shadow: 0px 3px 6px #00000076;
    opacity: 1;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin: 0 auto 0 auto;
}
`;

const SmallText = styled.p`
    width: 30em;
    text-align: left;
    font-family: Rubik;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 0px;
    color: #FCFCFC;
    opacity: 1;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 0;
        height: 0;
        width: 0;
        font-size: 0; 
}
`;

const SmallTextMobile = styled.p`
    text-align: center;
    font-family: Rubik;
    margin: 0;
    height: 0;
    width: 0;
    font-size: 0; 
    font-weight: 300;
    letter-spacing: 0px;
    color: #FCFCFC;
    opacity: 1;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        height: auto;
        font-size: 1em;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin: 1em auto auto auto;
}
`;

const Column = styled.div`
height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;



export function MainSection(params) {
    return(
        <MainContainer>
            <Background/>
                    <Column>
                        <BigText>ENCYKLOPEDIA WIEDZY I PORAD</BigText>
                        <NormalText>Tekst dodatkowy</NormalText>
                        <SmallTextMobile>Walton Consulting to specjaliści w swojej dziedzinie. Potrafimy doradzać, wskazywać możliwości<br/>i realizować powierzone zadania. Od 2004 roku<br/>z powodzeniem funkcjonujemy dostarczając naszym klientom rozwiązania z zakresu rekrutacji<br/>na stanowiska średniego i wyższego szczebla zarządzania oraz realizując projekty doradcze<br/>z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallTextMobile>
                        <SmallText>Walton Consulting to specjaliści w swojej dziedzinie. Potrafimy doradzać, wskazywać możliwości i realizować powierzone zadania. Od 2004 roku z powodzeniem funkcjonujemy dostarczając naszym klientom rozwiązania z zakresu rekrutacji na stanowiska średniego i wyższego szczebla zarządzania oraz realizując projekty doradcze z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallText>
                    </Column>
            <BigLogos/>
        </MainContainer>
    )
}