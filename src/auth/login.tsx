import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';

import useInput from '../hooks/public/useInput';
import login from '../api/login';
import { FormWrapper, StyledInput, StyledButton } from '../styles/ts/login';

const Login = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = async () => {
    try {
      const token = window.localStorage.getItem('token');
      if (token) {
        alert('이미 로그인했습니다.');
        window.location.href = '/';
        return;
      }

      const result = await login({ email, password });

      if (result) {
        const { token, message } = result;
        window.localStorage.setItem('token', token);

        alert(message);
        window.location.href = '/';
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default Login;
