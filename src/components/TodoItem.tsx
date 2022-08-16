import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import Modal from './Modal';
import useInput from '../hooks/public/useInput';
import useUpdateTodo from '../hooks/query/useUpdateTodo';
import useDeleteTodo from '../hooks/query/useDeleteTodo';
import { TodoItemWrapper, Title, Content, ButtonWrapper } from '../styles/ts/TodoItem';

interface TodoItemProps {
  id: string;
  title: string;
  content: string;
}

const TodoItem: FC<TodoItemProps> = ({ id, title, content }) => {
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();

  const [isOpen, setisOpen] = useState(false);
  const [newTitle, onChangeNewTitle, setNewTitle] = useInput(title);
  const [newContent, onChangeNewContent, setNewContent] = useInput(content);

  const onClickModifyBtn = () => {
    setisOpen(true);
  };

  const onCancel = () => {
    setisOpen(false);
    setNewTitle(title);
    setNewContent(content);
  };

  const onUpdateTodo = async () => {
    try {
      if (title === newTitle && content === newContent) {
        alert('수정 사항이 없습니다.');
        return;
      }

      updateTodo.mutate({ id, title: newTitle, content: newContent });
      setisOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const onDeleteTodo = async () => {
    try {
      deleteTodo.mutate({ id });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <TodoItemWrapper>
        <Link key={id} to={`/todos/${id}`} style={{ textDecoration: 'none' }}>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </Link>
        <ButtonWrapper>
          <Button className='modify btn' onClick={onClickModifyBtn}>
            수정
          </Button>
          <Button className='delete btn' onClick={onDeleteTodo}>
            삭제
          </Button>
        </ButtonWrapper>
      </TodoItemWrapper>
      <Modal
        isOpen={isOpen}
        mode='EDIT'
        title={newTitle}
        onChangeTitle={onChangeNewTitle}
        content={newContent}
        onChangeContent={onChangeNewContent}
        onUpdateTodo={onUpdateTodo}
        onCancel={onCancel}
      ></Modal>
    </>
  );
};

export default TodoItem;
