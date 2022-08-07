import React, { useContext, useState } from 'react';
import axios from 'axios';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import { Button } from 'antd';

import Modal from './Modal';
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
  margin: 20px auto;
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

  const onCancel = () => {
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
      <Modal
        open={open}
        mode='ADD'
        title={title}
        onChangeTitle={onChangeTitle}
        content={content}
        onChangeContent={onChangeContent}
        onAddTodo={onAddTodo}
        onCancel={onCancel}
      />
    </>
  );
};

export default TodoAdd;
