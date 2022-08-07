import React, { useContext, useState } from 'react';
import axios from 'axios';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import { Input, Button } from 'antd';

import useInput from '../hooks/useInput';
import { TodosContext, CREATE } from '../TodoContext';

const AddButton = styled(Button)`
  width: 62px;
  height: 62px;
  font-size: 42px;
  background-color: #999;
  color: #fff;
  border-radius: 50%;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 40px;
`;

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

const TodoAdd = () => {
  const [open, setOpen] = useState(false);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [content, onChangeContent, setContent] = useInput('');

  const { dispatch } = useContext(TodosContext);

  const initalizeState = () => {
    setOpen(false);
    setTitle('');
    setContent('');
  };

  const onClickAddBtn = () => {
    setOpen(true);
  };

  const onCancelAddTodo = () => {
    initalizeState();
  };

  const onAddTodo = async () => {
    try {
      if (!title && !content) {
        alert('할 일을 입력해주세요.');
        return;
      }

      const token = window.localStorage.getItem('token');

      const result = await axios.post(
        'http://localhost:8080/todos',
        { title, content },
        { headers: { authorization: token } }
      );

      if (result.data) {
        const { id, title, content } = result.data.data;
        dispatch({ type: CREATE, id, title, content });
      }

      initalizeState();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AddButton onClick={onClickAddBtn}>
        <MdAdd />
      </AddButton>
      {open && (
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
              <Button className='add btn' onClick={onAddTodo}>
                추가
              </Button>
              <Button className='cancel btn' onClick={onCancelAddTodo}>
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

export default TodoAdd;
