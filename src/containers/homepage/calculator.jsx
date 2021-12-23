import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router } from "react-router-dom"
import Plus from "../../components/plus";
import ContactFrame from "../../components/contactframe";

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const CalcContainer = styled.div`
width: 70%;
height: 100%;
max-width: 1440px;
display: flex;
flex-direction: column;
margin: auto;
margin-bottom: 5em;
@media (max-width: 800px) {
    margin-top: 0;
  width: ${windowWidth}px;
  align-items: center;
  padding: 5em 10% 0% 10%;
}
`;

const BlueText = styled.h1`
font-family: Spartan;
font-size: 3rem;
font-weight: 900;
letter-spacing: 0px;
color: #91CDF2;
opacity: 1;
text-align: center;
@media (max-width: 800px) {
  width: ${windowWidth*0.95}px;
}
`;

const NormalText = styled.p`
width: auto;
font-family: Spartan;
font-size: 1.7rem;
font-weight: 700;
letter-spacing: 0px;
text-align: left;
color: #252601;
opacity: 1;
@media (max-width: 800px) {
  width: 0;
  height: 0;
  font-size: 0;
}
`;

const NormalTextMobile = styled.p`
width: 0;
height: 0;
visibility: hidden;
font-family: Spartan;
font-size: 0;
font-weight: 700;
letter-spacing: 0px;
text-align: left;
color: #252601;
opacity: 1;
@media (max-width: 800px) {
  width: ${windowWidth*0.95}px;
  height: auto;
  visibility: visible;
  font-size: 1.7rem;
  text-align: center;
  align-items: center;
}
`;

const SmallText = styled.p`
width: 23em;
text-align: left;
font-family: Rubik;
font-size: 1em;
font-weight: 300;
letter-spacing: 0px;
color: #252601;
opacity: 1;
line-height: 1.5em;
margin-top: -1em;
@media (max-width: 800px) {
  width: ${windowWidth*0.95}px;
  text-align: center;
}
`;

const LeftSide = styled.div`
display: flex;
flex-direction: column;
margin-top: 2em;

@media (max-width: 800px) {
    align-items: center;
    width: ${windowHeight};
    margin-left: 0;
}
`;

const LeftContainer = styled.div`
display: flex;
flex-direction: column;
height: 170px;
margin-bottom: 4em;
width: auto;
text-align: left;
`;

const Middle = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Sides = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 800px) {
    flex-direction: column;
    width: ${windowWidth};
    align-items: center;
    }
`;

const Row = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 800px) {
  flex-direction: column;
  width: ${windowWidth};
}
`;

const PlusContainer = styled.div`
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactContainer = styled.div`
width: auto;
display: flex;
justify-content: flex-end;
margin-top: -3em;
`;


const Calculator = () => {


    return (
        <CalcContainer>
            <BlueText>Kalkulator oszczędności</BlueText>
            <Middle>
                <Sides>
                    <LeftSide>
                        <LeftContainer>
                            <NormalText>Fotowoltaika - cena instalacji</NormalText>
                            <NormalTextMobile>Fotowoltaika<br/>cena instalacji</NormalTextMobile>
                            <Row>
                                <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum</SmallText>
                                <Column>
                                <PlusContainer>
                                    <Router>
                                        <Link to="/"><Plus/></Link>
                                    </Router>
                                </PlusContainer>
                                </Column>
                            </Row>
                        </LeftContainer>
                        <LeftContainer>
                            <NormalText>Fotowoltaika - Zwrot inwestycji</NormalText>
                            <NormalTextMobile>Fotowoltaika<br/>Zwrot inwestycji</NormalTextMobile>
                            <Row>
                                <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum</SmallText>
                                <Column>
                                <PlusContainer>
                                    <Router>
                                        <Link to="/"><Plus/></Link>
                                    </Router>
                                </PlusContainer>
                                </Column>
                            </Row>
                        </LeftContainer>
                        <LeftContainer>
                            <NormalText>Pompy ciepła - cena instalacji</NormalText>
                            <NormalTextMobile>Pompy ciepła<br/>cena instalacji</NormalTextMobile>
                            <Row>
                                <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum</SmallText>
                                <Column>
                                <PlusContainer>
                                    <Router>
                                        <Link to="/"><Plus/></Link>
                                    </Router>
                                </PlusContainer>
                                </Column>
                            </Row>
                        </LeftContainer>
                    </LeftSide>
                    <ContactContainer>
                        <ContactFrame />
                    </ContactContainer>
                </Sides>
            </Middle>
        </CalcContainer>
    )
}

export default Calculator