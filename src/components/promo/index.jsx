import React, {useState} from "react";
import styled from "styled-components";
import Popup from "../popup";

import boltLogo from "../../assets/logo/bolt.png";

const { innerWidth: windowWidth } = window;

const Container = styled.div`
      width: 70%;
      height: 100%;
      max-width: 1440px;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5em;
    `;

    const Sides = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    const Row = styled.div`
    width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      @media (max-width: 800px) {
        flex-direction: column;
        width: ${windowWidth*0.95}px;
    }
    `;

    const LeftSide = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 10em;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin: 10em auto auto auto;
      }
    `;

    const RightSide = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 10%;
      align-items: center;
      @media (max-width: 800px) {
        height: 0;
        width: 0;
        visibility: hidden;
      }
    `;

    const OrangeText = styled.h1`
      height: auto;
      margin-bottom: 0;
      text-align: left;
      font-family: Rubik;
      font-size: 3em;
      font-weight: 600;
      letter-spacing: 0px;
      color: #F58500;
      text-transform: uppercase;
      opacity: 1;
      @media (max-width: 800px) {
        text-align: center;
        align-content: center;
        height: auto;
        margin: auto;
        width: ${windowWidth*0.95}px;
     }
    `;

    const NormalText = styled.h1`
      text-align: left;
      font-family: Rubik;
      height: 0.5em;
      font-size: 3em;
      margin-top: 0;
      font-weight: 500;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        text-align: center;
        width: ${windowWidth*0.95}px;
        margin-top: 0;
        margin-bottom: 0;
        height: auto;
     }
    `;

    const SmallText = styled.p`
      width: 30em;
      text-align: left;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0px;
      line-height: 1.5em;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        text-align: center;
        width: ${windowWidth*0.9}px;
        height: auto;
        letter-spacing: 1px;
     }
    `;

    const Button = styled.button`
      width: ${props => props.props.width}px;
      height: ${props => props.props.height}px;
      background: #93A603 0% 0% no-repeat padding-box;
      border-radius: 10px 10px 10px 0px;
      opacity: 1;
      margin-top: 5em;
      border: none;
      @media (max-width: 800px) {
        margin-top: 1em;
      }
    `;

    const ButtonText = styled.p`
      font-family: Rubik;
      font-size: 1.5em;
      margin: 4% 5% 5% 5%;
      font-weight: 700;
      letter-spacing: 0px;
      color: #F4F4F4;
      opacity: 1;
    `;

    const PhotoFrame = styled.div`
      width: 35vw;
      height: 35vw;
      max-width: 42em;
      max-height: 42em;
      border: 1px solid #2A2A04;
      border-radius: 100px 10px 10px 10px;
      opacity: 1;
      margin-top: -5em;
      @media (max-width: 800px) {
        width: ${windowWidth*0.6}px;
        height: ${windowWidth*0.6}px;
        margin-top: 0;
     }
    `;

    const OrangeShape = styled.div`
      width: 103px;
      height: 96px;
      transform: matrix(0, 1, -1, 0, 0, 0);
      background: #F58500 0% 0% no-repeat padding-box;
      box-shadow: -4px 8px 6px #00000029;
      border-radius: 10px 10px 10px 100px;
      opacity: 0.26;
      position: absolute;
      margin-left: 0.5em;
      margin-top: 0.7em;
    `;

    const Photo = styled.img`
      width: 35vw;
      height: 35vw;
      max-width: 42em;
      max-height: 42em;
      border-radius: 100px 0px 0px 10px;
      opacity: 0.67;
      margin-top: 2em;
      margin-left: 2em;
      background-color: blueviolet;
      @media (max-width: 800px) {
        width: ${windowWidth*0.6}px;
        height: ${windowWidth*0.6}px;
     }
    `;

const Promo = () => {

    const [width, SetWidth] = useState(288*1)
    const [height, SetHeight] = useState(48*1)
    const [state, SetState] = useState(false)

    const setButtonStyle = (width, height) => {
        SetWidth(width)
        SetHeight(height)
    }

    return(
        <Container>
            <Sides>
                <Row>
                    <LeftSide>
                        <OrangeText>ZACZNIJ OSZCZĘDZAĆ</OrangeText>
                        <NormalText>Z nami już dziś.</NormalText>
                        <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero. Curabitur rutrum lacinia tincidunt.</SmallText>
                        <Button 
                        props={{width:width, height:height}}
                        onMouseDown={() => setButtonStyle(0.98*288, 0.98*48)}       
                        onMouseUp={() => setButtonStyle(1*288, 1*48)}
                        onClick={() => SetState(true)}
                        ><ButtonText>Porozmawiajmy</ButtonText></Button>
                    </LeftSide>
                    <RightSide>
                        <PhotoFrame>
                            <OrangeShape></OrangeShape>
                            <Photo src={boltLogo}></Photo>
                        </PhotoFrame>
                    </RightSide>
                </Row>
            </Sides>
            <Popup trigger={state} setTrigger={SetState}>
            </Popup>
        </Container>
    )
}

export default Promo