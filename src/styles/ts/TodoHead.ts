import styled from 'styled-components';

export const TodoHeadWrapper = styled.div`
  text-align: center;
  border-bottom: 1px solid #ddd;

  & > span {
    display: inline-block;
    padding: 30px 0;
    font-size: 26px;
    font-weight: 600;
  }

  .logout_btn {
    font-size: 14px;
    float: right;
    background-color: #5c5c5c;
    color: #fff;
    width: 70px;
    height: 28px;
    border-radius: 5px;
    position: relative;
    top: 34px;
    right: 30px;
  }
`;
