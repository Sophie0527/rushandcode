import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function MypageModal(props) {
  const { mypageOpen } = props;
  const navigate = useNavigate();
  return (
    <>
      {mypageOpen ? (
        <Container>
          <ul>
            <li>로그인</li>
            <li
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </li>
            <li>커뮤니티</li>
            <li>고객센터</li>
            <li>선물함</li>
          </ul>
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  display: flex;
  justify-content: right;
  ul {
    background-color: white;
    width: 13%;
    height: 200px;
    padding-top: 15px;
    margin-right: 150px;
    border-bottom: 1px solid #e6e6e6;
    box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.1);
    ${CustomMediaStyle.lessThan('desktop')`
    width: 15%;
    margin-right: 65px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    margin-right: 25px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    margin-right: 5px;
    height: 170px;
    `}
    li:hover {
      color: #ef7300;
    }
    li {
      color: black;
      display: flex;
      justify-content: center;
      padding: 10px;
      cursor: pointer;
      letter-spacing: 1px;
      ${CustomMediaStyle.lessThan('mobile')`
        font-size: 15px;
        padding: 8px;
      `}
    }
  }
`;

export default MypageModal;
