import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ContactFrame from "../../components/contactframeorange";
import Popup from "../../components/popup";

import BackgroundPhoto from "../../assets/photos/father.jpeg"

const { innerWidth: windowWidth } = window;

const MainContainer = styled.div`
  width: 70%;
  height: 762px;
  max-width: 1440px;
  display: flex;
  margin: auto;
  margin-bottom: 5em;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    text-align: center;
    height: 100%;
}
`;

const Background = styled.div`
    position: absolute;
    z-index: -1;
    max-width: 1980px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-direction: row;
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
        margin: 1em auto 1em auto;
}
`;

const Column = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 5em;
`;

const Content = styled.div`
    max-width: 1440px;
    display: flex;
    width: 100%;
    height: auto;
    margin: auto;
    flex-direction: row;
    @media (max-width: 800px) {
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
    align-items: center;
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
const MainSection = (params) => {
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
                        <BigText>DARMOWA ENERGIA</BigText>
                        <NormalText>Na wyci??gni??cie r??ki.</NormalText>
                        <SmallTextMobile>Walton Consulting to specjali??ci w swojej dziedzinie. Potrafimy doradza??, wskazywa?? mo??liwo??ci<br/>i realizowa?? powierzone zadania. Od 2004 roku<br/>z powodzeniem funkcjonujemy dostarczaj??c naszym klientom rozwi??zania z zakresu rekrutacji<br/>na stanowiska ??redniego i wy??szego szczebla zarz??dzania oraz realizuj??c projekty doradcze<br/>z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallTextMobile>
                        <SmallText>Walton Consulting to specjali??ci w swojej dziedzinie. Potrafimy doradza??, wskazywa?? mo??liwo??ci i realizowa?? powierzone zadania. Od 2004 roku z powodzeniem funkcjonujemy dostarczaj??c naszym klientom rozwi??zania z zakresu rekrutacji na stanowiska ??redniego i wy??szego szczebla zarz??dzania oraz realizuj??c projekty doradcze z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallText>
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

export default MainSection;