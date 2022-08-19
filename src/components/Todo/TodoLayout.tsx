import React, { useEffect } from 'react';

import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import TodoDetail from './TodoDetail';
import { Container, TodoListWrapper, TodoDetailWrapper } from '../../styles/ts/Todo/TodoLayout';

const TodoLayout = () => {
  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (!token) {
      alert('로그인이 필요합니다.');
      window.location.href = '/login';
      return;
    }
  }, []);

  return (
    <Container>
      <TodoListWrapper>
        <TodoHead />
        <TodoList />
        <TodoAdd />
      </TodoListWrapper>
      <TodoDetailWrapper>
        <TodoDetail />
      </TodoDetailWrapper>
    </Container>
  );
};

export default TodoLayout;
