import React from 'react'
import styled  from 'styled-components'
import Navbar from './Navbar'
import Loading from './loading';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;


`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content:space-between;

`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* background: gray; */

`;
const Title = styled.h1`
  font-size: 70px;

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
  font-size: 22px;
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


const Right = styled.div`
  flex: 3;
  position: relative;
  /* background-color: yellow; */
`;
const Img = styled.img`
width: 600px;
height: 400px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@keyframes animate {
  to{
    transform: translateY(20px)
  }

}

`;



const Hero = () => {
  
  return (
    <Section>
     <Navbar/>
     <Container>
      <Left>
        <Title>MedicaPharma</Title>
        <WhatWeDo>

            <Loading/>
          <Subtitle> "Sănătatea ta, misiunea noastră" </Subtitle>
        </WhatWeDo>
        <Description>Transforma medicina într-o experiență prietenoasă și accesibilă </Description>

        <Button>Inregistreaza-te</Button>



      </Left>

      <Right>

        <Canvas camera= {{fov:25, position:[5,5,5]}}>
          <OrbitControls enableZoom={false} autoRotate={false}/>
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
          <Sphere args={[1,100,300]} scale={1.5}>

           <MeshDistortMaterial 
           color="#045159"
           attach="material"
           distort={0.5}
           speed={2}
            />
          </Sphere>

        </Canvas>
        <Img src="./img/medicine.png"/>


      </Right>

     </Container>
    </Section>
  )
}

export default Hero

