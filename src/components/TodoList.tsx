import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import useGetTodos from '../hooks/query/useGetTodos';
import { Todo } from '../types';

const TodoListWrapper = styled.div`
  flex: 1;
  margin-top: 20px;
  overflow-y: auto;
`;

const TodoList = () => {
  const { data } = useGetTodos();

  return (
    <TodoListWrapper>
      {data?.data.map((todo: Todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
