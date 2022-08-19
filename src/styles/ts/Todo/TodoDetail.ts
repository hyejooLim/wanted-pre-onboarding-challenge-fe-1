import styled from 'styled-components';

export const TodoDetailHead = styled.div`
  text-align: center;
  border-bottom: 1px solid #ddd;

  & > span {
    display: inline-block;
    padding: 30px 0;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const TodoDetailBody = styled.div`
  padding: 40px 30px;
  height: 478px;

  & > * {
    margin-bottom: 20px;
  }

  .label {
    font-size: 18px;
    font-weight: 500;
  }

  .value {
    color: #333;
  }
`;

export const Title = styled.div``;

export const Content = styled.div`
  margin-top: 40px;

  .value {
    height: 160px;
    overflow-y: scroll;
  }
`;

export const CreatedAt = styled.div`
  .createdAt {
    font-size: 14px;
  }

  margin-top: 60px;
`;

export const UpdatedAt = styled.div`
  .updatedAt {
    font-size: 14px;
  }
`;

export const EmptyBox = styled.div`
  height: 478px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
