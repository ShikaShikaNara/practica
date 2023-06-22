import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
display: flex;
justify-content: center;

`;

const Container = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px ;

`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

`;

const Logo = styled.img`
  height: 80px;

`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  color: #045159;
`;

const Icon = styled.img`
  height: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #045159;
  color: #f2f2f2;
  font-weight:400;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;


function Navbar() {
  return (
    <Section>
        <Container> 
          <Links>
          <Logo src="./img/logo.png"/>
          <List>
          <ListItem>Acasa</ListItem>
          <ListItem>Doctori</ListItem>
          <ListItem>Despre</ListItem>
          <ListItem>Contact</ListItem>
          </List>
          </Links>
          <Icons><Icon src="./img/search.png"/>
          <Button>Inregistreaza-te</Button>
          </Icons>
        </Container>
    </Section>
  )
}

export default Navbar