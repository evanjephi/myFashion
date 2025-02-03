import { Close } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    z-index: 1001;
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    /* right: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; */
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: visibility 0.2s, opacity 0.2s;
    width: 100vw;
`;

const CartItems = styled.div`
    position: absolute;
    right: 0; 
    width: 25rem; 
    background-color: #fff;
    height: 100vh; 
    padding: 1rem;
    box-shadow: 0 0 100px 280vh rgba(0, 0, 0, 0.5);

    .cartMenu{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .cartMenu h2{
        padding-bottom: 2rem;
    }

    .closeCart{
        cursor: pointer;
        font-size: 30px;
        color: gray;
    }

    svg:hover{
        color: #343434;
    }

    .image{
        width: 8rem;
    }

    .image img{
        width: 100%;
    }

    .cartItemList{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .productContent{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .productContent .quantity{
        font-size: 15px;
        /* padding-left: 0.5rem; */
    }

    .productContent .price{
        display: flex;
        align-items: center;
    }


    .productContent h3{
        padding-left: 1rem;
    }

    .total{
        float: right;
    }

    .removeProduct{
        cursor: pointer;
        font-size: 10px;
        padding: 0.4rem 0.3rem;
        color: #d73b3b;
        border: 2px solid #d73b3b;
        border-radius: 5px;
        margin-left: 0.5rem;
    }

    .removeProduct:hover{
        background-color: #d73b3b;
        color:white
    }

    @media screen and (max-width:790px){
        width: 100vw; 
        padding: .3rem;

        .cartMenu h2,.cartContent{
        padding-left: .8rem;
    }

    }
`;

const Cart = ({ isOpen, onCloseCart }) => {
    const image = "https://images.pexels.com/photos/2061901/pexels-photo-2061901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    return (
        <Container isOpen={isOpen}>
            <CartItems>
                <div className='cartMenu'>
                    <h2>Cart</h2>

                    <div>
                        <Close className='closeCart' onClick={onCloseCart} />
                    </div>
                </div>

                <div className='cartContent'>
                    <div className='cartItemList'>

                        <div className='image'>
                            <img src={image} alt="" />
                        </div>

                        <div className='productContent'>
                            <h3>Product Name
                                <div className='quantity'>x 1</div>
                            </h3>
                            <div className='price'>$150.00
                                <Close className='removeProduct'/>
                            </div>
                            
                        </div>
                    </div>
                    <h3 className='total'>Total: $150.00</h3>
                </div>
            </CartItems>
        </Container>
    )
}

export default Cart
