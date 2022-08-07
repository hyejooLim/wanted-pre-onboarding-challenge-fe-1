import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  flex: 1;
  margin-top: 20px;
  overflow-y: auto;
`;

const TodoList = ({ todos }) => {
  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <Link key={todo.id} to={`/todos/${todo.id}`}>
          <TodoItem id={todo.id} title={todo.title} content={todo.content} />
        </Link>
      ))}
    </TodoListWrapper>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
