import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  const navigate = useNavigate();
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
        <InputBox>
          <img
            src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/344/external-user-user-tanah-basah-glyph-tanah-basah-7.png"
            alt="id"
          />
          <input type="text" placeholder="아이디"></input>
        </InputBox>
        <InputBox>
          <img
            src="https://img.icons8.com/material-rounded/344/lock--v1.png"
            alt="pw"
          />
          <input type="password" placeholder="비밀번호"></input>
        </InputBox>
      </ContentsBox>
      <SaveId>
        <div>
          <input type="checkbox"></input>
          <span>아이디 저장</span>
        </div>
      </SaveId>
      <LoginBox>
        <button>로그인</button>
      </LoginBox>
      <SignupBox>
        <span
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </span>
        <p>|</p>
        <span>아이디 찾기</span>
        <p>|</p>
        <span>비밀번호 찾기</span>
      </SignupBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 140px;
`;
const Header = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  h1 {
    font-size: 45px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  h3 {
    padding: 60px 0;
    font-size: 18px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    span {
      letter-spacing: 1.5px;
      padding: 0 80px;
      cursor: pointer;
    }
    p {
      color: #9e9e9e;
      letter-spacing: 1.5px;
      padding: 0 80px;
      cursor: pointer;
    }
  }
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputBox = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin: 5px 0;
  img {
    width: 22px;
    padding-left: 10px;
  }
  input {
    text-align: center;
    border: none;
    width: 400px;
    height: 45px;
    outline: none;
    margin-right: 30px;
    font-size: 15px;
    letter-spacing: 1px;
    ::placeholder {
      text-align: center;
      letter-spacing: 1px;
    }
  }
`;

const SaveId = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 470px;
    padding: 15px 0;
    display: flex;
    align-items: center;
    input {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
    span {
      font-size: 15px;
      padding-left: 5px;
    }
  }
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  button {
    width: 470px;
    height: 50px;
    color: white;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: black;
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
`;

const SignupBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 160px;
  font-weight: 500;
  color: #9e9e9e;
  span:hover {
    color: black;
  }
  span {
    padding: 0 40px;
    cursor: pointer;
  }
`;

export default Login;
