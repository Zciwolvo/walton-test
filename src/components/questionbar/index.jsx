import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus } from '../plus';

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  @media (max-width: 800px) {
        width: ${windowWidth * 0.95}px;
      }
`;

const QuestionBox = styled.div`
  width: 34em;
  height: 5em;
  z-index: 20;
  margin-bottom: 1em;
  background: #FCFCFC 0% 0% no-repeat padding-box;
  box-shadow: -4px 8px 6px #00000029;
  border-radius: 10px;
  display: flex;
  padding: 1.3em;
  flex-direction: column;
  transition: all 0.3s linear;
  height: ${({ open }) => open ? '5em' : '15em'};
  @media (max-width: 800px) {
        width: ${windowWidth * 0.95}px;
        height: ${({ open }) => open ? '5em' : '18em'};
      }
  h1 {
    text-align: left;
    font-family: Spartan;
    font-size: 1.1em;
    color: ${({ open }) => open ? 'black' : 'blue'};
    font-weight: 700;
    letter-spacing: 0px;
    opacity: 1;
  }
  p {
    display: flex;
    text-align: left;
    font-family: Rubik;
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 0px;
    color: #252601;
    transition: all 0.3s linear;
    visibility: ${({ open }) => open ? "hidden" : "visible"};
    opacity: ${({ open }) => open ? "0" : "1"};
    z-index: 0;
  }
  div {
    div {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        margin-left: 11em;
        border: 1px solid ${({ open }) => open ? 'green' : 'blue'};
        opacity: 1;
        transition: all 0.3s linear;
        transform: ${({ open }) => open ? 'rotate(0)' : 'rotate(17.5deg)'};
        @media (max-width: 800px) {
          margin-left: 0.5em;
      }
        div {
          background: ${({ open }) => open ? 'green' : 'blue'};
          opacity: 1;
          width: 2px;
          height: 15px;
          margin-left: 12px;
          margin-top: 5px;
          div {
            background: ${({ open }) => open ? 'green' : 'blue'};
            opacity: 1;
            width: 15px;
            height: 2px;
            margin-left: -0.45em;
            margin-top: 0.35em;
            
          }
        }
      
    }
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const AnswerBox = (props) => {
  const [open, Setopen] = useState(true)

  return (
    <Container>
      <QuestionBox
        open={open}
        onClick={() => Setopen(!open)} >
        {props.children}
        </QuestionBox>

    </Container>
  )
}

export default AnswerBox