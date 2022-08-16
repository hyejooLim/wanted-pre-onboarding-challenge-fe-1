import React, { useEffect } from 'react';
import styled from 'styled-components';

import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const TodoLayoutWrapper = styled.div`
  width: 375px;
  height: 570px;
  position: relative;
  margin: 0 auto;
  margin-top: 70px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
`;

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
