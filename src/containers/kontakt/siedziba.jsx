import React from "react";
import styled from "styled-components";

import thumbLogo from "../../assets/logo/prostota.png"
import shieldLogo from "../../assets/logo/gwarancja.png"
import phoneLogo from "../../assets/logo/gwarancja2.png"
import tickLogo from "../../assets/logo/dofinansowanie.png"
import solarPhoto from "../../assets/photos/Mask Group 2@2x.png"

const { innerWidth: windowWidth } = window;

const Container = styled.div`
    width: 70%;
    height: 100%;
    max-width: 1440px;
    margin: auto;
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin-bottom: 3em;
}
`;

const ThumbLogo = styled.img`
    width: 60px;
    height: 81px;
`;

const ShieldLogo = styled.img`
    width: 71px;
    height: 86px;
    @media (max-width: 800px) {
        height: 81px;
}
`;

const PhoneLogo = styled.img`
    width: 63px;
    height: 68px;
`;

const TickLogo = styled.img`
    width: 71px;
    height: 71px;
    @media (max-width: 800px) {
        height: 68px;
}
`;

const Sides = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
}
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin-bottom: 3em;
}
`;

const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
}
`;

const BigText = styled.h1`
    text-align: left;
    font: normal normal medium 40px/47px Rubik;
    letter-spacing: 0px;
    color: #252601;
    opacity: 1;
`;

const BigTextUnderline = styled.div`
    width: 384px;
    height: 5px;
    background: #E6B00C 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    margin: -1em 0 2em 0;
`;

const SmallBoldText = styled.p`
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

const SmallBlueText = styled.p`
    text-align: left;
    font: normal normal medium 14px/27px Rubik;
    font-weight: 700;
    letter-spacing: 0px;
    color: #0477BF;
    text-transform: uppercase;
    opacity: 1;
`;

const GreenText = styled.p`
    text-align: center;
    font: normal normal bold 18px/20px Spartan;
    letter-spacing: 0px;
    color: #8DA528;
    text-transform: uppercase;
    opacity: 1;
`;

const RightSideText = styled.p`
    text-align: center;
    font: normal normal normal 14px/27px Rubik;
    letter-spacing: 0px;
    color: #6A6A6A;
    opacity: 1;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const RightRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 30em;
    justify-content: space-between;
    @media (max-width: 800px) {
        width: ${windowWidth*0.95}px;
}
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    height: 30em;
    justify-content: space-between;
    @media (max-width: 800px) {
        height: ${windowWidth*0.95}px;
}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Photo = styled.img`
    width: 457px;
    height: 324px;
    box-shadow: 5px 5px 17px #00000029;
    border-radius: 10px;
    opacity: 1;
    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
}
`;

const RightSideLogoContainer = styled.div`
    width: 12em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Siedziba = (params) => {
    return(
        <Container>
            <Sides>
                <LeftSide>
                    <BigText>Siedziba firmy</BigText>
                    <BigTextUnderline/>
                    <Photo src={solarPhoto}/>
                    <SmallBoldText style={{marginTop:"2em"}}>Rybnik, Polska</SmallBoldText>
                    <Row style={{marginTop:"-1em"}}>
                        <Column>
                            <SmallText>ul. Wodzisławska 1</SmallText>
                            <SmallText>tel: 111 222 333</SmallText>
                        </Column>
                        <Column style={{marginLeft:"2em"}}>
                            <SmallText>44-270 Rybnik</SmallText>
                            <SmallText>e-mail: aa@a.com</SmallText>
                        </Column>
                    </Row>
                    <SmallBlueText>ZOBACZ NA MAPIE</SmallBlueText>
                </LeftSide>
                <RightSide>
                    <RightRow>
                        <RightColumn >
                            <RightSideLogoContainer>
                                <ThumbLogo src={thumbLogo}/>
                                <GreenText>Prostota</GreenText>
                                <RightSideText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</RightSideText>                                
                            </RightSideLogoContainer>
                            <RightSideLogoContainer>
                                <PhoneLogo src={phoneLogo}/>
                                <GreenText>Gwarancja</GreenText>
                                <RightSideText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</RightSideText>                                
                            </RightSideLogoContainer>
                        </RightColumn>
                        <RightColumn>
                            <RightSideLogoContainer>
                                <ShieldLogo src={shieldLogo}/>
                                <GreenText>Gwarancja</GreenText>
                                <RightSideText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</RightSideText>                                
                            </RightSideLogoContainer>
                            <RightSideLogoContainer>
                                <TickLogo src={tickLogo}/>
                                <GreenText>Dofinansowanie</GreenText>
                                <RightSideText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</RightSideText>                                
                            </RightSideLogoContainer>
                        </RightColumn>
                    </RightRow>
                </RightSide>
            </Sides>
        </Container>
    )
}

export default Siedziba;