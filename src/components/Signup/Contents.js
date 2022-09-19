import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Unnecessary from './Unnecessary';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';
import css from './Contents.module.scss';

const EssentialImg =
  'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZjYzNDciPjxwYXRoIGQ9Ik0yMS41LDIxLjV2MTI5aDEyOXYtNy4xNjY2N3YtMTIxLjgzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+';

function Contents() {
  // 회원가입 성공시 알럿창 띄우고 이동
  const navigate = useNavigate();
  const success = () => {
    alert('회원가입을 축하드립니다.');
    navigate('/');
  };

  const [signupValue, setSignupValue] = useState({
    id: '',
    pw: '',
    checkPw: '',
    name: '',
  });
  const { id, pw, checkPw, name } = signupValue;

  // Id: 영어나 숫자로만 가능한 정규식
  const regEmail = /^[a-z|A-Z|0-9|]+$/;

  // pw: 정규식
  const num = /[0-9]/g; // 입력한 pw에 숫자가 포함되어 있으면 0이상 숫자 전달됨.
  const eng = /[a-z]/gi; // 입력한 pw에 영문이 포함되어 있으면 0이상 숫자 전달됨.
  const spe = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi; // 입력한 pw에 특수문가거 포함되어 있으면 0이상 숫자 전달됨.

  // 안전한 비밀번호인지 확인
  // 영문 + 특수문자 또는 영문 + 특수문자 +숫자 가 들어가면 isSafe
  const isSafe =
    (eng.test(pw) && spe.test(pw)) ||
    (eng.test(pw) && spe.test(pw) && num.test(pw));

  const [invalidId, setInvalidId] = useState(false);
  const [invalidPw, setInvalidPw] = useState(false);
  const [invalidCheckPw, setInvalidCheckPw] = useState(false);
  const [invalidName, setInvalidName] = useState(false);

  const validation = (id, pw, checkPw, name) => {
    if (
      regEmail.test(id) &&
      id?.length >= 4 &&
      isSafe === true &&
      pw === checkPw &&
      name?.length > 1
    ) {
      return true;
    }
    return false;
  };

  const valid = validation(id, pw, checkPw, name);

  const IdBox = useRef();
  const PwBox = useRef();
  const CheckPwBox = useRef();
  const NameBox = useRef();

  return (
    <>
      <Container>
        {/*  =============  id  =============  */}
        <InfoBox>
          <ImgBox>
            <img src={EssentialImg} alt="필수입력" />
          </ImgBox>
          <SpanBox>
            <span>아이디</span>
          </SpanBox>
          <InputBox
            ref={IdBox}
            className={
              (regEmail.test(id) && id?.length >= 4) || id?.length === 0
                ? 'blackBox'
                : 'redBox'
            }
          >
            <input
              type="text"
              value={id}
              onChange={(e) => {
                setInvalidId(false);
                setSignupValue({ ...signupValue, id: e.target.value });
              }}
            ></input>
          </InputBox>
        </InfoBox>
        {/*  =============  id - valid  =============  */}
        <ValidBox>
          {invalidId && <BlackText>필수항목입니다.</BlackText>}
          {id?.length > 0 && id?.length < 4 && (
            <BlackText>최소 4 이상 입력해주세요.</BlackText>
          )}
          {id?.length > 0 && id?.length > 3 && !regEmail.test(id) && (
            <BlackText>영어와 숫자로만 입력해주세요.</BlackText>
          )}
          {id?.length >= 4 && regEmail.test(id) && (
            <GreenText>사용가능한 아이디입니다.</GreenText>
          )}
        </ValidBox>

        {/*  ============= pw =============   */}
        <InfoBox>
          <ImgBox>
            <img src={EssentialImg} alt="필수입력" />
          </ImgBox>
          <SpanBox>
            <span>비밀번호</span>
          </SpanBox>
          <InputBox
            ref={PwBox}
            className={
              (isSafe === true && pw?.length >= 7) || pw?.length === 0
                ? 'blackBox'
                : 'redBox'
            }
          >
            <input
              type="password"
              value={pw}
              onChange={(e) => {
                setInvalidPw(false);
                setSignupValue({ ...signupValue, pw: e.target.value });
              }}
            ></input>
          </InputBox>
        </InfoBox>
        {/* ============= pw - valid =============  */}
        <ValidBox>
          {invalidPw && <BlackText>필수항목입니다.</BlackText>}
          {pw?.length > 0 && pw?.length < 7 && (
            <BlackText>최소 7 이상 입력해주세요.</BlackText>
          )}
          {pw?.length > 6 && isSafe !== true && (
            <BlackText>
              사용불가! 영문대/소문자, 숫자, 특수문자 중 2가지 이상 조합하세요.
            </BlackText>
          )}
          {pw?.length > 6 && isSafe === true && (
            <GreenText>안전한 비밀번호 입니다.</GreenText>
          )}
        </ValidBox>

        {/* ============= pwcheck ============= */}
        <InfoBox>
          <ImgBox>
            <img src={EssentialImg} alt="필수입력" />
          </ImgBox>
          <SpanBox>
            <span>비밀번호 확인</span>
          </SpanBox>
          <InputBox
            ref={CheckPwBox}
            className={
              checkPw?.length === 0 || pw === checkPw ? 'blackBox' : 'redBox'
            }
          >
            <input
              type="password"
              value={checkPw}
              onChange={(e) => {
                setInvalidCheckPw(false);
                setSignupValue({
                  ...signupValue,
                  checkPw: e.target.value,
                });
              }}
            ></input>
          </InputBox>
        </InfoBox>
        {/* ============= pwcheck - valid ============= */}
        <ValidBox>
          {invalidCheckPw && <BlackText>필수항목입니다.</BlackText>}
          {checkPw?.length > 0 && pw !== checkPw && (
            <BlackText>비밀번호가 다릅니다.</BlackText>
          )}
          {pw === checkPw && <NoneText />}
        </ValidBox>

        {/* ============= name ============= */}
        <InfoBox>
          <ImgBox>
            <img src={EssentialImg} alt="필수입력" />
          </ImgBox>
          <SpanBox>
            <span>이름</span>
          </SpanBox>
          <InputBox
            ref={NameBox}
            className={
              name?.length === 0 || name?.length > 1 ? 'blackBox' : 'redBox'
            }
          >
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setInvalidName(false);
                setSignupValue({ ...signupValue, name: e.target.value });
              }}
            ></input>
          </InputBox>
        </InfoBox>
        {/* ============= name - valid ============= */}
        <ValidBox>
          {invalidName && <BlackText>필수항목입니다.</BlackText>}
          {name?.length >= 1 && <NoneText />}
        </ValidBox>
        <Unnecessary />
      </Container>
      <ContentsFooter>
        <button
          onClick={() => {
            if (valid) {
              success();
            }
            if (id.length < 1) {
              setInvalidId(true);
              IdBox.current.className = css.redBox;
            }
            if (pw.length < 1) {
              setInvalidPw(true);
              PwBox.current.className = css.redBox;
            }
            if (checkPw.length < 1) {
              setInvalidCheckPw(true);
              CheckPwBox.current.className = css.redBox;
            }
            if (name.length < 1) {
              setInvalidName(true);
              NameBox.current.className = css.redBox;
            }
          }}
        >
          회원가입
        </button>
      </ContentsFooter>
    </>
  );
}

const Container = styled.div`
  width: 80%;
  padding: 30px 0;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 12px 0;
  span {
    padding: 0 10px;
    letter-spacing: 1px;
  }
`;

const ImgBox = styled.div`
  width: 10px;
`;

const SpanBox = styled.div`
  width: 150px;
  ${CustomMediaStyle.lessThan('mobile')`
  width: 120px;
  `}
  span {
    padding: 0 10px;
    letter-spacing: 0.5px;
    font-weight: 500;
  }
`;

const InputBox = styled.div`
  border: 1px solid black;
  border-radius: 1px;
  width: 380px;
  height: 40px;
  margin-right: 5px;
  &.redBox {
    border: 2px solid tomato;
  }
  &.blackBox {
    border: 1px solid black;
  }
  ${CustomMediaStyle.lessThan('mobile')`
  width: 300px;
  `}
  input {
    padding: 0 10px;
    border: none;
    width: 350px;
    height: 40px;
    outline: none;
    font-size: 15px;
    letter-spacing: 0.5px;
    ::placeholder {
      letter-spacing: 1px;
    }
    ${CustomMediaStyle.lessThan('mobile')`
    width: 280px;
    `}
  }
`;

const ContentsFooter = styled.div`
  width: 80%;
  height: 30px;
  border-top: 1.5px solid black;
  margin: 20px 0 100px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  height: 100%;
  button {
    color: white;
    background-color: black;
    border: none;
    height: 50px;
    width: 300px;
    font-size: 17px;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

const ValidBox = styled.div`
  padding: 0 160px;
  font-size: 15px;
  ${CustomMediaStyle.lessThan('mobile')`
  padding: 0 130px;
  `}
`;

const BlackText = styled.span`
  letter-spacing: 0.5px;
`;

const GreenText = styled.span`
  color: green;
  letter-spacing: 0.5px;
`;

const NoneText = styled.span`
  display: none;
`;

export default Contents;
