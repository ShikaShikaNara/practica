import React from 'react'
import styled  from 'styled-components'
import Loading from './loading';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;


`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content:space-between;

`;

const Left = styled.div`
  flex: 1;


`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  `;

const Title = styled.h1`
  font-size: 74px;
`;

  const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  
  `;
  
const Line = styled.img`
  height: 40px;
`;

  
  const Subtitle = styled.h2`
    color : #033e44;
  
  `;
  
  const Description = styled.p`
    font-size: 24px;

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
  const Img = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  padding-top: 170px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  
  `;

const Who = () => {
  return (
    <Section>
     <Container>
      <Left>

        <Img src="./img/doc.png"/>


      </Left>

      <Right>
        <Title>Despre noi</Title>
        <WhatWeDo>

          <Loading/>

          <Subtitle> Echipa noastră dedicată, grija ta prioritară </Subtitle>
        </WhatWeDo>
        <Description>La clinica MedicaPharma, avem o echipă de specialiști experimentați în stomatologie, oftalmologie, chirurgie și pediatrie. Ne dedicăm sănătății tale și oferim servicii medicale de înaltă calitate, cu empatie și profesionalism. Indiferent de nevoile tale, suntem aici să îți oferim îngrijire excelentă și să te ajutăm să te menții sănătos.</Description>

        <Button>Inregistreaza-te</Button>

      </Right>

     </Container>
    </Section>
  )
}

export default Who