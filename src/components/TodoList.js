import React, { useContext } from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import { TodosContext } from '../TodoContext';

const TodoListWrapper = styled.div`
  flex: 1;
  margin-top: 20px;
  overflow-y: auto;
`;

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <TodoListWrapper>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
