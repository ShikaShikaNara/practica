
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Test from "./components/Test"
import Who from "./components/Who"
import Works from "./components/Works"
import styled from "styled-components"

 
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory ;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width:none;
  color: #045159;
  background-color: #accef2;
  background-size: 100%;

  &::-webkit-scrollbar{
    display : none
  }
`;

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>

    </Container>
  )
}

export default App
