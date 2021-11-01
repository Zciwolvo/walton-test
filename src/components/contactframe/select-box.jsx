import React, {useState} from "react";
import styled from "styled-components";

import DropdownArrow from "../../assets/logo/dropboxarrow.png"

const { innerWidth: windowWidth, innerHeight: windowHeight } = window;


const SelectboxboxAbove = styled.div`
  transition: all 0.5s;
  width: 440px;
  height: 48px;
  position: absolute;
  background-color: #fcfcfc;
  z-index: 12;
  border-radius: 10px;
  p{
    padding: 1em;
    padding-left: 1.27em;
    font-family: Rubik;
    font-size: 1em;
    font-weight: 300;
    color: black;
    margin: 0;
  }
  @media (max-width: 800px) {
      width: ${windowWidth*0.7}px;
      text-align: left;
    }
`;

const Selectboxbox = styled.div`
  transition: all 0.5s;  
  box-shadow: -4px 8px 6px #0000001f;
  width: 440px;
  height: 48px;
  border-radius: 10px;
  position: relative;
  z-index: 10;
  margin: 1em auto 0 auto;
  @media (max-width: 800px) {
      width: ${windowWidth*0.7}px;
      text-align: left;
      margin: 1em 0 0 0;
    }
`;

const Selectboxselecteditem = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  padding: 14px 20px;
  background-color: #fcfcfc;
  vertical-align: middle;
  font-family: Rubik;
  font-size: 1em;
  z-index: 6;
  transition: all 0.5s;
  p{
    font-family: Rubik;
    font-size: 1em;
    font-weight: 300;
    z-index: 10;
    color: black;
    margin: 0;
  }
`;

const Selectboxitems = styled.div`
transition: all 0.3s ease-in;
display: block;
z-index: 1;
div {
  transition: all 0.5s;
  box-shadow: -4px 8px 6px #0000001f;
  z-index: 2;
  height: 50px;
  background-color: #fcfcfc;
  padding: 8px;
  padding-left: 20px;
  z-index: 5;
  p{
    transition: 0ms;
    font-family: Rubik;
    font-size: 1em;
    margin-top: -0px;
  }
  &:last-child {
    border-radius: 0 0 10px 10px;
  }
}
`;

const Selectboxarrow = styled.img`
  width: 24px;
  height: 24px;
  top: 10px;
  margin: 0;
  padding: 0;
  display: inline-block;
  position: absolute;
  right: 15px;
  transition: all 0.3s ease-in;
`;

const SelectBox = () => {

  const [dropdown, setDropdown] = useState(false)

  const dropdownstate = (dropdown) => {
    setDropdown(!dropdown)
  }
  
  const items=[
    { value: "Temat1", id: 1 },
    { value: "Temat2", id: 2 },
    { value: "Temat3", id: 3 },
  ];

  const [selecteditem, setSelectedItem] = useState("Wybierz temat")


  return(
  <Selectboxbox onClick={() => dropdownstate(dropdown)} style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
      <SelectboxboxAbove onClick={() => dropdownstate(dropdown)} 
      style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
        <p>{selecteditem}</p>
      </SelectboxboxAbove>
      
        <Selectboxselecteditem style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
          <p>{selecteditem}</p>
        </Selectboxselecteditem>
        <Selectboxarrow src={DropdownArrow} style={{transform: dropdown ? 'rotate(-180deg)' : 'rotate(0)'}}/>
        <Selectboxitems style={{transform: dropdown ? "translateY(0em)" : "translateY(-3em)", visibility: dropdown ? "visible" : "hidden"}}>
        {items.map((item) => (
                <div
                  style={{height: dropdown ? "48px" : "0"}}
                  key={item.id}
                  onClick={() => setSelectedItem(item.value)}
                >
                  <p style={{visibility: dropdown ? "visible" : "hidden"}}>{item.value}</p>
                </div>
              ))}
        </Selectboxitems>
      </Selectboxbox>
  )
}

export default SelectBox;