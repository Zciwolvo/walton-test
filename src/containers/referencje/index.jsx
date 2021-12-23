import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar";
import Promo from "../../components/promo";
import MainSection from "./main";
import Footer from "../../components/footer";
import Pictures from "./pictures";

const { innerWidth: windowWidth } = window;

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        justify-content: center;
        align-items: center;
        width: ${windowWidth}px;
        height: 100%;
        padding: 0px;
        overflow-x: hidden; 
    }
`;


const Referencje = (params) => {
    return(
        <PageContainer>
            <Navbar/>
            <MainSection/>
            <Pictures/>
            <Promo/>
            <Footer/>
        </PageContainer>
    )
}

export default Referencje