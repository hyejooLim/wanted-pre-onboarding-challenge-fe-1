import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import TodoItem from './TodoItem';
import { TodosContext } from '../TodoContext';

const TodoListWrapper = styled.div`
  flex: 1;
  margin-top: 20px;
  overflow-y: auto;
`;

const TodoList = () => {
  const { state } = useContext(TodosContext);

  return (
    <TodoListWrapper>
      {state?.map((todo) => (
        <Link key={todo.id} to={`/todos/${todo.id}`}>
          <TodoItem id={todo.id} title={todo.title} content={todo.content} />
        </Link>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
