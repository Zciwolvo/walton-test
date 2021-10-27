import React from "react";
import styled from "styled-components";

import boltLogo from "../../assets/logo/bolt.png";
import photo1 from "../../assets/photos/Mask Group 1@2x.png"
import photo2 from "../../assets/photos/Mask Group 2@2x.png"
import photo3 from "../../assets/photos/Mask Group 3@2x.png"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
      width: 70%;
      height: 100%;
      max-width: 1440px;
      padding: 0;
      margin: auto;
      margin-bottom: 5em;
      display: flex;
      flex-direction: column;
    `;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

    const Row = styled.div`
      display: flex; 
      flex-direction: row;
      @media (max-width: 800px) {
        flex-direction: column;
      }
    `;

    const LeftContainer = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
      }
    `;

    const BoltLogo = styled.img`
      width: 37px;
      height: 46px;
      opacity: 1;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
      }
    `;

    const OrangeText = styled.h1`
      text-align: left;
      font-family: Rubik;
      height: auto;
      font-size: 3em;
      font-weight: 600;
      margin-bottom: 0;
      letter-spacing: 0px;
      color: #F58500;
      text-transform: uppercase;
      opacity: 1;
      @media (max-width: 800px) {
        display: flex;
        text-align: center;
        flex-direction: column;
        width: ${windowWidth*0.95}px;
        align-items: center;
      }
    `;

    const NormalText = styled.h1`
      text-align: left;
      align-items: flex-start;
      height: auto;
      width: auto;
      display: flex;
      font-family: Rubik;
      font-size: 3em;
      font-weight: 300;
      margin: 0;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        display: flex;
        height: 2em;
        text-align: center;
        flex-direction: column;
        width: ${windowWidth*0.95}px;
        align-items: center;
      }
    `;

    const SmallText = styled.p`
      text-align: left;
      font-family: Rubik;
      font-size: 0.9em;
      font-weight: 200;
      line-height: 1.5em;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      width: 311px;
      margin-top: 5em;
      height: auto;
      @media (max-width: 800px) {
        margin-top: 2em;
        margin-bottom: 5em;
        display: flex;
        height: 6em;
        text-align: center;
        flex-direction: column;
        width: ${windowWidth*0.95}px;
        align-items: center;
      }
    `;

    const PhotoEndContainer = styled.div`
      display: flex;
      justify-content: flex-end;
      @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
      }
    `;

    const PhotoBox = styled.div`
      width: 361px;
      height: 396px;
      display: flex;
      flex-direction: column;
      background: #FCFCFC 0% 0% no-repeat padding-box;
      box-shadow: -4px 8px 6px #00000029;
      border-radius: 10px;
      opacity: 1;
      @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
        margin-bottom: 1.5em;
      }
    `;

const PhotoBox2 = styled.div`
width: 361px;
height: 396px;
display: flex;
flex-direction: column;
background: #FCFCFC 0% 0% no-repeat padding-box;
box-shadow: -4px 8px 6px #00000029;
border-radius: 10px;
opacity: 1;
margin-right: 1.5em;
@media (max-width: 800px) {
        margin-right: 0;
        margin-bottom: 1.5em;
        width: ${windowWidth*0.95}px;
      }
`;

    const Photo = styled.img`
      width: 100%;
      height: 194px;
      opacity: 1;
    `;

    const PhotoBoxTextBig = styled.h1`
      text-align: left;
      font-family: Spartan;
      font-size: 1.1em;
      margin-top: 2em;
      font-weight: 700;
      margin-bottom: 0;
      letter-spacing: 0px;
      color: #252601;
      text-transform: uppercase;
      opacity: 1;
    `;

    const PhotoBoxTextNormal = styled.h1`
    width: 70%;
      text-align: left;
      font-family: Rubik;
      font-size: 0.9em;
      line-height: 1.5em;
      font-weight: 300;
      letter-spacing: 0px;
      color: #6A6A6A;
      opacity: 1;
    `;

    const PhotoBoxTextBlue = styled.h1`
      text-align: left;
      font-family: Spartan;
      font-size: 0.8em;
      font-weight: 700;
      letter-spacing: 0px;
      color: #0477BF;
      text-transform: uppercase;
      opacity: 1;
    `;

    const PhotoContainer = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: -3em;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `;

    const PhotoRow = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
      }
    `;

    const Absolute = styled.div`
        position: absolute;
    `;

    const Column = styled.div`
      display: flex;
      flex-direction: column;
      margin-left: 1em;
    `;

const Fotowoltaika = () => {

    return(
        <Container>
          <Middle>
            <Row>
                <LeftContainer>
                    <BoltLogo src={boltLogo}/>
                    <OrangeText>FOTOWOLTAIKA</OrangeText>
                    <NormalText><Absolute>Nowoczesna energia</Absolute></NormalText>
                    <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum</SmallText>
                </LeftContainer>
                <PhotoContainer>
                    <PhotoEndContainer>
                        <PhotoBox style={{marginBottom:"1.5em"}}>
                            <Photo src={photo1}/>
                            <Column>
                              <PhotoBoxTextBig>FOTOWOLTAIKA DLA DOMU</PhotoBoxTextBig>
                              <PhotoBoxTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum</PhotoBoxTextNormal>
                              <PhotoBoxTextBlue>ZOBACZ SZCZEGÓŁY</PhotoBoxTextBlue>
                            </Column>
                        </PhotoBox>
                    </PhotoEndContainer>
                        <PhotoRow>
                            <PhotoBox2>
                                <Photo src={photo2}/>
                                <Column>
                                  <PhotoBoxTextBig>FOTOWOLTAIKA DLA ROLNICTWA</PhotoBoxTextBig>
                                  <PhotoBoxTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum</PhotoBoxTextNormal>
                                  <PhotoBoxTextBlue>ZOBACZ SZCZEGÓŁY</PhotoBoxTextBlue>
                                </Column>
                            </PhotoBox2>
                            <PhotoBox>
                                <Photo src={photo3}/>
                                <Column>
                                  <PhotoBoxTextBig>FOTOWOLTAIKA DLA BIZNESU</PhotoBoxTextBig>
                                  <PhotoBoxTextNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum</PhotoBoxTextNormal>
                                  <PhotoBoxTextBlue>ZOBACZ SZCZEGÓŁY</PhotoBoxTextBlue>
                                </Column>
                            </PhotoBox>
                        </PhotoRow>
                </PhotoContainer>
            </Row>
          </Middle>
        </Container>
    )
}

export default Fotowoltaika;