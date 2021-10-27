import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import MainSection from "./main";
import { Posty } from "./posty";
import Promo from "../../components/promo";

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

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

export function Aktualnosci(params) {
    return(
        <PageContainer>
            <Navbar/>
            <MainSection/>
            <Posty/>
            <Promo/>
            <Footer/>
        </PageContainer>
    )
}