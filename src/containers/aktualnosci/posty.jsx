import react from "react";
import styled from "styled-components";

import photo1 from "../../assets/photos/20190519_121953@2x.png"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const Container = styled.div`
  width: 75%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  margin: auto;
  margin-bottom: 5em;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  @media (max-width: 800px) {
        margin-bottom: -10em;
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
}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        margin-right: 0;
}
`;

const PhotoContainer = styled.img`
    width: 384px;
    height: 324px;
    @media (max-width: 800px) {
        width: ${windowWidth*0.9}px;
        height: ${windowWidth*0.8}px;
}
`;

const BlueText = styled.h1`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Spartan;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0px;
    color: #91CDF2;
    opacity: 1;
    @media (max-width: 800px) {
        visibility: hidden;
        width: 0;
        height: 0;
}
`;

const BlueTextMobile = styled.h1`
    width: 0;
    height: 0;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Spartan;
    font-size: 0;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0px;
    visibility: hidden;
    color: #91CDF2;
    opacity: 1;
    @media (max-width: 800px) {
        font-size: 1.5em;
        visibility: visible;
        width: 128%;
        height: auto;
}
`;

const BlueTextRight = styled.p`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: Spartan;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0px;
    color: #91CDF2;
    opacity: 1;
`;

const NormalText = styled.p`
    text-align: left;
    font-family: Spartan;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
    padding-bottom: 5em;
    @media (max-width: 800px) {
        
}
`;

const NormalTextRight = styled.p`
    text-align: left;
    font-family: Spartan;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;

`;

const SmallText = styled.p`
text-align: left;
font-family: Rubik;
font-size: 1em;
font-weight: 300;
letter-spacing: 0px;
color: #6A6A6A;
opacity: 1;
`;

const RightSide = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    visibility: visible;
    @media (max-width: 800px) {
        margin-right: 0;
        visibility: hidden;
        height: 0;
        width: 0;
}
`;

const RightSideMobile = styled.div`
    width: 0;
    height: 0;
    font-size: 0;
    display: flex;
    flex-direction: column;
    visibility: hidden;
    margin-right: 5em;
    @media (max-width: 800px) {
        font-size: 1em;
        margin-right: 0;
        visibility: visible;
        height: auto;
        width: auto;
}
`;

const SidesMobile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
}
`;


export function Posty(props) {
    return(
        <Container>
            <BlueText>Wszystkie posty</BlueText>
            <SidesMobile>
            <RightSideMobile style={{marginBottom:"5em"}}>
                    <BlueTextRight>Popularne posty</BlueTextRight>
                    <NormalTextRight>Fotowoltaika dla Biznesu</NormalTextRight>
                    <SmallText style={{width:"14em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam</SmallText>
                    <NormalTextRight>Fotowoltaika dla Biznesu</NormalTextRight>
                    <SmallText style={{width:"14em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam</SmallText>
                    <NormalTextRight>Fotowoltaika dla Biznesu</NormalTextRight>
                    <SmallText style={{width:"14em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam</SmallText>
                </RightSideMobile>
                <BlueTextMobile>Wszystkie posty</BlueTextMobile>
            </SidesMobile>
            <Sides>
                <Column>
                    <PhotoContainer src={photo1}/>
                    <SmallText>5.05.2021 - 6 minut czytania</SmallText>
                    <NormalText>Fotowoltaika dla Biznesu</NormalText>
                    <PhotoContainer src={photo1}/>
                    <SmallText>5.05.2021 - 6 minut czytania</SmallText>
                    <NormalText>Fotowoltaika dla Biznesu</NormalText>
                    <PhotoContainer src={photo1}/>
                    <SmallText>5.05.2021 - 6 minut czytania</SmallText>
                    <NormalText>Fotowoltaika dla Biznesu</NormalText>
                </Column>
                <Column>
                    <PhotoContainer src={photo1}/>
                    <SmallText>5.05.2021 - 6 minut czytania</SmallText>
                    <NormalText>Fotowoltaika dla Biznesu</NormalText>
                    <PhotoContainer src={photo1}/>
                    <SmallText>5.05.2021 - 6 minut czytania</SmallText>
                    <NormalText>Fotowoltaika dla Biznesu</NormalText>
                    <PhotoContainer src={photo1}/>
                    <SmallText>5.05.2021 - 6 minut czytania</SmallText>
                    <NormalText>Fotowoltaika dla Biznesu</NormalText>
                </Column>
                <RightSide>
                    <BlueText>Popularne posty</BlueText>
                    <NormalTextRight>Fotowoltaika dla Biznesu</NormalTextRight>
                    <SmallText style={{width:"14em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam</SmallText>
                    <NormalTextRight>Fotowoltaika dla Biznesu</NormalTextRight>
                    <SmallText style={{width:"14em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam</SmallText>
                    <NormalTextRight>Fotowoltaika dla Biznesu</NormalTextRight>
                    <SmallText style={{width:"14em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam</SmallText>
                </RightSide>
            </Sides>
        </Container>
    )
}