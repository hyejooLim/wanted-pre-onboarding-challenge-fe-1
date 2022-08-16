import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Form } from 'antd';

import useInput from '../hooks/public/useInput';
import signup from '../api/signup';
import { FormWrapper, StyledInput, StyledButton } from '../styles/ts/signup';

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
      const result = await signup({ email, password });

      if (result.statusText === 'OK') {
        alert('회원가입이 완료되었습니다.');
        window.location.href = '/login';
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default Signup;
