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

const Pediatrie = () => {
  return (
    <Section>
        
        <Description>
        Pediatrii noștri sunt dedicați să ofere îngrijire medicală cuprinzătoare și empatică copiilor de toate vârstele. Ei sunt special pregătiți pentru a diagnostica și trata afecțiunile pediatrice comune, precum și pentru a oferi îndrumare și consiliere privind dezvoltarea și sănătatea generală a copiilor.
        </Description>

    </Section>
  )
}

export default Pediatrie