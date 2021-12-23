import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    transition: all 0.5s;
    top: 50%;
    right: 50%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    z-index: 10000;
`;

const Body = styled.div`
    transition: all 0.5s;
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 35em;
    height: auto;
    border-radius: 30px;
    border: 1px solid #F58500;
    background-color: #fff;
    align-content: center;
    align-items: center;
    opacity: ${({ trigger }) => trigger ? "0" : "1"};
`;

const ErrorText = styled.h1`
    font-size: 1em;
    font-family: Rubik;
    font-weight: 700;
`;




const ErrorPopup = (props) => {
    
    const [seconds, setSeconds] = useState(10)
  

    useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds-1), 1000)
        }
        else {
            props.setTrigger(false)
            setSeconds(10)
        }
    })

    const message = []
    const changeMessage = (name, city, number, human, item) => {
        if (name == null) {
          message.push("Musisz podać swoje imię i nazwisko")
        }
        if (city == null) {
            message.push("Musisz podać miasto")
          }
          if (number == null) {
            message.push("Musisz podać numer telefonu")
          }
          if (human == false) {
            message.push("Musisz ukończyć weryfikacje Captcha")
          }
          if (item == "Wybierz temat") {
            message.push("Musisz wybrać temat")
          }
          else {
              props.setTrigger(false)
          }
      }


    return (props.trigger) ? (
        <Container props={changeMessage(props.name,props.city,props.number,props.human,props.item)}>
            <Body>         
                {message.map(function (element){return <ErrorText>{element}</ErrorText>})}
            </Body>
        </Container>
    ) : "";
}


export default ErrorPopup