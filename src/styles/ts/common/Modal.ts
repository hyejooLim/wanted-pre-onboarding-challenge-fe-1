import styled from 'styled-components';

export const ModalBackGround = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: rgb(0, 0, 0);
  opacity: 0.4;
`;

export const AddTodoModal = styled.div`
  background-color: #fff;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const InputWrapper = styled.div`
  .input_form {
    margin-bottom: 20px;

    & label {
      font-size: 20px;
      font-weight: 400;
    }

    .input {
      width: 300px;
      font-size: 16px;
      border: 2px dashed #aaa;
    }

    .title {
      height: 30px;
    }

    .content {
      height: 80px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;

  .btn {
    font-size: 15px;
    margin: 0 10px;
    color: #fff;
    background-color: #13a085;
    width: 54px;
    height: 32px;
    border-radius: 5px;
  }

  .cancel {
    background-color: #ff4545;
  }
`;
