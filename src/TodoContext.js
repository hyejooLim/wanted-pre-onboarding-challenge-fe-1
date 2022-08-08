import React, { useReducer, createContext, useMemo } from 'react';

export const TodosContext = createContext({
  todos: {},
  dispatch: () => {},
});

export const INIT = 'INIT';
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

const todosReducer = (state, action) => {
  switch (action.type) {
    case INIT:
      return (state = action.data);
    case CREATE:
      return state.concat({
        id: action.id,
        title: action.title,
        content: action.content,
      });
    case UPDATE:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, title: action.title, content: action.content } : todo
      );
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error('not invalid');
  }
};

const initialTodos = [];

const TodoContext = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  const value = useMemo(() => ({ todos, dispatch }), [todos]);

  return (
    <>
      <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
    </>
  );
};

export default TodoContext;
