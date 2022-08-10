import React, { ReactNode, useReducer, createContext, Dispatch } from 'react';
import { useContext } from 'react';
import { Todo } from './types';

export const INIT = 'INIT';
export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

type Action =
  | { type: 'INIT'; data: Todo[] }
  | { type: 'CREATE'; id: string; title: string; content: string }
  | { type: 'UPDATE'; id: string; title: string; content: string }
  | { type: 'DELETE'; id: string };

const TodosStateContext = createContext<Todo[] | null>(null);
const TodosDispatchContext = createContext<Dispatch<Action> | null>(null);

const todosReducer = (state: Todo[], action: Action) => {
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

const initialTodos: Todo[] = [];

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <TodosStateContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>{children}</TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
};

export function useTodosState() {
  const state = useContext(TodosStateContext);
  if (!state) {
    throw new Error('Cannot find TodoProvider.');
  }

  return state;
}

export function useTodosDispatch() {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find TodoProvider.');
  }

  return dispatch;
}
