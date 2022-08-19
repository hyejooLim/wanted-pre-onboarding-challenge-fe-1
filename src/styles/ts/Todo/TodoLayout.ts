import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoListWrapper = styled.div`
  width: 375px;
  height: 570px;
  margin-right: 30px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;
`;

export const TodoDetailWrapper = styled.div`
  width: 375px;
  height: 570px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24);
`;
