import React, { useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styled from 'styled-components';

import { DELETE, TodosContext } from '../TodoContext';

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  font-size: 16px;
  padding: 10px 30px;

  &:hover {
    background-color: #eee;
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

const Content = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #888;
`;

const ButtonWrapper = styled.div`
  .btn {
    background-color: #13a085;
    color: #fff;
    width: 38px;
    height: 24px;
    border-radius: 3px;
    font-size: 12px;
  }

  .modify {
    margin-right: 4px;
  }

  .delete {
    background-color: #ff4545;
  }
`;

const TodoItem = ({ id, title, content }) => {
  const { dispatch } = useContext(TodosContext);

  const onDeleteTodo = async (e) => {
    e.preventDefault();

    try {
      const token = window.localStorage.getItem('token');

      const result = await axios.delete(`http://localhost:8080/todos/${id}`, { headers: { authorization: token } });

      if (result.data) {
        dispatch({ type: DELETE, id });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <TodoItemWrapper>
      <div>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </div>
      <ButtonWrapper>
        <Button className='modify btn'>수정</Button>
        <Button className='delete btn' onClick={onDeleteTodo}>
          삭제
        </Button>
      </ButtonWrapper>
    </TodoItemWrapper>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TodoItem;
