import react from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import Promo from "../../components/promo";
import { Instalacje } from "./instalacje";
import { MainSection } from "./main";
import { Footer } from "../../components/footer";

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


export function Realizacje(params) {
    return(
        <PageContainer>
            <Navbar/>
            <MainSection/>
            <Instalacje/>
            <Promo/>
            <Footer/>
        </PageContainer>
    )
}