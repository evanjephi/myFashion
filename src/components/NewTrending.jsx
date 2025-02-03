import React from "react";
import styled from "styled-components";
import { FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";
import { trendingItemList } from "../data";

const Container = styled.div``;

const Title = styled.h1`
  margin: 2.5rem 0;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin: 0 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex: 0 0 50%;
    align-items: center;
  }
`;

const TrendingItemList = styled.div`
  width: 19rem;
`;

const CartAndHeartIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease;

  svg{
    background-color: white;
    padding: .8rem;
    margin: .5rem;
    border-radius: 3rem;
    color: red;
    cursor: pointer;
  }

  svg:hover{
    background-color: red;
    color: white;
  }
`;

const ImgContainer = styled.div`
  position: relative;

  &:hover ${CartAndHeartIcons} {
    opacity: 1;
    visibility: visible;
    background-color: #00000079;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const TrendingItemInfo = styled.div`
  padding: 1rem;
  text-align: center;
`;

const TrendingTitle = styled.h3``;

const Price = styled.span`
  color: #7b7b7b;
`;
const NewTrending = () => {
  return (
    <Container>
      <Title>NEW & TRENDING</Title>
      <Wrapper>
        {trendingItemList.map((item) => (
          <TrendingItemList key={item.id}>
            <ImgContainer>
              <Image src={item.image} alt={item.title} />
            
              <CartAndHeartIcons>
                <ShoppingCartOutlined />
                <FavoriteBorder />
              </CartAndHeartIcons>
            </ImgContainer>
            <TrendingItemInfo>
              <TrendingTitle>{item.title}</TrendingTitle>
              <Price>{item.price}</Price>
            </TrendingItemInfo>
          </TrendingItemList>
        ))}
      </Wrapper>
    </Container>
  );
};

export default NewTrending;
