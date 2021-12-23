import React from "react";
import styled from "styled-components";
import { Link, BrowserRouter as Router } from "react-router-dom"


const PlusContainer = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
}
`;

const Circle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #778B22;
  opacity: 1;
`;

const VerticalBar = styled.div`
  background: #59A859 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 2px;
  height: 15px;
  margin-left: 12px;
  margin-top: 5px;
`;

const HorizontalBar = styled.div`
  background: #59A859 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 15px;
  height: 2px;
  margin-left: 6px;
  margin-top: -8px;
`;


const Plus = (props) => {
    return (
            <PlusContainer>
                <Circle>
                    <VerticalBar/>
                    <HorizontalBar/>
                </Circle>
            </PlusContainer>
    )
}

export default Plus;