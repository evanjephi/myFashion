import React from "react";
import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 3rem;

  @media screen and (max-width:700px){
    flex-direction: column;
}
`;

const Categorieslist = styled.div`
  width: 100%;
  position: relative;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;


  @media screen and (min-width:700px){
    height: 50rem;
}
`;

const CategoriesInfo = styled.div`
    color: white;
`;

const TitleCategories = styled.h1`
    position: absolute;
    top: 3rem;
    left: 3rem;
    background-color: #000000b3;
    padding: 1rem;
`;

const CategoriesItems = styled.div`
    position: absolute;
    bottom: 3rem;
    left: 3rem;

`;

const Desc = styled.p`
font-size:1.5rem;
`;

const Button = styled.button`
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    font-weight: bolder;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Categorieslist key={item.id}>
          <Image src={item.image} alt={item.title} />
          <CategoriesInfo>
            <TitleCategories>{item.title}</TitleCategories>
            <CategoriesItems>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </CategoriesItems>
          </CategoriesInfo>
        </Categorieslist>
      ))}
    </Container>
  );
};

export default Categories;
