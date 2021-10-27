import React from "react";
import styled from "styled-components";

import solary from "../../assets/photos/solar.jpg"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
  width: 70%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  margin: auto;
  flex-direction: column;
  margin-bottom: 5em;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    text-align: center;
    margin-bottom: -10em;
}
`;

const BlueText = styled.h1`
    text-align: center;
    font: normal normal bold 18px/20px Spartan;
    letter-spacing: 0px;
    color: #0477BF;
    text-transform: uppercase;
    opacity: 1;
`;

const BlackText = styled.h1`
    text-align: center;
    font: normal normal normal 18px/20px Spartan;
    letter-spacing: 0px;
    color: #252601;
    text-transform: uppercase;
    opacity: 1;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Underline = styled.div`
    width: 100%;
    height: 3px;
    background: grey 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
`;

const Photo = styled.img`
    width: 361px;
    height: 324px;
    border-radius: 10px;
    opacity: 1;
`;

const BoldText = styled.p`
    text-align: left;
    font: normal normal bold 18px/20px Spartan;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
`;

const SmallText = styled.p`
    text-align: left;
    font: normal normal normal 18px/21px Rubik;
    letter-spacing: 0px;
    color: #6A6A6A;
    opacity: 1;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2em;
`;

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;





export function Instalacje(params) {
    return(
        <Container>
            <Row style={{justifyContent:"space-evenly"}}>
                <BlueText>DOMOWE INSTALACJE</BlueText>
                <BlackText>INSTALACJE DLA FIRM I ROLNICTWA</BlackText>
            </Row>
            <Underline style={{marginBottom:"3em"}}/>
            <SectionContainer>
                <Row>
                    <Column>
                        <ImageContainer>
                            <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                    </Column>
                    <Column>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                    </Column>
                    <Column>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                        <ImageContainer>
                        <Photo src={solary}/>
                            <BoldText>Rybnik</BoldText>
                            <Row>
                                <SmallText>Koszt: 21 212 zł</SmallText>
                                <SmallText>kW: 5,95</SmallText>
                                <SmallText>Ilość paneli: 17</SmallText>
                            </Row>
                            <Row>
                                <SmallText>Model inwertera:</SmallText>
                                <SmallText>Model modułów:</SmallText>
                            </Row>
                        </ImageContainer>
                    </Column>
                </Row>
            </SectionContainer>
        </Container>
    )
}