import React, { useState } from "react";
import styled from "styled-components";
import SelectBox from "./select-box.jsx";

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const FrameContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 4em;
    z-index: 20;
    @media (max-width: 800px) {
        padding-left: 0;
        margin: 0;
        align-items: center;
    }
  `;

  const Frame = styled.div`
    width: 577px;
    height: 546px;
    border: 1px solid #2a2a04;
    border-radius: 10px 10px 10px 100px;
    opacity: 1;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
        height: ${windowWidth*1.5}px;
        border-radius: 10px 10px 10px 10px;
        align-content: center;
        
    }
  `;

  const BigText = styled.h1`
    font-family: Spartan;
    font-size: 1.8em;
    font-weight: 600;
    letter-spacing: 0px;
    z-index: 12;
    color: #252601;
    opacity: 1;
    visibility: visible;
    text-align: center;
    padding: 1em 1em 0em 1em;
    @media (max-width: 800px) {
        width: ${windowWidth}px;
        align-items: center;
        visibility: hidden;
        padding: auto auto auto auto;
        height: 0;
    }

  `;
    const BigTextMobile = styled.h1`
    font-family: Spartan;
    font-size: 0;
    font-weight: 600;
    z-index: 12;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
    visibility: hidden;
    text-align: center;
    height: 0;
    width: 0;
    padding: 0;
    @media (max-width: 800px) {
      font-size: 1.8em;
        padding: 1em 1em 0em 1em;
        height: auto;
        width: ${windowWidth*0.95}px;
        margin: auto;
        visibility: visible;
    }

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
      margin: 1em auto auto auto;
    }
  `;

  const CustomPlaceholder = styled.p`
      height: 0;
      margin: 0;
      padding-left: 1.3em;
      font-family: Rubik;
      user-select: none;
      position: absolute;
      align-items: flex-start;
      font-size: 1em;
      transition: all 0.5s;
      font-weight: 300;
      color: grey;
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
    }
  `;

  const ButtonText = styled.p`
    text-align: center;
    font-family: Spartan;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0px;
    color: #f4f4f4;
    opacity: 1;
    @media (max-width: 800px) {
      visibility: visible;
    }
  `;

const OrangeShape = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 1em;
  border-radius: 10px 10px 10px 120px;
  background-color: orange;
  opacity: 0.3;
  @media (max-width: 800px) {
      visibility: hidden;
    }
`;



const ShapeContainer = styled.div`
  width: 100%;
  height: auto;
  display: inline-block;
  flex-direction: row;
`;

const BarContent = styled.div`
  align-items: flex-start;
`;

const ContactFrame = () => {
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

  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [number, setNumber] = useState();
  const [movement, setMovement] = useState("1.9em");
  const [placeholdervalue, setPlaceholderValue] = useState("Imię i nazwisko:");
  const [placeholdervisibility, setPlaceholderVisibility] = useState("hidden");
  const [movement2, setMovement2] = useState("1.9em");
  const [placeholdervalue2, setPlaceholderValue2] = useState("Miejscowość:");
  const [placeholdervisibility2, setPlaceholderVisibility2] = useState("hidden");
  const [movement3, setMovement3] = useState("1.9em");
  const [placeholdervalue3, setPlaceholderValue3] = useState("Nr telefonu:");
  const [placeholdervisibility3, setPlaceholderVisibility3] = useState("hidden");
  
  const PlaceholderStyle = (movement,placeholdervalue,placeholdervisibility) => {
    setMovement(movement)
    setPlaceholderVisibility(placeholdervisibility)
    setPlaceholderValue(placeholdervalue)
    
  }
  const PlaceholderStyle2 = (movement2,placeholdervalue2,placeholdervisibility2) => {
    setMovement2(movement2)
    setPlaceholderValue2(placeholdervalue2)
    setPlaceholderVisibility2(placeholdervisibility2)
  }
  const PlaceholderStyle3 = (movement3,placeholdervalue3,placeholdervisibility3) => {
    setMovement3(movement3)
    setPlaceholderValue3(placeholdervalue3)
    setPlaceholderVisibility3(placeholdervisibility3)
  }

  const checkState = (name, city, number) => {
    if (name != null && city != null && number != null) {
      setStyle("#F58500", "DZIĘKUJEMY ZA WIADOMOŚĆ", setButtonStyle(1 * 288, 1 * 48))
    }
  }

  const checkContentName = (name) => {
    if (name == null) {
      setMovement("1.9em")
      setPlaceholderVisibility("hidden")
      setTimeout(setPlaceholderValue("Imię i Nazwisko", 5000))
    }
  }

  return (
    <FrameContainer>
      <Frame>
          <BigText>Skontaktuj się z Nami</BigText>
          <BigTextMobile>Skontaktuj się<br/>z Nami</BigTextMobile>
          <SelectBox />
          <BarContent>
            <CustomPlaceholder style={{marginTop:movement, visibility:placeholdervisibility}}>Imię i Nazwisko:</CustomPlaceholder>
            <Bars type="text" placeholder={placeholdervalue} 
            theme={movement}
            onFocus={() => PlaceholderStyle("0.9em", "", "visible")}
            //onBlur={() => checkContentName(name)}
            value={name} onChange={event => setName(event.target.value)}></Bars>
          </BarContent>
          <BarContent>
           <CustomPlaceholder style={{marginTop:movement2, visibility:placeholdervisibility2}}>Miejscowość:</CustomPlaceholder>
            <Bars type="text" placeholder={placeholdervalue2} 
            theme={movement}
            onFocus={() => PlaceholderStyle2("0.9em", "", "visible")}
            value={city} onChange={event => setCity(event.target.value)}></Bars>
          </BarContent>
          <BarContent>
            <CustomPlaceholder style={{marginTop:movement3, visibility:placeholdervisibility3}}>Nr telefonu:</CustomPlaceholder>
            <Bars type="text" placeholder={placeholdervalue3} 
            theme={movement}
            onFocus={() => PlaceholderStyle3("0.9em", "", "visible")}
            value={number} onChange={event => setNumber(event.target.value)}></Bars>
          </BarContent>
          <ContactButton
            props={{width:width, height:height, background:background}}
            onMouseDown={() => setButtonStyle(0.98 * 288, 0.98 * 48)}
            onMouseUp={() => setButtonStyle(1 * 288, 1 * 48)}
            onClick={() => checkState(name,city,number)}
          >
            <ButtonText>{text}</ButtonText>
          </ContactButton>
          <ShapeContainer>
            <OrangeShape/>
          </ShapeContainer>
        </Frame>
    </FrameContainer>
  );
};

export default ContactFrame;
