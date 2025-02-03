import React from 'react'
import styled from 'styled-components';
import bg from '../img/bg.jpg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
`;

const LoginContent = styled.div`
  background-image: url(${bg});
  background-size: cover; 
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .registerContainer{
    background-color: #faebd79e;
    padding: 2rem;
    border-radius: 5px;
  }

  .title{
    padding-bottom: 2.5rem;
  }

  .email, .password{
    padding-bottom: 1.5rem;
  }
  
  span{
    color: red;
  }

  .input_tb{
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0.6rem;
    border-radius: 5px;
    font-size: large;
    width: 100%;
    margin-top: 0.3rem;
  }

  .become_member_btn{
    background-color: red;
    color: white;
    font-size: large;
    cursor: pointer;
  }

  .become_member_btn:hover{
    background-color: #ff4040;
  }

  .login_btn{
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
  }

`;

const Register = () => {
    return (
        <Container>
            <Navbar />
            <LoginContent>
                <div className="registerContainer">
                    <div className="title">
                        <h1>Registration</h1>
                        <p>Become a Member — don’t miss out on rewards, perks, invitation to events and contests.</p>
                    </div>

                    <div className="email">Full name
                        <span>*</span>
                        <input className='input_tb'
                            type="text"
                            placeholder='first and last name'
                        />
                    </div>

                    <div className="email">Email
                        <span>*</span>
                        <input className='input_tb'
                            type="text"
                            placeholder='your email'
                        />
                    </div>

                    <div className="password">Password
                        <span>*</span>

                        <input className='input_tb'
                            type="text"
                            placeholder='your password'
                        />
                    </div>

                    <div className="password">Enter password again
                        <span>*</span>

                        <input className='input_tb'
                            type="text"
                            placeholder='Re-enter password'
                        />
                    </div>
                    
                    <button className="input_tb become_member_btn">Become a member</button>
                    <button className="input_tb login_btn">Login</button>
                </div>
            </LoginContent>
            <Footer />
        </Container>
    )
}

export default Register
