import React from 'react';
import { Button } from 'antd';

import { TodoHeadWrapper } from '../styles/ts/Todo/TodoHead';

const TodoHead = () => {
  const onLogout = () => {
    window.localStorage.removeItem('token');

    const token = window.localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }
  };

  return (
    <TodoHeadWrapper>
      <span>Todo App</span>
      <Button className='logout_btn' onClick={onLogout}>
        로그아웃
      </Button>
    </TodoHeadWrapper>
  );
};

export default TodoHead;
