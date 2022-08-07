import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const token = window.localStorage.getItem('token');

      const result = await axios.get('http://localhost:8080/todos', {
        headers: { authorization: token },
      });
      console.log(result);

      setTodos(result.data.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <TodoLayoutWrapper>
      <TodoHead />
      <TodoList todos={todos} />
      <TodoAdd />
    </TodoLayoutWrapper>
  );
};

export default TodoLayout;
