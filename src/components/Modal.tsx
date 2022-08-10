import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';

import { Mode } from '../types';

const ModalBackGround = styled.div`
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

const AddTodoModal = styled.div`
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

const InputWrapper = styled.div`
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

const ButtonWrapper = styled.div`
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

interface ModalProps {
  isOpen: boolean;
  mode: Mode;
  title: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  content: string;
  onChangeContent: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onAddTodo?: () => void;
  onUpdateTodo?: () => void;
  onCancel: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  mode,
  title,
  onChangeTitle,
  content,
  onChangeContent,
  onAddTodo,
  onUpdateTodo,
  onCancel,
}) => {
  return (
    <>
      {isOpen && (
        <>
          <AddTodoModal>
            <InputWrapper>
              <div className='title input_form'>
                <label>Title</label>
                <br />
                <Input
                  className='title input'
                  placeholder='제목을 입력하세요.'
                  value={title}
                  onChange={onChangeTitle}
                  autoFocus
                />
              </div>
              <div className='content input_form'>
                <label>Content</label>
                <br />
                <Input
                  className='content input'
                  placeholder='내용을 입력하세요.'
                  value={content}
                  onChange={onChangeContent}
                />
              </div>
            </InputWrapper>
            <ButtonWrapper>
              {mode === 'ADD' ? (
                <Button className='add btn' onClick={onAddTodo}>
                  추가
                </Button>
              ) : (
                <Button className='update btn' onClick={onUpdateTodo}>
                  수정
                </Button>
              )}
              <Button className='cancel btn' onClick={onCancel}>
                취소
              </Button>
            </ButtonWrapper>
          </AddTodoModal>
          <ModalBackGround></ModalBackGround>
        </>
      )}
    </>
  );
};

export default Modal;