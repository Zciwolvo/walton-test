import React from "react";
import styled from "styled-components";

import boltLogo from "../../assets/logo/bolt.png";
import photo1 from "../../assets/photos/20190519_121953@2x.png"
import photo2 from "../../assets/photos/pexels-los-muertos-crew-8853507@2x.png"
import photo3 from "../../assets/photos/Photogenica-PHX9534407@2x.png"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
      width: 70%;
      max-width: 1440px;
      height: 100%;
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 5em;
      @media (max-width: 800px) {
        padding: 0;
        margin: 0;
        width: 100%;
      }
    `;

    const Middle = styled.div`
      width: 100%;
      max-width: 1440px;
      display: flex;
      flex-direction: column;
      @media (max-width: 800px) {
        align-items: center;
       
      }
    `;

    const BlueText = styled.h1`
      text-align: center;
      font-family: Spartan;
      font-size: 3em;
      font-weight: 900;
      letter-spacing: 0px;
      color: #91CDF2;
      opacity: 1;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth}px;
        text-align: center;
      }
    `;

    const BoldSmallText = styled.p`
    width: 100%;
      display: flex;
      flex-direction: column;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: 0px;
      color: #252601;
      text-align: right;
      text-transform: uppercase;
      opacity: 1;
      @media (max-width: 800px) {
        flex-direction: column;
        width: ${windowWidth*0.9}px;
      }
    `;

    const Photo = styled.img`
      width: 379px;
      height: 414px;
      border-radius: 10px;
      box-shadow: -4px 8px 6px #00000029;
      opacity: 1;
      margin-left: -1em;
      @media (max-width: 800px) {
        align-content: center;
        justify-content: center;
        margin: auto;
        width: ${windowWidth*0.95}px;
      }
    `;

    const SmallText = styled.p`
      text-align: left;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 300;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        margin: 1em auto auto auto;
        align-items: center;
        width: ${windowWidth*0.9}px;
      }
    `;

    const BoldText = styled.p`
      text-align: left;
      font-family: Rubik;
      font-size: 1.2em;
      font-weight: 600;
      letter-spacing: 0px;
      color: #252601;
      margin-top: 0;
      opacity: 1;
      @media (max-width: 800px) {
        margin: 1em auto 3em auto;
        width: ${windowWidth*0.9}px;
      }
    `;

    const PhotoRow = styled.div`
    width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 2em;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: ${windowWidth*0.95}px;
        margin-left: 0;
        text-align: center;
      }
    `;

    const PhotoContentContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: 400px;
      @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
        align-content: center;
        justify-content: center;
      }
    `;

const Aktualnosci = () => {

    return(
        <Container>
            <Middle>
                <BlueText>Aktualności branżowe</BlueText>
                <BoldSmallText>WSZYSTKIE ARTYKUŁY</BoldSmallText>
                <PhotoRow>
                    <PhotoContentContainer>
                        <Photo src={photo1}></Photo>
                        <SmallText>Kategoria 1</SmallText>
                        <BoldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus</BoldText>
                    </PhotoContentContainer>
                    <PhotoContentContainer>
                        <Photo src={photo2}></Photo>
                        <SmallText>Kategoria 1</SmallText>
                        <BoldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus</BoldText>
                    </PhotoContentContainer>
                    <PhotoContentContainer>
                        <Photo src={photo3}></Photo>
                        <SmallText>Kategoria 1</SmallText>
                        <BoldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus</BoldText>
                    </PhotoContentContainer>
                </PhotoRow>
            </Middle>
        </Container>
    )
}

export default Aktualnosci