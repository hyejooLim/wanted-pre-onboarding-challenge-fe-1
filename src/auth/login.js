import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';

import useInput from '../hooks/useInput';

const FromWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    margin: 0;
    padding: 40px 100px;
    background: #fff;
    border-radius: 14px;
    text-align: center;
    box-shadow: 10px 8px 10px -2px rgba(0, 0, 0, 0.29);

    .input_form {
      margin-bottom: 20px;
    }
  }
`;

const StyledInput = styled(Input)`
  border: 0;
  outline: none;
  height: 40px;
  width: 260px;
  font-size: 16px;
  background-color: #eee;
`;

const StyledButton = styled(Button)`
  color: #fff;
  background-color: #13a085;
  width: 70px;
  height: 36px;
  font-size: 15px;
  margin: 20px 0;
  border-radius: 8px;
  transition: all 0.2s ease-in;
`;

const Login = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = async () => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        window.location.href = '/';
        return;
      }

      const result = await axios.post('http://localhost:8080/users/login', { email, password });

      if (result.data) {
        const { token, message } = result.data;
        window.localStorage.setItem('token', token);

        alert(message);
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FromWrapper>
      <Form className='form' onFinish={onSubmitForm}>
        <div className='input_form'>
          <StyledInput type='email' value={email} onChange={onChangeEmail} placeholder='email' required />
        </div>
        <div className='input_form'>
          <StyledInput type='password' value={password} onChange={onChangePassword} placeholder='password' required />
        </div>
        <StyledButton htmlType='submit'>로그인</StyledButton>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '20px -30px 0 -30px',
          }}
        >
          <span style={{ color: '#888' }}>아직 계정이 없으신가요?</span>
          <Link to='/signup'>
            <StyledButton style={{ margin: '0' }}>회원가입</StyledButton>
          </Link>
        </div>
      </Form>
    </FromWrapper>
  );
};

export default Login;
