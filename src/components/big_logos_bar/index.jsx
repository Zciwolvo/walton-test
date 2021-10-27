import React from "react";
import styled from "styled-components";

import thumbLogo from "../../assets/logo/prostota.png";
import shieldLogo from "../../assets/logo/gwarancja.png";
import phoneLogo from "../../assets/logo/gwarancja2.png";
import tickLogo from "../../assets/logo/dofinansowanie.png";

const LogosContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1920px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-self: center;
`;

const ThumbLogo = styled.img`
  margin-left: 80px;
  width: 60px;
  height: 81px;
  opacity: 1;
`;

const ShieldLogo = styled.img`
  margin-left: 80px;
  width: 71px;
  height: 86px;
  opacity: 1;
`;

const PhoneLogo = styled.img`
  margin-left: 80px;
  width: 63px;
  height: 68px;
  opacity: 1;
`;

const TickLogo = styled.img`
  margin-left: 80px;
  width: 71px;
  height: 71px;
  opacity: 1;
`;

const VerticalBorder = styled.div`
  width: 0px;
  height: 108px;
  border: 1px solid #6A6A6A;
  opacity: 1;
  @media (max-width: 800px) {
    visibility: hidden;
  }
`;

const GreenText = styled.h1`
  justify-content: space-evenly;
  font-family: Spartan;
  font-size: 1em;
  font-weight: 700;
  margin-top: 1.5em;
  letter-spacing: 0px;
  color: #8DA528;
  text-transform: uppercase;
  opacity: 1;
`;

const NormalText = styled.h1`
  width: 220px;
  height: 54px;
  font-family: Spartan;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 0px;
  color: #6A6A6A;
  opacity: 1;
`;

export function BigLogos(props){
    return(
        <LogosContainer>
            <LogoRow>
                <ContentContainer>
                    <ThumbLogo src={thumbLogo} />
                    <GreenText>Prostota</GreenText>
                    <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NormalText>
                </ContentContainer>
                <VerticalBorder />
                <ContentContainer>
                    <ShieldLogo src={shieldLogo} />
                    <GreenText>Gwarancja</GreenText>
                    <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NormalText>
                </ContentContainer>
                <VerticalBorder />
                <ContentContainer>
                    <PhoneLogo src={phoneLogo} />
                    <GreenText>Gwarancja</GreenText>
                    <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NormalText>
                </ContentContainer>
                <VerticalBorder />
                <ContentContainer>
                    <TickLogo src={tickLogo} />
                    <GreenText>Dofinansowania</GreenText>
                    <NormalText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</NormalText>
                </ContentContainer>
            </LogoRow>
        </LogosContainer>
    )
}