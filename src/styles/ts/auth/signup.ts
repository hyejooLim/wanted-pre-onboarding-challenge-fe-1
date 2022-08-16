import styled from 'styled-components';
import { Input, Button } from 'antd';

export const FormWrapper = styled.div`
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

export const StyledInput = styled(Input)`
  border: 0;
  outline: none;
  height: 40px;
  width: 260px;
  font-size: 16px;
  background-color: #eee;
`;

export const StyledButton = styled(Button)`
  color: #fff;
  background-color: #13a085;
  width: 78px;
  height: 40px;
  font-size: 15px;
  margin-top: 20px;
  border-radius: 8px;
`;
