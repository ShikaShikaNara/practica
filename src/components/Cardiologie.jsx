import React from 'react'
import styled  from 'styled-components'
import Loading from './loading';

const Section = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;



`;

const Description = styled.p`
  font-size: 22px;
`;



const Cardiologie = () => {
  return (
    <Section>
        
        <Description>
        Echipa noastră de cardiologi are expertiză în diagnosticarea și tratarea afecțiunilor cardiace. Acești specialiști oferă evaluări cardiovasculare complete, teste de diagnosticare și gestionarea afecțiunilor cardiovasculare prin metode non-invazive sau proceduri intervenționale.
        </Description>

    </Section>
  )
}

export default Cardiologie