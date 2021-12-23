import React from "react";
import styled from "styled-components";
import OpinionGrid from "../../components/opinions";

import megaphone from "../../assets/logo/megaphone.png"

const { innerWidth: windowWidth } = window;

const Container = styled.div`
      width: 70%;
      height: 100%;
      max-width: 1440px;
      margin: auto;
      padding: 0;
      margin-bottom: 5em;
      display: flex;
      flex-direction: column; 
      align-items: center;
    `;

    const LeftSide = styled.div`
      width: 100%;
      max-width: 1440px;
      display: flex;
      flex-direction: column;
      align-items: left;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth}px;
        text-align: center;
      }
    `;

    const SpeakerLogo = styled.img`
      width: 40px;
      height: 45px;
    `;

    const OrangeText = styled.h1`
      text-align: left;
      height: 0px;
      font-family: Rubik;
      font-size: 3em;
      font-weight: 600;
      letter-spacing: 0px;
      color: #F58500;
      text-transform: uppercase;
      opacity: 1;
      @media (max-width: 800px) {
        height: 1em;
        flex-direction: column;
        align-items: center;
        width: 0;
        height: 0;
        font-size: 0;
        text-align: center;
      }
    `;

const OrangeTextMobile = styled.h1`
text-align: left;
height: 0px;
width: 0;
font-family: Rubik;
font-size: 0em;
font-weight: 600;
letter-spacing: 0px;
color: #F58500;
text-transform: uppercase;
opacity: 1;
@media (max-width: 800px) {
  height: 1em;
  font-size: 3em;
  flex-direction: column;
  align-items: center;
  width: ${windowWidth*0.95}px;
  text-align: center;
}
`;

    const BlackText = styled.h1`
      text-align: left;
      font-family: Rubik;
      font-size: 3em;
      font-weight: 300;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
    `;


const Opinie = () => {

    return(
        <Container>
            <LeftSide>
                <SpeakerLogo src={megaphone}/>
                <OrangeText>CO MÓWIĄ O NAS</OrangeText>
                <OrangeTextMobile>CO MÓWIĄ<br/>O NAS</OrangeTextMobile>
                <BlackText>nasi klienci</BlackText>
            </LeftSide>
            <OpinionGrid />
        </Container>
    )
}

export default Opinie