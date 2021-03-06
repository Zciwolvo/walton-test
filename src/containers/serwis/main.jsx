import React from "react";
import styled from "styled-components";


import BackgroundPhoto from "../../assets/photos/serwis.jpeg"
import BigLogos from "../../components/big_logos_bar";

const { innerWidth: windowWidth } = window;

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
    height: 100%;
    display: flex;
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
    font-size: 4em;
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
    font-size: 3em;
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
    text-align: center;
    font-family: Rubik;
    text-shadow: 1px 1px 2px black;
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
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;



const MainSection = () => {
    return(
        <MainContainer>
            <Background/>
                    <Column>
                        <BigText>ENCYKLOPEDIA WIEDZY I PORAD</BigText>
                        <NormalText>Tekst dodatkowy</NormalText>
                        <SmallTextMobile>Walton Consulting to specjali??ci w swojej dziedzinie. Potrafimy doradza??, wskazywa?? mo??liwo??ci<br/>i realizowa?? powierzone zadania. Od 2004 roku<br/>z powodzeniem funkcjonujemy dostarczaj??c naszym klientom rozwi??zania z zakresu rekrutacji<br/>na stanowiska ??redniego i wy??szego szczebla zarz??dzania oraz realizuj??c projekty doradcze<br/>z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallTextMobile>
                        <SmallText>Walton Consulting to specjali??ci w swojej dziedzinie. Potrafimy doradza??, wskazywa?? mo??liwo??ci i realizowa?? powierzone zadania. Od 2004 roku z powodzeniem funkcjonujemy dostarczaj??c naszym klientom rozwi??zania z zakresu rekrutacji na stanowiska ??redniego i wy??szego szczebla zarz??dzania oraz realizuj??c projekty doradcze z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallText>
                    </Column>
            <BigLogos/>
        </MainContainer>
    )
}

export default MainSection