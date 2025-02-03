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

  .loginContainer{
    background-color: #faebd79e;
    padding: 2rem;
    border-radius: 5px;
  }

  .title{
    padding-bottom: 2.5rem;
  }

  .email, .password, .cb_pass_info{
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

  .cb_pass_info{
    display: flex;
    justify-content: space-between;
  } 

  .check_box{
    transform: scale(1.5);
    margin-left: 4px;
  }

  .login_btn{
    background-color: red;
    color: white;
    font-size: large;
    cursor: pointer;
  }

  .login_btn:hover{
    background-color: #ff4040;
  }

  .become_member_btn{
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
  }

`;

const Login = () => {
  return (
    <Container>
      <Navbar />
      <LoginContent>
        <div className="loginContainer">
          <div className="title">
            <h1>Login</h1>
            <p>Become a Member — don’t miss out on rewards, perks, invitation to events and contests.</p>
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

          <div className="cb_pass_info">
            <input className='check_box'
              type="checkbox"
            // checked={isChecked}
            // onChange={handleCheckboxChange}
            />

            <a href='#'>Forgot password</a>
          </div>

          <button className="input_tb login_btn">Login</button>
          <button className="input_tb become_member_btn">Become a member</button>
        </div>
      </LoginContent>
      <Footer />
    </Container>
  )
}

export default Login
