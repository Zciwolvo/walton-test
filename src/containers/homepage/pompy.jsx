import React, {useState} from "react";
import styled from "styled-components";
import Popup from "../../components/popup";

import pompy from "../../assets/photos/pompa-ciepla.jpeg"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
      width: 100%;
      max-width: 1440px;
      height: 100%;
      display: flex;
      margin: auto;
      margin-bottom: 5em;
      flex-direction: column;
      align-items: center;
    `;

    const Background = styled.div`
      width: ${windowWidth*0.75}px;
      height: 859px;
      background-image:url(${pompy});
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 800px) {
        width: ${windowWidth}px;
    }
    `;

    const BackgroundFilter = styled.div`
      width: 100%;
      height: 100%;
      max-width: 1440px;
      background-color: rgba(55, 55, 55, 0.4);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;


    const BigText = styled.h1`
      text-align: center;
      font-family: Rubik;
      height: 0.6em;
      font-size: 3em;
      font-weight: 700;
      letter-spacing: 0px;
      color: #F4F4F4;
      text-transform: uppercase;
      opacity: 1;
    `;

    const SmallText = styled.p`
      width: 650px;
      height: 54px;
      text-align: center;
      font-family: Rubik;
      font-size: 1em;
      line-height: 1.5em;
      font-weight: 100;
      letter-spacing: 0px;
      color: #F4F4F4;
      opacity: 1;
      @media (max-width: 800px) {
        width: ${windowWidth}px;
        height: auto;
    }
    `;

    const Button = styled.button`
      width: ${props => props.props.width}px;
      height: ${props => props.props.height}px;
      background: #93A603 0% 0% no-repeat padding-box;
      border-radius: 10px 10px 10px 0px;
      opacity: 1;
      border: none; 
      &:hover{
        width: ${windowWidth*0.8};
        background: #F2B807 0% 0% no-repeat padding-box;
        box-shadow: inset 0px 6px 11px #00000029;
        border-radius: 10px 10px 10px 0px;
        opacity: 1;
      }
    `;

    const ButtonText = styled.p ` 
      text-align: center;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 700;
      letter-spacing: 0px;
      color: #F4F4F4;
      opacity: 1;
    `;

const Pompy = () => {

    const [width, SetWidth] = useState(288*1)
    const [height, SetHeight] = useState(48*1)
    const [state, SetState] = useState(false)

    const setButtonStyle = (width, height) => {
        SetWidth(width)
        SetHeight(height)
    }


    return(
        <Container>
            <Background>
                <BackgroundFilter>
                    <BigText>POMPY CIEPŁA</BigText>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero. Curabitur rutrum lacinia tincidunt.</SmallText>
                    <Button 
                    props = {{width:width, height:height}}
                    onMouseDown={() => setButtonStyle(0.98*361, 0.98*48)}
                    onMouseUp={() => setButtonStyle(1*361, 1*48)}
                    onClick={() => SetState(true)}
                    ><ButtonText>Zapytaj doradcę o ofertę</ButtonText></Button>
                </BackgroundFilter>
            </Background>
            <Popup trigger={state} setTrigger={SetState}>
            </Popup>
        </Container>
    )
}

export default Pompy