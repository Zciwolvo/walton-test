import React, {useState} from "react";
import { Link , BrowserRouter as HashRouter } from "react-router-dom";
import styled from "styled-components";

import arrowLeft from "../../assets/logo/arrow-to-right-1.png"
import arrowRight from "../../assets/logo/arrow-to-right.png"
import House1 from "../../assets/photos/HouseSmall.png"
import House2 from "../../assets/photos/HouseBig.png"

const { innerWidth: windowWidth } = window;

const Container = styled.div`
      height: 100%;
      width: 70%;
      padding: 0;
      margin: auto;
      margin-bottom: 5em;
      max-width: 1440px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    const Sides = styled.div`
    margin-top: 2em;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: 800px) {
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
      }
    `;  

    const BlueText = styled.h1`
      text-align: center;
      font-family: Spartan;
      font-size: 3em;
      font-weight: 900;
      letter-spacing: 0px;
      color: #91CDF2;
      opacity: 1;
      @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: ${windowWidth};
        align-items: center;
        text-align: center;
        width: ${windowWidth*0.95}px;
      }
    `;

    const BigNormalText = styled.h1`
      width: auto;
      height: auto;
      text-align: left;
      font-family: Spartan;
      font-size: 2.2em;
      font-weight: 900;
      letter-spacing: 0px;
      margin-top: 2em;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: ${windowWidth};
        align-items: center;
        text-align: center;
        width: ${windowWidth*0.95}px;
        height: auto;
      }
    `;

    const NarrowText = styled.text`
      text-align: left;
      font-family: Spartan;
      font-size: 1em;
      margin-top: 2em;
      font-weight: 300;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        width: ${windowWidth}px;
        align-items: center;
        text-align: center;
        width: ${windowWidth*0.95}px;
      }
    `;

    const BoldText = styled.text`
      text-align: left;
      font-family: Spartan;
      font-size: 1em;
      font-weight: 900;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      
    `;

    const TextRow = styled.div`
      margin-top: 2em;
      display: flex;
      flex-direction: row;
      width: 20em;
      justify-content: space-between;
      align-content: center;
    `;

    const SmallText = styled.p`
      margin-top: 4em;
      width: 30em;
      text-align: left;
      font-family: Spartan;
      font-size: 1em;
      font-weight: 500;
      line-height: 1.5em;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
      }
    `;

    const Button = styled.button`
      width: ${props => props.props.width}px;
      height: ${props => props.props.height}px;
      background: #0477BF 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 10px 10px 10px 0px;
      opacity: 1;
      margin-top: 2em;
      border: none;
    `;

    const ButtonText = styled.p` 
      text-align: center;
      font: normal normal medium 18px/20px Rubik;
      font-weight: 700;
      letter-spacing: 0px;
      color: #F4F4F4;
      opacity: 1;
    `;

    const LeftSide = styled.div`
      display: flex;
      flex-direction: column;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth}px;
        align-items: center;
        text-align: center;
        margin-left: 0;
      }
    `;

    const RightSide = styled.div`
      display: flex;
      flex-direction: column;
    `;

    const ArrowRight = styled.img`
      width: 47px;
      height: 37px;
    `;

    const ArrowLeft = styled.img`
      width: 47px;
      height: 37px;
    `;

    const Row = styled.div`
      display: flex;
      flex-direction: row;
    `;

    const HouseImage1 = styled.img`
      width: 364px;
      height: 364px;
      margin-left: -17em;
      @media (max-width: 800px) {
        height: 0;
        width: 0;
        visibility: hidden;
      }
    `;

const HouseImage2 = styled.img`
width: 494px;
height: 494px;
margin-top: -10em;
margin-right: -7em;
@media (max-width: 800px) {
        height: 0;
        width: 0;
        visibility: hidden;
      }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Realizacje = () => {

    const [width, SetWidth] = useState(288*1)
    const [height, SetHeight] = useState(48*1)

    const setButtonStyle = (width, height) => {
        SetWidth(width)
        SetHeight(height)
    }
    
    const ScrollTop = () => {
    window.scrollTo(0,0)  
    }

    return(
        <Container>
            <BlueText>Nasze wybrane realizacje</BlueText>
            <Sides>
                <LeftSide>
                    <Row>
                        <ArrowLeft src={arrowLeft}/>
                        <ArrowRight style={{marginLeft:"2em"}} src={arrowRight}/>
                    </Row>
                    <BigNormalText>Instalacja domowa<br/> na balkonie</BigNormalText>
                    <NarrowText>Obszar działania</NarrowText>
                    <TextRow>
                        <BoldText>22.0210 zł</BoldText>
                        <BoldText>5.6kW</BoldText>
                        <BoldText>Wrocław</BoldText>
                    </TextRow>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero. Curabitur rutrum lacinia tincidunt.</SmallText>
                    <HashRouter basename="/">
                     
                      <Button 
                      props = {{width:width, height:height}}
                      onMouseDown={() => setButtonStyle(0.98*288, 0.98*48)}
                      onMouseUp={() => setButtonStyle(1*288, 1*48)}
                      onClick={ScrollTop}
                      > 
                      <Link to="/Realizacje" style={{width:"0px", height:"0px"}}/>
                      <ButtonText>Zobacz wszystkie realizacje</ButtonText></Button>
                     
                    </HashRouter>
                </LeftSide>
                <RightSide>
                  <Column>
                    <HouseImage1 src={House1}/>
                    <HouseImage2 src={House2}/>
                  </Column>
                </RightSide>
            </Sides>
        </Container>
    )
}

export default Realizacje