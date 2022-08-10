import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';
import { Button } from 'antd';

import Modal from './Modal';
import useInput from '../hooks/useInput';
import { CREATE, useTodosDispatch } from '../TodoContext';
import createTodo from '../api/createTodo';

const AddButton = styled(Button)`
  width: 62px;
  height: 62px;
  font-size: 42px;
  background-color: #13a085;
  color: #fff;
  border-radius: 50%;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const TodoAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [content, onChangeContent, setContent] = useInput('');

  const dispatch = useTodosDispatch();

  const initalizeState = () => {
    setIsOpen(false);
    setTitle('');
    setContent('');
  };

  const onClickAddBtn = () => {
    setIsOpen(true);
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

      const result = await createTodo({ title, content });

      if (result) {
        const { id, title, content } = result.data;
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
        isOpen={isOpen}
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
