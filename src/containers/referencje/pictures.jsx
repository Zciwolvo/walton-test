import React from "react";
import styled from "styled-components";

import solary from "../../assets/photos/solar.jpg"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

const MainContainer = styled.div`
  width: 70%;
  height: 100%;
  max-width: 1440px;
  display: flex;
  margin: auto;
  flex-direction: column;
  margin-bottom: 5em;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: ${windowWidth*0.95}px;
    text-align: center;
    margin-bottom: -3em;
}
`;

const Row = styled.div`
    width: 100%;
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

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Picture = styled.img`
    width: 265px;
    height: 421px;
    margin-bottom: 3em;
`;

export function Pictures(params) {
    return(
        <MainContainer>
            <Row>
                <Column>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                </Column>
                <Column>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                </Column>
                <Column>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                </Column>
                <Column>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                    <Picture src={solary}/>
                </Column>
            </Row>
        </MainContainer>
    )
}