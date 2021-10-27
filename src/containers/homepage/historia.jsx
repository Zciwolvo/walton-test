import React, {useState} from "react";
import styled from "styled-components";

import boltLogo from "../../assets/logo/orangebolt.png";
import rocket from "../../assets/logo/rocket.png"
import google from "../../assets/logo/google.png"
import map from "../../assets/logo/map.png"
import Boxes from "../../components/boxes";
import Star from "../../assets/logo/star.png"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
      width: 70%;
      height: 100%;
      padding: 0;
      max-width: 1440px;
      margin: auto;
      margin-bottom: 5em;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (max-width: 800px) {
        width: auto;
      }
    `;

    const Row = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: 800px) {
        flex-direction: column;
        justify-content: center;
      }
    `;

    const LeftSide = styled.div`
      display: flex;
      flex-direction: column;
      padding-top: 8em;
      @media (max-width: 800px) {
        padding-top: 2em;
        margin-left: 0;
        align-items: center;
        text-align: center;
    }
    
    `;

    const OrangeText = styled.h1`
      text-align: left;
      font-family: Spartan;
      font-size: 3em;
      letter-spacing: 0px;
      color: #F58500;
      text-transform: uppercase;
      opacity: 1;
      @media (max-width: 800px) {
        text-align: center;
        width: ${windowWidth*0.95}px;
    }
    `;

    const NormalText = styled.h1`
      margin-top: -0.5em;
      text-align: left;
      font-family: Spartan;
      font-size: 2.5em;
      font-weight: 600;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        text-align: center;
        width: ${windowWidth*0.95}px;
    }
    `;

    const SmallText = styled.p`
      width: 455px;
      text-align: left;
      font-family: Spartan;
      font-size: 1em;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 1.5em;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        height: 0;
        width: 0;
        font-size: 0;
        line-height: 0;
    }
    `;

    
const SmallTextMobile = styled.p`
height: 0;
width: 0;
font-size: 0;
line-height: 0;
text-align: left;
font-family: Spartan;
font-weight: 500;
letter-spacing: 0px;
color: #252601;
opacity: 1;
@media (max-width: 800px) {
  text-align: center;
  width: ${windowWidth*0.95}px;
  line-height: 1.5em;
  font-size: 1em;
  height: auto;
}
`;

    const Button = styled.button`
      margin-top: 2em;
      width: ${props => props.props.width}px;
      height: ${props => props.props.height}px;
      background: #F58500 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 10px 10px 10px 0px;
      opacity: 1;
      border: none;
    `;

    const Lokalnosc = styled.text`
      font-family: Spartan;
      font-size: 1.5em;
      font-weight: 600;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      margin-right: 1em;
      &:hover{
        color: #2E6EA6;
      }
      @media (max-width: 800px) {
        margin-bottom: 1em;
        font-size: 2.5em;
        margin-right: 0;
      }
    `;

    const Rodzinnosc = styled.text`
      font-family: Spartan;
      font-size: 1.5em;
      letter-spacing: 0px;
      font-weight: 600;
      color: #252601;
      opacity: 1;
      margin-right: 1em;
      &:hover{
        color: #93A603;
      }
      @media (max-width: 800px) {
        margin-bottom: 1em;
        font-size: 2.5em;
        margin-right: 0;
      }
    `;

    const Slaska = styled.text`
      font-family: Spartan;
      font-size: 1.5em;
      font-weight: 600;
      letter-spacing: 0px;
      color: ${props => props.props.slaskacolor};
      opacity: 1;
      @media (max-width: 800px) {
        font-size: 2.5em;
      }
    `;

    const Tradycja = styled.text`
      font-family: Spartan;
      font-size: 1.5em;
      font-weight: 600;
      letter-spacing: 0px;
      color: ${props => props.props.tradycjacolor};
      opacity: 1;
      @media (max-width: 800px) {
        font-size: 2.5em;
      }
    `;

    const TextRow = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding-top: 5em;
      @media (max-width: 800px) {
        padding-top: 3em;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    `;

    const RightSide = styled.div`
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

    const Row2 = styled.div`
    @media (max-width: 800px) {
      display: flex;
      flex-direction: row;
      margin-top: 1em;
      margin-bottom: 2em;
    }
    `;

    const StarLogo = styled.img`
      width: 24px;
      height: 22px;
    `;

const Historia = () => {

    const [width, SetWidth] = useState(288*1)
    const [height, SetHeight] = useState(48*1)

    const setButtonStyle = (width, height) => {
        SetWidth(width)
        SetHeight(height)
    }

    const [slaskacolor, setSlaskaColor] = useState("#252601");
    const [tradycjacolor, setTradycjaColor] = useState("#252601")

    const setStyle = (slaskacolor, tradycjacolor) => {
        setSlaskaColor(slaskacolor)
        setTradycjaColor(tradycjacolor)
    }


    return(
        <Container>
            <Row>
                <LeftSide>
                    <OrangeText>STALE W BRANŻY</OrangeText>
                    <NormalText>już od 2004 roku.</NormalText>
                    <SmallText>Walton Consulting to specjaliści w swojej dziedzinie. Potrafimy doradzać, wskazywać możliwości <br/> i realizować powierzone zadania. Od 2004 roku<br/> z powodzeniem funkcjonujemy dostarczając naszym klientom rozwiązania z zakresu rekrutacji na stanowiska średniego i wyższego szczebla zarządzania oraz realizując projekty doradcze<br/> z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallText>
                    <SmallTextMobile>Walton Consulting to specjaliści w swojej dziedzinie. Potrafimy doradzać, wskazywać możliwości i realizować powierzone zadania. Od 2004 roku z powodzeniem funkcjonujemy dostarczając naszym klientom rozwiązania z zakresu rekrutacji na stanowiska średniego i wyższego szczebla zarządzania oraz realizując projekty doradcze z obszaru Human Resources. Pomagamy naszym klientom w finansowaniu inwestycji.</SmallTextMobile>
                    <Button 
                    props={{width:width, height:height}}
                    onMouseDown={() => setButtonStyle(0.98*288, 0.98*48)}
                    onMouseUp={() => setButtonStyle(1*288, 1*48)}
                    ><ButtonText>Poznaj historię firmy</ButtonText></Button>
                    <TextRow>
                        <Lokalnosc>Lokalność</Lokalnosc>
                        <Rodzinnosc>Rodzinność</Rodzinnosc>
                        <Row2>
                          <Slaska props={{slaskacolor:slaskacolor}} onMouseOut={() => setStyle("#252601", "#252601")} onMouseEnter={() => setStyle("#F2B807", "#0477BF")}>Śląska</Slaska>
                          <Tradycja props={{tradycjacolor:tradycjacolor}} onMouseOut={() => setStyle("#252601", "#252601")} onMouseEnter={() => setStyle("#F2B807;", "#0477BF;")} style={{marginLeft:"0.1em"}}>Tradycja</Tradycja>
                        </Row2>
                    </TextRow>
                </LeftSide>
                <RightSide>
                    <Boxes/>
                </RightSide>
            </Row>
        </Container>
    )
};

export default Historia;