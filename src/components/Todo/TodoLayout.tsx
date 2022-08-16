import React, { useEffect } from 'react';

import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { TodoLayoutWrapper } from '../../styles/ts/Todo/TodoLayout';

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
    <TodoLayoutWrapper>
      <TodoHead />
      <TodoList />
      <TodoAdd />
    </TodoLayoutWrapper>
  );
};

export default TodoLayout;
