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

const Oftalmologie = () => {
  return (
    <Section>
        
        <Description>
            
        Oftalmologii noștri sunt experți în îngrijirea sănătății ochilor. Ei pot realiza examinări oftalmologice complete și pot diagnostica și trata o gamă largă de afecțiuni, de la miopie și hipermetropie până la glaucom și cataractă. Folosind echipamente moderne și tehnici avansate, ne asigurăm că vă oferim cele mai bune soluții pentru nevoile dumneavoastră oftalmologice.
        </Description>

    </Section>
  )
}

export default Oftalmologie