import React from 'react';
import styled from 'styled-components';
import Contents from '../../components/Signup/Contents';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Signup() {
  return (
    <Container>
      <Header>
        <h1>JOIN US</h1>
        <h3>
          <span>약관동의</span>
          <span>&gt;</span>
          <p>정보입력</p>
          <span>&gt;</span>
          <span>가입완료</span>
        </h3>
      </Header>
      <ContentsBox>
        <ContentsHeader>
          <span>기본정보</span>
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZjYzNDciPjxwYXRoIGQ9Ik0yMS41LDIxLjV2MTI5aDEyOXYtNy4xNjY2N3YtMTIxLjgzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              alt="필수입력"
            />
            <p>표시는 반드시 입력해야하는 항목입니다.</p>
          </div>
        </ContentsHeader>
        <Contents />
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

const ContentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 30px;
  border-bottom: 1.5px solid black;
  padding: 0 5px;
  span {
    font-size: 23px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  div {
    display: flex;
    align-items: center;
    img {
      width: 10px;
      padding-right: 5px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export default Signup;
