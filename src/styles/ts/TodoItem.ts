import styled from 'styled-components';

export const TodoItemWrapper = styled.div`
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

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;

export const Content = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #888;
`;

export const ButtonWrapper = styled.div`
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
