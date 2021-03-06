import React, {useState} from "react";
import styled from "styled-components";

import DropdownArrow from "../../assets/logo/dropboxarrow.png"

const { innerWidth: windowWidth } = window;

const SelectboxboxAbove = styled.div`
  transition: all 0.5s;
  width: 440px;
  height: 48px;
  position: absolute;
  border-radius: 10px;
  background-color: #fcfcfc;
  z-index: 12;
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
  box-shadow: -4px 8px 6px #0000001f;
  width: 440px;
  height: 48px;
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
  border-radius: 10px;
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
display: block;
z-index: 1;
transition: all 0.3s;
div {
  transition: all 0.5s;
  box-shadow: -4px 8px 6px #0000001f;
  z-index: 2;
  background-color: #fcfcfc;
  padding: 8px;
  padding-left: 20px;
  z-index: 5;
  p{
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
  z-index: 15;
  display: inline-block;
  position: absolute;
  right: 15px;
  transition: all 0.3s ease-in;
`;

const SelectBox = (props) =>{

  const [dropdown, setDropdown] = useState(false)

  const dropdownstate = (dropdown) => {
    setDropdown(!dropdown)
  }
  
  const items=[
    { value: "Temat1", id: 1 },
    { value: "Temat2", id: 2 },
    { value: "Temat3", id: 3 },
  ];

  return(
  <Selectboxbox onClick={() => dropdownstate(dropdown)} style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
      <SelectboxboxAbove onClick={() => dropdownstate(dropdown)} 
      style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
        <Selectboxarrow src={DropdownArrow} style={{transform: dropdown ? 'rotate(-180deg)' : 'rotate(0)'}}/>
        <p>{props.selected}</p>
      </SelectboxboxAbove>
      
        <Selectboxselecteditem style={{borderRadius: dropdown ? "10px 10px 0 0" : "10px" }}>
          <p>{props.selected}</p>
        </Selectboxselecteditem>
        
        <Selectboxitems 
        
        style={{transform: dropdown ? "translateY(0em)" : "translateY(-3em)", visibility: dropdown ? "visible" : "hidden"}}>
        {items.map((item) => (
                <div
                  style={{height: dropdown ? "48px" : "0"}}
                  key={item.id}
                  onClick={() => props.onChange(item.value)}
                  
                >
                  <p style={{visibility: dropdown ? "visible" : "hidden"}}>{item.value}</p>
                </div>
              ))}
        </Selectboxitems>
      </Selectboxbox>
  )
}

export default SelectBox;