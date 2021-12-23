import React from "react";
import styled from "styled-components";

import boltLogo from "../../assets/logo/orangebolt.png";
import rocket from "../../assets/logo/rocket.png"
import google from "../../assets/logo/google.png"
import map from "../../assets/logo/map.png"
import starLogo from "../../assets/logo/star.png"

const { innerWidth: windowWidth } = window;

    const BoldText = styled.text`
      text-align: left;
      font-family: Spartan;
      font-size: 1em;
      font-weight: 900;
      letter-spacing: 0px;
      color: #252601;
      padding-top: 1.5em;
      opacity: 1;
    `;

    const BlueText = styled.h1`
      text-align: left;
      font-family: Spartan;
      font-size: 1.5em;
      font-weight: 900;
      letter-spacing: 0px;
      margin-top: 1.5em;
      color: #2E6EA6;
      opacity: 1;
    `;

    const ContentBox1 = styled.div`
      width: 359px;
      height: 153px; 
      background: #FCFCFC 0% 0% no-repeat padding-box;
      box-shadow: -4px 8px 6px #00000029;
      border-radius: 10px;
      opacity: 1;
      margin-right: 2em;
      @media (max-width: 800px) {
        width: ${windowWidth*0.9}px;
        margin: 1.5em 0 0 0;
        align-items: center;
        justify-content: center;
     }
    `;

    const ContentBox2 = styled.div`
    width: 359px;
    height: 153px; 
    background: #FCFCFC 0% 0% no-repeat padding-box;
    box-shadow: -4px 8px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
    margin-top: 3em;
    margin-right: -20em;
    @media (max-width: 800px) {
      width: ${windowWidth*0.9}px;
        margin: 1.5em 0 0 0em;
        align-items: center;
     }
    `;

    const ContentBox3 = styled.div`
    width: 359px;
    height: 153px; 
    background: #FCFCFC 0% 0% no-repeat padding-box;
    box-shadow: -4px 8px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
    margin-top: 2em;
    margin-right: 3em;
    @media (max-width: 800px) {
      width: ${windowWidth*0.9}px;
        margin: 1.5em 0 0 0;
        align-items: center;
     }
    `;

    const ContentBox4 = styled.div`
    width: 359px;
    height: 153px; 
    background: #FCFCFC 0% 0% no-repeat padding-box;
    box-shadow: -4px 8px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
    margin-top: 3em;
    margin-right: -20em;
    @media (max-width: 800px) {
      width: ${windowWidth*0.9}px;
        margin: 1.5em 0 0 0em;
        align-items: center;
     }
    `;

    const Rocket = styled.img`
      width: 38px;
      height: 38px;
      margin-top: 1em;
      margin-left: 1em;
      margin-right: 0.3em;
    `;

    const Bolt = styled.img`
      width: 30px;
      height: 38px;
      margin-top: 1em;
      margin-left: 1em;
      margin-right: 0.3em;
    `;

    const Google = styled.img`
      width: 40px;
      height: 41px;
      margin-top: 1em;
      margin-left: 1em;
      margin-right: 0.5em;
    `;

    const Map = styled.img`
      width: 34px;
      height: 30px;
      margin-top: 1em;
      margin-left: 1em;
      margin-right: 0.5em;
    `;

    const RightSide = styled.div`
     display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      margin-right: 9em;
      @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
        width: ${windowWidth}px;
        margin: auto auto auto auto;
      }
    `;

    const ButtonText = styled.p`
      text-align: center;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0px;
      color: #F4F4F4;
      opacity: 1;
    `;

    const Row = styled.div`
      display: flex;
      flex-direction: row;
    `;

    const Column = styled.div`
      display: flex;
      flex-direction: column;
      margin-left: 1em;
    `;

        const StarLogo = styled.img`
        width: 24px;
        height: 22px;
        margin-top: 2.3em;
      `;



const Boxes = () => {
    return(
    <RightSide>
        <ContentBox1>
          <Row>
              <Rocket src={rocket}/>
              <Column>
                <BoldText>Rok założenia</BoldText>
                <BlueText>2004 w Rybniku</BlueText>
              </Column>
            </Row>
            
        </ContentBox1>
        <ContentBox2>
          <Row>
            <Bolt src={boltLogo}/>
            <Column>
              <BoldText>Ilośc instalacji</BoldText>
              <BlueText>20192</BlueText>
            </Column>
            </Row>
            
        </ContentBox2>
        <ContentBox3>
          <Row>
            <Google src={google}/>
            <Column>
              <BoldText>Opinie klientów</BoldText>
              <Row>
                <StarLogo src={starLogo}/>
                <StarLogo src={starLogo}/>
                <StarLogo src={starLogo}/>
                <StarLogo src={starLogo}/>
                <StarLogo src={starLogo}/>
                <BlueText style={{marginLeft:"1em"}}>5.0</BlueText>
              </Row>
            </Column>
            </Row>
        </ContentBox3>
        <ContentBox4>
          <Row>
            <Map src={map}/>
            <Column>
              <BoldText>Obszar działania</BoldText>
              <BlueText>Cała Polska</BlueText>
            </Column>
            </Row>
            
        </ContentBox4>
    </RightSide>
    )
}


export default Boxes