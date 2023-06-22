import React from 'react'
import styled  from 'styled-components'

const Section = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;



`;

const Description = styled.p`
  font-size: 22px;
`;

const Chirurgie = () => {
  return (
    <Section>
        
        <Description>
        Chirurgii noștri sunt specializați într-o varietate de proceduri chirurgicale, de la intervenții minore până la operații complexe. Aceștia au experiență în chirurgia generală, chirurgia plastica și reconstructivă, precum și în chirurgia minim-invazivă. Ei colaborează strâns cu pacienții pentru a dezvolta planuri de tratament personalizate și pentru a asigura o recuperare rapidă și eficientă.
        </Description>

    </Section>
  )
}

export default Chirurgie