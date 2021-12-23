import React from "react";
import styled from "styled-components";

const { innerWidth: windowWidth } = window;

const Container = styled.div`
      width: 100%;
      height: 100%;
      padding: 0em 0em 0em 0em;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    const OpinionContainer1 = styled.div`
      width: 449px;
      height: 337px;
      background: #FCFCFC 0% 0% no-repeat padding-box;
      box-shadow: -4px 8px 6px #00000029;
      border-radius: 10px;
      opacity: 1;
      margin-left: -3em;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin-left: 0;
      }
    `;

    const OpinionContainer2 = styled.div`
      width: 449px;
      height: 337px;
      background: #FCFCFC 0% 0% no-repeat padding-box;
      box-shadow: -4px 8px 6px #00000029;
      border-radius: 10px;
      opacity: 1;
      margin-left: 3em;
      margin-top: 2em;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin-left: 0;
      }
    `;

    const OpinionContainer3 = styled.div`
        width: 449px;
        height: 337px;
        background: #FCFCFC 0% 0% no-repeat padding-box;
        box-shadow: -4px 8px 6px #00000029;
        border-radius: 10px;
        opacity: 1;
        margin-left: -3em;
        margin-top: 2em;
        @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin-left: 0;
      }
    `;

    const OpinionContainer4 = styled.div`
        width: 449px;
        height: 337px;
        background: #FCFCFC 0% 0% no-repeat padding-box;
        box-shadow: -4px 8px 6px #00000029;
        border-radius: 10px;
        opacity: 1;
        margin-left: 3em;
        margin-top: 4em;
        @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        text-align: center;
        margin-left: 0;
      }
    `;

    const BlueText = styled.p`
      padding-top: 1em;
      padding-left: 1em;
      text-align: left;
      font-family: Spartan;
      font-size: 1.3em;
      font-weight: 700;
      letter-spacing: 0px;
      color: #0477BF;
      opacity: 1;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth}px;
        text-align: center;
        margin-left: 0;
        padding-left: 0;
      }
    `;

    const SmallText = styled.p`
      padding-left: 1.3em;
      width: 359px;
      height: 219px;
      text-align: left;
      line-height: 1.5em;
      font-family: Rubik;
      font-size: 1em;
      font-weight: 500;
      letter-spacing: 0px;
      color: #252601;
      opacity: 1;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        letter-spacing: 1px;
        text-align: center;
        padding-left: 0.5em;
      }
    `;

    const Row = styled.div`
      display: flex;
      flex-direction: row;
      @media (max-width: 800px) {
        flex-direction: column;
      }
    `;


const OpinionGrid = () => {
    return(
    <Container>
        <Row>
            <OpinionContainer1>
                <BlueText>Pan Zdzisław z Lublinca</BlueText>
                <SmallText>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</SmallText>
            </OpinionContainer1>
            <OpinionContainer2 >
                <BlueText>Pan Zdzisław z Lublinca</BlueText>
                <SmallText>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</SmallText>
            </OpinionContainer2>
        </Row>
        <Row>
            <OpinionContainer3>
                <BlueText>Pan Zdzisław z Lublinca</BlueText>
                <SmallText>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</SmallText>
            </OpinionContainer3>
            <OpinionContainer4>
                <BlueText>Pan Zdzisław z Lublinca</BlueText>
                <SmallText>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</SmallText>
            </OpinionContainer4>
        </Row>
    </Container>
    )
}


export default OpinionGrid