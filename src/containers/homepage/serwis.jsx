import React, {useState} from "react";
import styled from "styled-components";
import { Link , BrowserRouter as Router } from "react-router-dom";

import background from "../../assets/photos/ricardo-gomez-angel-MagdWoazARo-unsplash.jpeg";
import photo1 from "../../assets/photos/20190519_121953@2x.png"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
      width: 70%;
      height: 100%;
      max-width: 1440px;
      margin: auto;
      display: flex;
      margin-bottom: 5em;
      flex-direction: column;
      align-items: center;
    `;

    const Background = styled.div`
      width: ${windowWidth*0.75}px;
      height: 718px;
      background-image: url(${background}) ;
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      align-items: center;
      justify-content: center;
      @media (max-width: 800px) {
        width: ${windowWidth}px;
    }
    `;

    const BackgroundFilter = styled.div`
      width: 100%;
      height: 100%;
      max-width: 1440px;
      background-color: rgba(55, 55, 55, 0.5);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.3s linear;
      &:hover{
        background-color: rgba(55, 55, 55, 0);
      }
    `;

    const BigText = styled.h1`
      text-align: center;
      font-family: Rubik;
      font-size: 3em;
      font-weight: 600;
      letter-spacing: 0px;
      color: #F4F4F4;
      text-transform: uppercase;
      opacity: 1;
      @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
      }
    `;

    const SmallText = styled.p`
      width: 587px;
      height: 54px;
      text-align: center;
      justify-content: center;
      align-content: center;
      line-height: 1.5em;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0px;
      color: #F4F4F4;
      opacity: 1;
      @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
        height: auto;
        letter-spacing: 1px;
    }
    `;

    const Button = styled.button`
      text-align: center;
      margin-top: 4em;
      width: ${props => props.props.width}px;
      height: ${props => props.props.height}px;
      background: #0477BF 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 10px 10px 10px 0px;
      opacity: 1;
      border: none;
    `;

    const ButtonText = styled.p`
      text-align: center;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 700;
      letter-spacing: 0px;
      color: #F4F4F4;
      opacity: 1;
    `;

const Serwis = () => {


    const [width, SetWidth] = useState(288*1)
    const [height, SetHeight] = useState(48*1)

    const setButtonStyle = (width, height) => {
        SetWidth(width)
        SetHeight(height)
    }

    return(
        <Container>
            <Background>
                <BackgroundFilter>
                    <BigText>SERWIS I PLIKI DO POBRANIA</BigText>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero. Curabitur rutrum lacinia tincidunt.</SmallText>
                    <Router>
                      <Link to="/Serwis">
                        <Button 
                        onClick={() => {window.location.href="/Serwis"}}
                        props = {{width:width, height:height}}
                        onMouseDown={() => setButtonStyle(0.98*288, 0.98*48)}
                        onMouseUp={() => setButtonStyle(1*288, 1*48)}
                        ><ButtonText>Zrób to sam</ButtonText></Button>
                    </Link>
                   </Router>
                </BackgroundFilter>
            </Background>
        </Container>
    )
}

export default Serwis