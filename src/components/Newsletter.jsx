import { Send } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 5rem;

  .title{
    margin: 2.5rem 0;
    text-align: center;
  }

  .desc{
    font-size:1.5rem;
    text-align: center;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Input = styled.input`
  outline: none;
  padding: 4px;
  max-width:30rem;
  width: 55%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  margin-left: 1rem;
  cursor: pointer;

  svg{
    font-size: 40px;
    color: white;
    padding: .5rem 1.5rem;
  }

  @media screen and (max-width:400px){
    svg{
    font-size: 22px;
    }
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <h1 className='title'>Newsletter</h1>
      <p className='desc'>Get updates from your favorite products</p>
      
      <ItemContainer>
        <Input />
        <Button> <Send /> </Button>
      </ItemContainer>
    </Container>
  )
}

export default Newsletter
