import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const TextContainer= styled.div`
  position: absolute;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  color: #450000;
  background-color: #ffffff99;
  padding: 2rem;

  @media screen and (max-width: 900px) {
    bottom: 3rem;
    margin-left: 3rem;
    padding: 1.4rem;
  }

  @media screen and (max-width: 500px) {
    bottom: 1rem;
    margin-left: 1rem;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 150%;
  }
`;

const Desc = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #4a4a4a;

    @media screen and (max-width: 900px) {
    font-size: 1.2;
  }

  @media screen and (max-width: 500px) {
    font-size: 100%;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 40rem;

  @media screen and (max-width: 900px) {
    width: 100%;
    height: auto;
  }
`;

const image = "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const Banner = () => {
  return (
    <Container>
        <TextContainer>
            <Title>OUR BEST SELECTIONS</Title>
            <Desc>The most comfortable clothes you'll ever have.</Desc>
        </TextContainer>
      <Img src={image} alt='Banner'/>
    </Container>
  )
}

export default Banner
