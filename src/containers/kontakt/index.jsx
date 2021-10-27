import react from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { MainSection } from "./main";
import { Siedziba } from "./siedziba";

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


export function Kontakt(params) {
    return(
        <PageContainer>
            <Navbar/>
            <MainSection/>
            <Siedziba/>
            <Footer/>
        </PageContainer>
    )
}