import React, { useState, useContext } from "react";
import styled from "styled-components";
import SelectBox from "../contactframe/select-box";
import ReCAPTCHA from 'react-google-recaptcha'

import Photo from "../../assets/photos/pexels-energepiccom-288477.jpg"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const PopupBody = styled.div`
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(55, 55, 55, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
`;

const PopupInside = styled.div`
    position: absolute;
    border-radius: 10px 10px 10px 10px;
    padding: 2em;
    height: auto;
    width: 100%;
    max-width: 1440px;
    background-color: #FFF;
    @media (max-width: 800px) {
    height: 95vh;
    width: 95%;
}
`;

const CloseButton = styled.div`
    position: absolute;
    top: 1em;
    right: 1em;
`;

const BlueText = styled.p`
    text-align: left;
    font: normal normal medium 14px/20px Rubik;
    letter-spacing: 0px;
    color: #0477BF;
    opacity: 1;
    font-weight: 700;
    margin-bottom: 0;
    padding-top: 1em;
    
`;

const BlackSmallText = styled.p`
    text-align: left;
    font: normal normal bold 18px/20px Spartan;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
`;

const Bars = styled.input`
margin-top: 1em;
width: 440px;
height: 48px;
background: #fcfcfc 0% 0% no-repeat padding-box;
box-shadow: -4px 8px 6px #0000001f;
border-radius: 10px;
border: none;
opacity: 1;
display: flex;
flex-direction: column;
font-family: Rubik;
font-size: 1em;
font-weight: 300;
color: black;
padding-left: 1.3em;
@media (max-width: 800px) {
  visibility: visible;
  width: ${windowWidth*0.7}px;
  
}
`;

const ContactButton = styled.button`
    width: ${props => props.props.width}px;
    height: ${props => props.props.height}px;
    margin: 5% 0 0 0;
    background: ${props => props.props.background};
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 10px 10px 10px 0px;
    opacity: 1;
    // z-index: 1;
    border: none;
    @media (max-width: 800px) {
    visibility: visible;
    align-items: center;
    justify-content: center;
    align-content: center;
    }
`;

const ButtonText = styled.p`
    text-align: center;
    font-family: Spartan;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 0px;
    color: #f4f4f4;
    opacity: 1;
    @media (max-width: 800px) {
    visibility: visible;
    }
`;
const CaptchaBody = styled.div`
    width: 315px;
    height: 85px;
    box-shadow: grey;
    margin-top: 2em;
`;

const Sides = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    @media (max-width: 800px) {
    flex-direction: column;
}
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: 5em;
`;

const PhotoFrame = styled.img`
    width: 750px;
    height: 648px;
    border: 1px solid #DC841F;
    border-radius: 10px 10px 10px 100px;
    opacity: 1;
    visibility: visible;
    @media (max-width: 800px) {
    visibility: hidden;
}   
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 800px) {
    flex-direction: column;
}
`;

const Block = styled.div`
  width: 440px;
  height: 120px;
  top: 10px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  z-index: 11;
  @media (max-width: 800px) {
      display: none;
    }
`;

function Popup(props) {

    const [human, setHuman] = useState(false);


    const verifyCaptcha = (res) => {
        if(res) {
            setHuman(true)
        }
      }
    

    const [name, setName] = useState();
    const [city, setCity] = useState();
    const [number, setNumber] = useState();
  
    const [background, setBackground] = useState("#93A603");
    const [text, setText] = useState("Wyślij wiadomość. Oddzwonimy");
    const [width, SetWidth] = useState(288 * 1);
    const [height, SetHeight] = useState(48 * 1);
    
  
  
    const setButtonStyle = (width, height) => {
      SetWidth(width);
      SetHeight(height);
    };
  
    const setStyle = (background, text) => {
      setBackground(background);
      setText(text);
    };

    const checkState = (name, city, number) => {
      if (name != null && city != null && number != null && human == true) {
        setStyle("#F58500", "DZIĘKUJEMY ZA WIADOMOŚĆ", setButtonStyle(1 * 288, 1 * 48))
      }
    }

    return (props.trigger) ? (
        <PopupBody>
            <PopupBackground onClick={() => props.setTrigger(false)}/>
            <PopupInside>
                <Block/>
                <Sides>
                    <LeftSide>
                        <CloseButton onClick={() => props.setTrigger(false)}>X</CloseButton>
                        <BlueText style={{zIndex:"12"}}>Temat</BlueText>
                        <SelectBox
                        placeholder={[{value:"Wybierz temat", id: 0}]}
                        items={[
                        { value: "Temat1", id: 1 },
                        { value: "Temat2", id: 2 },
                        { value: "Temat3", id: 3 },
                        ]}
                        />
                        <BlueText>Imię i Nazwisko</BlueText>
                        <Bars type="text" placeholder="Imię i Nazwisko" value={name} onChange={event => setName(event.target.value)}></Bars>
                        <BlueText>Miejscowość</BlueText>
                        <Bars type="text" placeholder="Miejscowość" value={city} onChange={event => setCity(event.target.value)}></Bars>
                        <BlueText>Nr telefonu</BlueText>
                        <Bars type="text" placeholder="Nr telefonu" value={number} onChange={event => setNumber(event.target.value)}></Bars>
                        <CaptchaBody> <ReCAPTCHA 
                                            sitekey={'6LdLMdwcAAAAAN69Bl8cJCnkkt37tweui9OgI3Wq'}
                                            render="explicit"
                                            onChange={verifyCaptcha}
                                          /></CaptchaBody>
                        <ContactButton
                            props={{width:width, height:height, background:background}}
                            onMouseDown={() => setButtonStyle(0.98 * 288, 0.98 * 48)}
                            onMouseUp={() => setButtonStyle(1 * 288, 1 * 48)}
                            onClick={() => checkState(name,city,number)}
                        >
                            <ButtonText>{text}</ButtonText>
                        </ContactButton>
                    </LeftSide>
                    <RightSide>
                        <PhotoFrame src={Photo}>
                        </PhotoFrame>
                        <Row>
                            <BlackSmallText>Polityka prywatności</BlackSmallText>
                            <BlackSmallText>Cookies</BlackSmallText>
                            <BlackSmallText>RODO</BlackSmallText>
                        </Row>
                    </RightSide>
                </Sides>
            </PopupInside>
        </PopupBody>
    ) : "";
}

export default Popup