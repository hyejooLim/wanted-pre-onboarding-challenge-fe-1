import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
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
    padding: 60px 100px;
    background: #fff;
    border-radius: 14px;
    box-shadow: 10px 8px 10px -2px rgba(0, 0, 0, 0.29);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input_form {
      margin-bottom: 20px;

      label {
        font-size: 14px;
      }
    }

    .signup_btn.disabled {
      background-color: #ddd;
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
  width: 78px;
  height: 40px;
  font-size: 15px;
  margin-top: 20px;
  border-radius: 8px;
`;

const Signup = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const active = checkInputFormat();

    if (active) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password, passwordCheck]);

  const checkInputFormat = () => {
    if (
      !email ||
      !email.trim() ||
      !password ||
      !email.includes('@') ||
      !email.includes('.') ||
      password.length < 8 ||
      password !== passwordCheck
    ) {
      return false;
    }

    return true;
  };

  const onSubmitForm = async () => {
    try {
      const result = await axios.post('http://localhost:8080/users/create', { email, password });

      if (result.statusText === 'OK') {
        alert('회원가입이 완료되었습니다.');
        window.location.href = '/login';
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FromWrapper>
      <Form className='form' onFinish={onSubmitForm}>
        <div className='input_form'>
          <label htmlFor='user-email'>이메일</label>
          <br />
          <StyledInput type='email' value={email} onChange={onChangeEmail} placeholder='email' required />
        </div>
        <div className='input_form'>
          <label htmlFor='user-password'>비밀번호</label>
          <br />
          <StyledInput type='password' value={password} onChange={onChangePassword} placeholder='password' required />
        </div>
        <div className='input_form'>
          <label htmlFor='user-password-check'>비밀번호 확인</label>
          <br />
          <StyledInput
            type='password'
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            placeholder='password'
            required
          />
        </div>
        <StyledButton htmlType='submit' className={classnames('signup_btn', { disabled })} disabled={disabled}>
          회원가입
        </StyledButton>
      </Form>
    </FromWrapper>
  );
};

export default Signup;
