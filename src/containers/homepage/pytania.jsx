import React from "react";
import styled from "styled-components";
import AnswerBox from "../../components/questionbar";

const { innerWidth: windowWidth } = window;

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
    width: 100%;
}
`;

const Row = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 800px) {
  flex-direction: column;
}
`;

const RowAnswer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Middle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const LeftSide = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
@media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth}px;
        text-align: center;
      }
`;

const RightSide = styled.div`
width: 100%;
height: 100%;
margin-left: 7em;
display: flex;
flex-direction: column;
@media (max-width: 800px) {
    margin-left: 0;
    visibility: hidden;
}   height: 0;
`;

const RightSideMobile = styled.div`
width: 0%;
height: 100%;
display: flex;
flex-direction: column;
visibility: hidden;
@media (max-width: 800px) {
    visibility: visible;
    width: auto;
    margin: auto;
    align-items: center;
}
`;

const QuestionMark = styled.h1`
height: auto;
width: 0.6em;
margin: 0;
text-align: left;
font-family: Rubik;
font-size: 4em;
padding-top: 2em;
font-weight: 600;
letter-spacing: 0px;
color: #252601;
opacity: 1;

@media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth}px;
        text-align: center;
      }
`;

const OrangeText = styled.h1`
height: auto;
width: 8em;
text-align: left;
margin-top: 0;
font-family: Rubik;
font-size: 3em;
font-weight: 600;
letter-spacing: 0px;
color: #F58500;
text-transform: uppercase;
opacity: 1;
@media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        margin: auto auto 0.5em auto;
        text-align: center;
      }
`;

const BlackText = styled.h1`
width: 9em;
text-align: left;
font-family: Rubik;
font-size: 3em;
font-weight: 300;
letter-spacing: 0px;
color: #252601;
opacity: 1;
height: auto;
margin-top: -0.7em;
@media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        margin: -0.5em auto 0.5em auto;
        text-align: center;
      }
`;

const SmallText = styled.p`
width: 384px;
height: 79px;
text-align: left;
font-family: Rubik;
font-size: 1em;
line-height: 1.5em;
font-weight: 300;
letter-spacing: 1px;
color: #252601;
opacity: 1;
margin-top: -0.7em;
@media (max-width: 800px) {
    height: auto;
        flex-direction: column;
        align-items: center;
        width: ${windowWidth*0.95}px;
        margin-bottom: 5em;
        text-align: center;
        letter-spacing: 1px;
      }
`;

const Pytania = () => {
    return(
            <Container>
                <Middle>
                <Row>
                    <RightSideMobile>
                        <QuestionMark>?</QuestionMark>
                        <OrangeText>NAJCZĘŚCIEJ</OrangeText>
                        <BlackText>zadawane pytania</BlackText>
                        <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero. Curabitur rutrum lacinia tincidunt.</SmallText>
                    </RightSideMobile>
                    <LeftSide>
                        <AnswerBox >
                            <RowAnswer>
                                <h1>Dlaczego prąd jest taki drogi?</h1>
                                    <div>
                                        <div>
                                            <div />
                                        </div>
                                    </div>
                            </RowAnswer>
                            <p>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</p>
                        </AnswerBox>
                        <Row style={{marginLeft:"2em"}}>
                        <AnswerBox>
                        <RowAnswer>
                                <h1>Dlaczego prąd jest taki drogi?</h1>
                                    <div>
                                        <div>
                                            <div />
                                        </div>
                                    </div>
                            </RowAnswer>
                            <p>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</p>
                        </AnswerBox>
                        </Row>
                        <AnswerBox >
                        <RowAnswer>
                                <h1>Dlaczego prąd jest taki drogi?</h1>
                                    <div>
                                        <div>
                                            <div />
                                        </div>
                                    </div>
                            </RowAnswer>
                            <p>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</p>
                        </AnswerBox>
                        <Row style={{marginLeft:"2em"}}>
                        <AnswerBox>
                        <RowAnswer>
                                <h1>Dlaczego prąd jest taki drogi?</h1>
                                    <div>
                                        <div>
                                            <div />
                                        </div>
                                    </div>
                            </RowAnswer>
                            <p>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</p>
                        </AnswerBox>
                        </Row>
                        <AnswerBox >
                        <RowAnswer>
                                <h1>Dlaczego prąd jest taki drogi?</h1>
                                    <div>
                                        <div>
                                            <div />
                                        </div>
                                    </div>
                            </RowAnswer>
                            <p>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</p>
                        </AnswerBox>
                        <Row style={{marginLeft:"2em"}}>
                        <AnswerBox>
                        <RowAnswer>
                                <h1>Dlaczego prąd jest taki drogi?</h1>
                                    <div>
                                        <div>
                                            <div />
                                        </div>
                                    </div>
                            </RowAnswer>
                            <p>It was 7 minutes after midnight. The dog was lying on the grass in the middle of the lawn in front of Mrs Shears’ house. Its eyes were closed. It looked as if it was running on its side, the way dogs run when they think they are chasing a cat in a dream. But the dog was not running or asleep. The dog was dead. There was a garden fork sticking out of the dog.</p>
                        </AnswerBox>
                        </Row>
                    </LeftSide>
                    <RightSide>
                        <QuestionMark>?</QuestionMark>
                        <OrangeText>NAJCZĘŚCIEJ</OrangeText>
                        <BlackText>zadawane pytania</BlackText>
                        <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ex diam, elementum sed tellus nec, fermentum molestie libero. Curabitur rutrum lacinia tincidunt.</SmallText>
                    </RightSide>
                </Row>
                </Middle>
            </Container>
        )
}

export default Pytania