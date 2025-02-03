import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import WhatsNew from '../components/WhatsNew'
import Banner from '../components/Banner'
import styled from 'styled-components';
import NewTrending from '../components/NewTrending';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

const Container = styled.div`
  max-width: 160rem;
  width: 100vw;
`;

const Home = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  useEffect(() => {
    const body = document.body;
    if (isCartOpen) {
      body.style.overflowY = 'hidden';
    } else {
      body.style.overflowY = 'auto';
    }
  }, [isCartOpen]);
  return (
    <Container>
      <WhatsNew />
      <Cart isOpen={isCartOpen} onCloseCart={toggleCart}/>
      <Navbar onToggleCart={toggleCart}/>
      <Banner />
      <NewTrending />
      <Categories />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Home
