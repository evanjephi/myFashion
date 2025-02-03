import React, { useState } from "react";
import styled from "styled-components";
import {
  CloseOutlined,
  MenuOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4rem 0 6rem;
  height: 80px;

  .openMenuIcon,
  .closeMenuIcon {
    display: none;
    z-index: 999;
  }

  .menuList{
    display: flex;
  }

  svg {
    font-size: 30px;
  }

  @media screen and (max-width: 900px) {
    font-size: 14px;
    margin: 0 2rem;
  }

  @media screen and (max-width: 790px) {
    font-size: 16px;
    margin:0 0.8rem;

    .openMenuIcon {
      display: block;
    }

    .openMenuIcon.show {
      display: none;
    }

    .closeMenuIcon.show {
      display: block;
    }

    .menuList {
      display: ${props => (props.isMenuOpen ? "flex" : "none")};
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top:40px;
      left: 0;
      margin: auto;
      z-index: 998;

      .searchContainer {
        order: 3;
      }
    }
  }
`;

const Left = styled.div`
  flex: 1;
  z-index: 1000;
`;

const Logo = styled.h2`
  font-weight: bold;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding-right: 2rem;

  @media screen and (max-width: 790px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Li = styled.li``;

const Right = styled.div`
  flex: 1;
  z-index: 1000;

  @media screen and (max-width: 790px) {
    margin-right: 1rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  width: 13rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
`;

const SearchIcon = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 2rem;
  text-transform: uppercase;

  .shoppingtCart{
    cursor: pointer;
  }

  .shoppingtCart:hover{
    color: red;
  }
  @media screen and (max-width: 790px) {
    margin-left: 0;
  }
`;

const CartContainer = styled.div`
  display: flex;
  @media screen and (max-width: 790px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Navbar = ({onToggleCart}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Left>
        <Logo>MyFashions.</Logo>
      </Left>

      <div className="menuList">
        <Ul>
          <Li>
            <RightItems href="#">Tops</RightItems>
          </Li>
          <Li>
            <RightItems href="#">Pants</RightItems>
          </Li>
        </Ul>

        <SearchContainer className="searchContainer">
          <Input />
          <SearchIcon>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchIcon>
        </SearchContainer>

        <Ul>
          <Li>
            <RightItems>Favorites</RightItems>
          </Li>
          <Li>
            <RightItems>Login</RightItems>
          </Li>
        </Ul>
      </div>

      <Right className="right">
        <RightItems>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlined className="shoppingtCart" onClick={onToggleCart}/>
          </Badge>
        </RightItems>
      </Right>

      <MenuOutlined
        className={`openMenuIcon ${isMenuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      />
      <CloseOutlined
        className={`closeMenuIcon ${isMenuOpen ? "show" : ""}`}
        onClick={toggleMenu}
      />
    </Container>
  );
};

export default Navbar;
