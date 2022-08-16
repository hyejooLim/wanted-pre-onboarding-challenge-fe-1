import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import Modal from './Modal';
import useInput from '../hooks/public/useInput';
import useCreateTodo from '../hooks/query/useCreateTodo';
import { AddButton } from '../styles/ts/Todo/TodoAdd';

const TodoAdd = () => {
  const createTodo = useCreateTodo();

  const [isOpen, setIsOpen] = useState(false);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [content, onChangeContent, setContent] = useInput('');

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

      createTodo.mutate({ title, content });
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
