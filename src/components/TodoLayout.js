import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { INIT, TodosContext } from '../TodoContext';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { getTodos } from '../api/getTodos';

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
  const { dispatch } = useContext(TodosContext);

  useEffect(() => {
    handleGetTodos();
  }, []);

  const handleGetTodos = async () => {
    try {
      const result = await getTodos();

      if (result) {
        dispatch({ type: INIT, data: result.data });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <TodoLayoutWrapper>
      <TodoHead />
      <TodoList />
      <TodoAdd />
    </TodoLayoutWrapper>
  );
};

export default TodoLayout;
