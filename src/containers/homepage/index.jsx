import React from  'react';
import styled from "styled-components";
import Navbar from "../../components/navbar";
import MainSection from "./main";
import Footer from "../../components/footer";
import Calc from "./calculator";
import Fotowoltaika from "./fotowoltaika";
import Pompy from "./pompy";
import Historia from "./historia";
import Realizacje from "./realizacje";
import Opinie from "./opinie";
import Aktualnosci from "./aktualnosci";
import Pytania from "./pytania";
import Serwis from "./serwis";
import Promo from "../../components/promo";

const { innerWidth: windowWidth } = window;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  @media (max-width: 800px) {
        justify-content: center;
        align-items: center;
        width: ${windowWidth}px;
        height: 100%;
        padding: 0px;
        overflow-x: hidden; 
    }
`;

const Homepage = (props) => {
    return (
    <PageContainer>
        <Navbar/>
        <MainSection/>
        <Calc/>
        <Fotowoltaika/>
        <Pompy/>
        <Historia/>
        <Realizacje/>
        <Opinie/>
        <Aktualnosci/>
        <Pytania/>
        <Serwis/>
        <Promo/>
        <Footer/>
    </PageContainer>
    );
}

export default Homepage;