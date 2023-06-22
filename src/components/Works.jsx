import React, { useState } from 'react'
import styled from 'styled-components'
import Oftalmologie from './Oftalmologie';
import Chirurgie from './Chirurgie';
import Cardiologie from './Cardiologie';
import Pediatrie from './Pediatrie';
import Stomatologie from './Stomatologie';

const data = [
  "Stomatologie",
  "Oftalmologie",
  "Chirurgie",
  "Cardiologie",
  "Pediatrie",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;
`;

const ListItems = styled.li`
font-size: 80px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 2px #045159;
`;

const Right = styled.div`
  
  flex:1

`;



const Works = () => {
  const[work,setWork] = useState ("Stomatologie")
  return (
    <Section>
     <Container>
        <Left>
          <List>
            {data.map((item) => (
            <ListItems key={item} text={item}  
            onClick={()=>setWork(item)}>{item}</ListItems>
            ))}
          </List>
        </Left>
      <Right>
      {work === "Stomatologie" ? (
        <Stomatologie/>
      ) : work === "Oftalmologie" ? (
        <Oftalmologie/>
      ) : work === "Chirurgie" ? (
        <Chirurgie/>
      ) : work === "Cardiologie" ? (
        <Cardiologie/>
      ) : (
        <Pediatrie/>
      ) }
      </Right>
    </Container>
    </Section>
  )
}

export default Works
