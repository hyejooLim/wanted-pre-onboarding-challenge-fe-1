import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';

import useInput from '../hooks/useInput';
import Modal from './Modal';
import updateTodo from '../api/updateTodo';
import deleteTodo from '../api/deleteTodo';
import { UPDATE, DELETE, useTodosDispatch } from '../TodoContext';

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  font-size: 16px;
  padding: 10px 30px;

  &:hover {
    background-color: #eee;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #888;
`;

const ButtonWrapper = styled.div`
  .btn {
    background-color: #13a085;
    color: #fff;
    width: 38px;
    height: 24px;
    border-radius: 3px;
    font-size: 12px;
  }

  .modify {
    margin-right: 4px;
  }

  .delete {
    background-color: #ff4545;
  }
`;

interface TodoItemProps {
  id: string;
  title: string;
  content: string;
}

const TodoItem: FC<TodoItemProps> = ({ id, title, content }) => {
  const [isOpen, setisOpen] = useState(false);
  const [newTitle, onChangeNewTitle, setNewTitle] = useInput(title);
  const [newContent, onChangeNewContent, setNewContent] = useInput(content);

  const dispatch = useTodosDispatch();

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

      const result = await updateTodo({ id, title: newTitle, content: newContent });

      if (result) {
        dispatch({ type: UPDATE, id, title: newTitle, content: newContent });
      }

      setisOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const onDeleteTodo = async () => {
    try {
      const result = await deleteTodo({ id });

      if (result) {
        dispatch({ type: DELETE, id });
      }
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
