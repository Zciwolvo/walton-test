import React, {useState} from "react";
import styled from "styled-components";
import BigLogos from "../../components/big_logos_bar";
import { Link , BrowserRouter as Router } from "react-router-dom";
import SmallLogos from "../../components/small_logos_bar";
import Popup from "../../components/popup";

import dom from "../../assets/photos/dom.png";  

const MainContainer = styled.div`
width: 70%;
height: 100%;
max-width: 1440px;
background: #FFFFFF 0% 0% no-repeat padding-box;
margin: auto;
margin-bottom: 5em;
display: flex;
flex-direction: column;
@media (max-width: 800px) {
  text-align: center;
}
`;

const GreenText = styled.h1`
font-family: Rubik;
font-size: 3.5em;
font-weight: 600;
letter-spacing: 0px;
color: #93A603;
text-transform: uppercase;
opacity: 1;

`;

const NormalText = styled.h1`
margin-top: -6%;
font-family: Rubik;
font-size: 3em;
font-weight: 300;
letter-spacing: 0px;
color: #252601;
opacity: 1;
`;

const AdvisorButton = styled.button`
width: ${props => props.props.width}px;
height: ${props => props.props.height}px;
background: ${props => props.props.color} 0% 0% no-repeat padding-box;
box-shadow: 0px 5px 12px #00000029;
border-radius: 10px 10px 10px 0px;
opacity: 1;
border: none;
@media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

const ButtonText = styled.p`
text-align: center;
justify-content: center;
font-family: Spartan;
font-size: 1.1em;
font-weight: 600;
letter-spacing: 0px;
color: #F4F4F4;
opacity: 1;

`;

const HousePhoto = styled.img`
width: 100%;
height: 100%;
max-width: 720px;
max-height: 661px;
border-radius: 10px 0px 0px 100px;
opacity: 1;
z-index: 1;
margin-top: -3%;
@media (max-width: 800px) {
  height: 0;
  width: 0;
}
`;


const LeftSide = styled.div`
flex-direction: column;
display: flex;
margin-top: 8em;
@media (max-width: 800px) {
  margin-left:0;
  display: flex;
  align-items: center;
}
`;

const RightSide = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`;

const Sides = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 800px) {
  flex-direction: column;
}
`;

const MainSection = () => {

    const [width, SetWidth] = useState(288*1)
    const [height, SetHeight] = useState(48*1)
    const [color, setColor] = useState("#93A603")
    const [state, SetState] = useState(false)
    const setStyle = (width, height) => {
        SetWidth(width)
        SetHeight(height)
    }

    return(
     <MainContainer>
         <Sides>
             <LeftSide>
                 <SmallLogos />
                 <GreenText>B??D?? NA BIERZ??CO</GreenText>
                 <NormalText>Informacje z bran??y.</NormalText>
                 <Router><Link to="/Aktualno??ci" style={{textDecoration: 'none', width:"288px", height:"48px"}}><AdvisorButton
                     props={{width:width, height:height, color:color}}
                     onMouseOver={() => setColor("#78a603")}
                     onMouseOut={() => setColor("#93A603")}
                     onMouseDown={() => setStyle(0.98*288, 0.98*48)}
                     onMouseUp={() => setStyle(1*288, 1*48)}
                     onClick={() => SetState(true)}
                 ><ButtonText>Zapytaj doradc?? o ofert??</ButtonText></AdvisorButton></Link></Router>
             </LeftSide>
             <RightSide>
                <HousePhoto src={dom}></HousePhoto>
             </RightSide>
         </Sides>
         <BigLogos />
         <Popup trigger={state} setTrigger={SetState}>
            </Popup>
     </MainContainer>
    )
}

export default MainSection