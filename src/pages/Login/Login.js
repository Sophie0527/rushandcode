import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Login() {
  return (
    <Container>
      <Header>
        <h1>로그인</h1>
        <h3>
          <span>회원</span>
          <p>비회원</p>
        </h3>
      </Header>
      <ContentsBox>
        <div>아이디</div>
        <div>비번</div>
      </ContentsBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 125px;
`;
const Header = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  text-align: center;
  ${CustomMediaStyle.lessThan('mobile')`
  padding-top: 50px;
  `}
  h1 {
    font-size: 45px;
    font-weight: 700;
  }
  h3 {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;

    span {
      padding: 0 10px;
      color: #9e9e9e;
      letter-spacing: 1.5px;
    }
    p {
      padding: 0 10px;
      letter-spacing: 1.5px;
    }
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login;
