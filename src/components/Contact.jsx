import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction:column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background: #f2f2f2;
  border: none;
  border-radius: 5px;

`;
const TextArea = styled.textarea`
  padding: 20px;
  background: #f2f2f2;
  border: none;
  border-radius: 5px;

`;
const Button = styled.button`
  background-color: #045159;
  color: #f2f2f2;
  border : none;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;

`;

const Right = styled.div`
  flex:1;
`;




const Contact = () => {
  const ref = useRef()

  const [success, setSuccess] = useState(null) 
  
  const handleSubmit =e=>{
    e.preventDefault();

    emailjs.sendForm('service_ct012vw', 'template_46skx47', ref.current, 'CW4qD9ZCQzMvcMljC')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });
  };
  

  return (
    <Section>
      <Conteiner>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Nume" name="name"/>
            <Input placeholder="Email" name="email"/>
            <TextArea placeholder="Mesajul dumneavoastra" name="message" rows={10}/>
            <Button type="submmit">Trimite</Button>
            {success && 
              "Mesajul tau a fost trimis. Revenim cu un raspuns mai tarziu"}
          </Form>

        </Left>


        <Right>

          <Map/>


        </Right>
      </Conteiner>
    </Section>
  );
};
export default Contact