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


const Stomatologie = () => {
  return (
    <Section>
        
        <Description>Stomatologii noștri sunt specializați în tratamentul afecțiunilor dentare, de la proceduri de rutină precum curățarea și albirea dinților, până la intervenții complexe de implant dentar sau ortodonție. Aceștia sunt dedicați să vă ofere un zâmbet sănătos și strălucitor. </Description>

    </Section>
  )
}

export default Stomatologie