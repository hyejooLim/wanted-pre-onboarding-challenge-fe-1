import React from 'react';
import styled from 'styled-components';

const TodoHeadWrapper = styled.div`
  text-align: center;
  border-bottom: 1px solid #ddd;

  & span {
    display: inline-block;
    padding: 30px 0;
    font-size: 26px;
    font-weight: 600;
  }
`;

const TodoHead = () => {
  return (
    <TodoHeadWrapper>
      <span>Todo App</span>
    </TodoHeadWrapper>
  );
};

export default TodoHead;
