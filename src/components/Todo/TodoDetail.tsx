import React from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import useGetTodoById from '../../hooks/query/useGetTodoById';
import {
  TodoDetailHead,
  TodoDetailBody,
  Title,
  Content,
  CreatedAt,
  UpdatedAt,
  EmptyBox,
} from '../../styles/ts/Todo/TodoDetail';

const TodoDetail = () => {
  const { id } = useParams();

  const { data: todo } = useGetTodoById(id!);

  return (
    <>
      <TodoDetailHead>
        <span>Todo Detail</span>
      </TodoDetailHead>
      {todo ? (
        <TodoDetailBody>
          <Title>
            <div className='title label'>제목</div>
            <div className='title value'>{todo.title}</div>
          </Title>
          <Content>
            <div className='content label'>내용</div>
            <div className='content value'>{todo.content}</div>
          </Content>
          <CreatedAt>
            <div className='createdAt label'>생성 날짜</div>
            <div className='createdAt value'> {dayjs(todo.createdAt).format('YYYY-MM-DD hh:mm')}</div>
          </CreatedAt>
          <UpdatedAt>
            <div className='updatedAt label'>수정 날짜</div>
            <div className='updatedAt value'>{dayjs(todo.updatedAt).format('YYYY-MM-DD hh:mm')}</div>
          </UpdatedAt>
        </TodoDetailBody>
      ) : (
        <EmptyBox>Todo를 눌러주세요!</EmptyBox>
      )}
    </>
  );
};

export default TodoDetail;
