import React from "react";
import styled from "styled-components";
import { Link , BrowserRouter as Router } from "react-router-dom";

import photo from "../../assets/photos/Photogenica-PHX9534407@2x.png"
import circle from "../../assets/logo/circle.png"
import file from "../../assets/logo/file.png"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const MainContainer = styled.div`
  width: 70%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  margin: auto;
  margin-bottom: 5em;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    text-align: center;
    margin-bottom: -5em;
}
`;

const Sides = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    text-align: center;
}
`;


const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-left: 1.3em;
    width: ${windowWidth*0.95}px;
}
`;
const InsideRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
`;

const Column = styled.div`
    margin-left: 5em;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
        margin: auto;
        height: auto;
}
`;

const BigText =styled.h1`
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font: normal normal medium 40px/47px Rubik;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin: auto;
        margin-bottom: 0.2em;
}
`;

const BigTextUnderline = styled.div`
    width: 649px;
    height: 9px;
    background: #E6B00C 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
}
`;

const SmallBlackText = styled.p`
    text-align: center;
    font: normal normal bold 18px/20px Spartan;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
`;

const GreyText =styled.p`
margin-top: 1.5em;
    text-align: left;
    font: normal normal normal 14px/17px Rubik;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
`;

const SmallGreyText = styled.p`
    text-align: left;
    width: 22em;
    font: normal normal normal 14px/21px Rubik;
    letter-spacing: 0px;
    color: #6A6A6A;
    opacity: 1;
    @media (max-width: 800px) {
        width: ${windowWidth*0.90}px;
        
}
`;

const NormalText = styled.p`
    text-align: left;
    margin: 0;
    font: normal normal bold 25px/20px Spartan;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
`;

const BlueText = styled.p`
    text-align: left;
    font: normal normal medium 14px/27px Rubik;
    font-weight: 700;
    letter-spacing: 0px;
    color: #0477BF;
    text-transform: uppercase;
    opacity: 1;
`;

const IconContainer = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 0.5em;
`;

const ContentBoxContainer = styled.div`
    width: 649px;
    height: 241px;
    background: #FCFCFC 0% 0% no-repeat padding-box;
    box-shadow: -4px 8px 6px #00000029;
    border-radius: 10px;
    opacity: 1;
    margin-bottom: 2em;
    @media (max-width: 800px) {
        flex-direction: column;
        height: auto;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
}
`;

const Photo = styled.img`
    display: flex;
    margin-left: 0;
    width: 192px;
    height: 241px;
    flex-direction: column;
    border-radius: 10px;
    opacity: 1;
    @media (max-width: 800px) {
        width: 0;
        height: 0;
}
`;

const FileImage = styled.img`
    width: 72px;
    height: 90px;
`;

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;
    margin-bottom: 3em;
    visibility: visible;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: 0px;
        height: 0;
        visibility: hidden;
        text-align: center;
        margin: auto;
}
`;
const HeaderContainerMobile = styled.div`
    width: 0;
    height: 0;
    margin-bottom: 0em;
    visibility: hidden;
    @media (max-width: 800px) {
        visibility: visible;
        height: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin: auto;
        margin-bottom: 3em;
}
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

const ColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 800px) {
        width: ${windowWidth*0.9}px;
        margin: auto;
        margin-top: 2em;
        height: auto;
        align-content: center;
        align-items: center;
        justify-content: center;
    
    }
`;
const RowCenter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 1em;
    justify-content: space-evenly;
    @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    margin: auto;
}
`;

export function Documents(params) {
    return(
        <MainContainer>
         <HeaderContainer>
            <BigText>Serwis - poradnik i dokumenty</BigText>
            <BigTextUnderline/>
          </HeaderContainer>
          <HeaderContainerMobile>
            <BigText style={{alignItems:"center", alignContent:"center", justifyContent:"center"}}>Serwis - poradnik<br/>i dokumenty</BigText>
            <BigTextUnderline/>
          </HeaderContainerMobile>
          <Sides>
              <Column>
                <SmallBlackText>Problem nr1</SmallBlackText>
                <SmallBlackText>Problem nr1</SmallBlackText>
                <SmallBlackText>Problem nr1</SmallBlackText>
                <SmallBlackText>Problem nr1</SmallBlackText>
                <SmallBlackText>Problem nr1</SmallBlackText>
                <SmallBlackText>Problem nr1</SmallBlackText>
              </Column>
              <Column>
                <ContentBoxContainer>
                    <Row>
                        <Column>
                            <GreyText>Kategoria</GreyText>
                            <NormalText>Problem nr 1</NormalText>
                            <SmallGreyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero.</SmallGreyText>
                            <InsideRow>
                                <IconContainer src={circle}/>
                                <BlueText>ROZWIŃ</BlueText>
                            </InsideRow>
                        </Column>
                        <Photo src={photo}/>
                    </Row>
                </ContentBoxContainer>
                <ContentBoxContainer>
                    <Row>
                        <Column>
                            <GreyText>Kategoria</GreyText>
                            <NormalText>Problem nr 1</NormalText>
                            <SmallGreyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero.</SmallGreyText>
                            <InsideRow>
                            <IconContainer src={circle}/>
                                <BlueText>ROZWIŃ</BlueText>
                            </InsideRow>
                        </Column>
                        <Photo src={photo}/>
                    </Row>
                </ContentBoxContainer>
                <ContentBoxContainer>
                    <Row>
                        <Column>
                            <GreyText>Kategoria</GreyText>
                            <NormalText>Problem nr 1</NormalText>
                            <SmallGreyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero.</SmallGreyText>
                            <InsideRow>
                            <IconContainer src={circle}/>
                                <BlueText>ROZWIŃ</BlueText>
                            </InsideRow>
                        </Column>
                        <Photo src={photo}/>
                    </Row>
                </ContentBoxContainer>
                <ContentBoxContainer>
                    <Row>
                        <Column>
                            <GreyText>Kategoria</GreyText>
                            <NormalText>Problem nr 1</NormalText>
                            <SmallGreyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero.</SmallGreyText>
                            <InsideRow>
                            <IconContainer src={circle}/>
                                <BlueText>ROZWIŃ</BlueText>
                            </InsideRow>
                        </Column>
                        <Photo src={photo}/>
                    </Row>
                </ContentBoxContainer>
                <ContentBoxContainer>
                    <Row>
                        <Column>
                            <GreyText>Kategoria</GreyText>
                            <NormalText>Problem nr 1</NormalText>
                            <SmallGreyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero.</SmallGreyText>
                            <InsideRow>
                            <IconContainer src={circle}/>
                                <BlueText>ROZWIŃ</BlueText>
                            </InsideRow>
                        </Column>
                        <Photo src={photo}/>
                    </Row>
                </ContentBoxContainer>
              </Column>
          </Sides>
          <Center style={{width:"100%"}}>
            <BigText>Pliki do pobrania</BigText>
            <RowCenter>
                <Router>
                <Link to="../../assets/logo/file.png" target="_blank" download style={{alignItems:"center"}}>
                        <ColumnCenter>
                                <FileImage src={file}/>
                                <SmallBlackText>Nazwa pliku</SmallBlackText>
                        </ColumnCenter>
                     </Link>
                    <Link to="../../assets/logo/file.png" target="_blank" download style={{alignItems:"center"}}>
                        <ColumnCenter>
                                <FileImage src={file}/>
                                <SmallBlackText>Nazwa pliku</SmallBlackText>
                        </ColumnCenter>
                     </Link>
                    <Link to="../../assets/logo/file.png" target="_blank" download style={{alignItems:"center"}}>
                        <ColumnCenter>
                                <FileImage src={file}/>
                                <SmallBlackText>Nazwa pliku</SmallBlackText>
                        </ColumnCenter>
                     </Link>
                    <Link to="../../assets/logo/file.png" target="_blank" download style={{alignItems:"center"}}>
                        <ColumnCenter>
                                <FileImage src={file}/>
                                <SmallBlackText>Nazwa pliku</SmallBlackText>
                        </ColumnCenter>
                     </Link>
                </Router>
            </RowCenter>
          </Center>
        </MainContainer>
    )
}