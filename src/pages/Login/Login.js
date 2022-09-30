import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Login() {
  // <(id, pw): 입력값 변화 받아오서 바꿔줄 수 있는 useState!>
  const [loginValue, setLoginValue] = useState({
    id: '',
    pw: '',
  });
  const { id, pw } = loginValue;

  // <id: 영어나 숫자로만 가능한 정규식>
  const eng_or_num = /^[a-z|A-Z|0-9|]+$/;

  // <pw: 정규식>
  const num = /[0-9]/g; // 입력한 pw에 숫자가 포함되어 있으면 0이상 숫자 전달됨.
  const eng = /[a-z]/gi; // 입력한 pw에 영문이 포함되어 있으면 0이상 숫자 전달됨.
  const spe = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi; // 입력한 pw에 특수문가거 포함되어 있으면 0이상 숫자 전달됨.
  // 안전한 비밀번호인지 확인
  // 영문 + 특수문자 또는 영문 + 특수문자 +숫자 가 들어가면 isSafe
  const isSafe =
    (eng.test(pw) && spe.test(pw)) ||
    (eng.test(pw) && spe.test(pw) && num.test(pw));

  // <로그인 버튼 클릭 시, 아래의 validation 조건에 맞다면 스타일을 active로 바꾸고, gotohome()가 되도록 함.>
  const validation = (id, pw) => {
    if (eng_or_num.test(id) && id?.length >= 4 && isSafe === true) {
      return true;
    }
    return false;
  };
  const valid = validation(id, pw);

  // <로그인 성공 시 이동>
  const navigate = useNavigate();
  const gotohome = () => {
    navigate('/');
  };

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
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => {
              setLoginValue({ ...loginValue, id: e.target.value });
            }}
          ></input>
        </InputBox>
        <InputBox>
          <img
            src="https://img.icons8.com/material-rounded/344/lock--v1.png"
            alt="pw"
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={pw}
            onChange={(e) => {
              setLoginValue({ ...loginValue, pw: e.target.value });
            }}
          ></input>
        </InputBox>
      </ContentsBox>
      <SaveId>
        <div>
          <input type="checkbox"></input>
          <span>아이디 저장</span>
        </div>
      </SaveId>
      <LoginBox>
        <button
          className={valid ? 'active' : 'inactive'}
          disabled={!valid}
          onClick={() => {
            if (valid) {
              gotohome();
            }
          }}
        >
          로그인
        </button>
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
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: #9e9e9e;
    border: none;
    border-radius: 2px;
    &.active {
      color: white;
      background-color: black;
      cursor: pointer;
    }
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
