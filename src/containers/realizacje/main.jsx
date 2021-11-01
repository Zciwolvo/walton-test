import react, { useState } from "react";
import styled from "styled-components";
import Popup from "../../components/popup";

import ContactFrame from "../../components/contactframeorange";

import BackgroundPhoto from "../../assets/photos/dom_realizacje.jpeg"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const MainContainer = styled.div`
  width: 70%;
  height:882px;
  max-width: 1440px;
  display: flex;
  margin: auto;
  margin-bottom: 5em;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    text-align: center;
}
`;

const Background = styled.div`
    width: 100%;
    max-width: 1980px;
    height: 100%;
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: -1;
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
    text-align: left;
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
        margin: 2em auto auto auto;
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
        margin: auto;
}
`;

const SmallText = styled.p`
    width: 30em;
    text-align: left;
    text-shadow: 1px 1px 2px black;
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
    text-align: left;
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
        margin: 2em auto 2em auto;
}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 5em;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
}
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    flex-direction: row;
    @media (max-width: 800px) {
        height: auto;
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
}
`;

const Button = styled.button`
width: 0;
height: 0;
font-size: 0;
border: none;
visibility: hidden;
display: flex;
@media (max-width: 800px) {
    visibility: visible;
    font-size: 1em;
    width: ${props => props.props.width}px;
    height: ${props => props.props.height}px;
    background: #93A603 0% 0% no-repeat padding-box;
    border-radius: 10px 10px 10px 0px;
    opacity: 1;
    margin-top: em;
    border: none;
    align-content: center;
    justify-content: center;
}
`;

const ButtonText = styled.p`
width: 0;
height: 0;
font-size: 0;
@media (max-width: 800px) {
    width: auto;
    height: auto;
    visibility: visible;
    font-family: Rubik;
    font-size: 1.5em;
    margin: 4% 5% 5% 5%;
    font-weight: 300;
    letter-spacing: 0px;
    color: #F4F4F4;
    opacity: 1;
}
`;


export function MainSection(params) {
    const [width, SetWidth] = useState(288*1)
    const [height, SetHeight] = useState(48*1)
    const [state, SetState] = useState(false)

    const setButtonStyle = (width, height) => {
        SetWidth(width)
        SetHeight(height)
    }
    return(
        <MainContainer>
            <Background/>
                <Content>
                    <Column>
                        <BigText>SETKI INSTALACJI</BigText>
                        <NormalText>Na terenie całej Polski</NormalText>
                        <SmallTextMobile>Walton Consulting to specjaliści w swojej dziedzinie. Potrafimy doradzać, wskazywać możliwości<br/>i realizować powierzone zadania. Od 2004 roku<br/>z powodzeniem funkcjonujemy dostarczając naszym klientom rozwiązania z zakresu rekrutacji<br/>na stanowiska średniego i wyższego szczebla zarządzania oraz realizując projekty doradcze<br/>z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallTextMobile>
                        <SmallText>Walton Consulting to specjaliści w swojej dziedzinie. Potrafimy doradzać, wskazywać możliwości i realizować powierzone zadania. Od 2004 roku z powodzeniem funkcjonujemy dostarczając naszym klientom rozwiązania z zakresu rekrutacji na stanowiska średniego i wyższego szczebla zarządzania oraz realizując projekty doradcze z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallText>
                        <Button 
                        props={{width:width, height:height}}
                        onMouseDown={() => setButtonStyle(0.98*288, 0.98*48)}       
                        onMouseUp={() => setButtonStyle(1*288, 1*48)}
                        onClick={() => SetState(true)}
                        ><ButtonText>Porozmawiajmy</ButtonText></Button>
                    </Column>
                    <ContactFrame/>
                </Content>
            <Popup trigger={state} setTrigger={SetState}>
            </Popup>
        </MainContainer>
    )
}