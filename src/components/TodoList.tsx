import React from 'react';

import TodoItem from './TodoItem';
import useGetTodos from '../hooks/query/useGetTodos';
import { TodoListWrapper } from '../styles/ts/TodoList';
import { Todo } from '../types';

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
