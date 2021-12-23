import React from "react";
import styled from "styled-components";

import boltLogo from "../../assets/logo/bolt.png";
import sunLogo from "../../assets/logo/sun.png";
import lightbulbLogo from "../../assets/logo/lightbulb.png";
import temperatureLogo from "../../assets/logo/temperature.png";
import comparisonLogo from "../../assets/logo/comparison.png";

const Column = styled.div`
@media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: -2.5em;
}
`;

const LogosContainer = styled.div`
  width: 240px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SunLogo = styled.img`
  width: 41px;
  height: 41px;
  opacity: 1;
`;

const ComparisonLogo = styled.img`
  margin-left: 2em;
  width: 32px;
  height: 32px;
  opacity: 1;
`;

const BoltLogo = styled.img`
  margin-left: 2em;
  width: 29px;
  height: 36px;
  opacity: 1;
`;

const LightbulbLogo = styled.img`
  margin-left: 2em;
  width: 27px;
  height: 42px;
  opacity: 1;
`;

const TemperatureLogo = styled.img`
  margin-left: 2em;
  width: 22px;
  height: 41px;
  opacity: 1;
`;

const SmallLogos = (props) => {
    return(
      <Column>
        <LogosContainer>
            <SunLogo src={sunLogo}/>
            <ComparisonLogo src={comparisonLogo}/>
            <BoltLogo src={boltLogo}/>
            <LightbulbLogo src={lightbulbLogo}/>
            <TemperatureLogo src={temperatureLogo}/>
        </LogosContainer>
      </Column>
    )
}

export default SmallLogos;