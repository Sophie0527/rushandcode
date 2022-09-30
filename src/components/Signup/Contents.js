import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Unnecessary from './DetailContents/Unnecessary';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';
import css from './Contents.module.scss';

function Contents(props) {
  const { EssentialImg } = props;

  // <(id, pw, checkPw, name): 입력값 변화 받아오서 바꿔줄 수 있는 useState!>
  const [signupValue, setSignupValue] = useState({
    id: '',
    pw: '',
    checkPw: '',
    name: '',
  });
  const { id, pw, checkPw, name } = signupValue;

  // <Id: 영어나 숫자로만 가능한 정규식>
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

  // <회원가입 클릭 시, 아래의 validation 조건에 맞다면 success()가 되도록 함.>
  const validation = (id, pw, checkPw, name) => {
    if (
      eng_or_num.test(id) &&
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

  // <회원가입 성공시 알럿창 띄우고 이동>
  const navigate = useNavigate();
  const success = () => {
    alert('회원가입을 축하드립니다.');
    navigate('/login');
  };

  // <회원가입 버튼 클릭 시, input창에 입력된게 없는 조건에 일치한다면 true로 변경하고, 다시 input창에서 이벤트가 일어날 시 false로 재변경!>
  const [invalidId, setInvalidId] = useState(false);
  const [invalidPw, setInvalidPw] = useState(false);
  const [invalidCheckPw, setInvalidCheckPw] = useState(false);
  const [invalidName, setInvalidName] = useState(false);

  // <회원가입버튼 클릭 시, 해당 인풋창의 글이 한글자도 없을 시 border색상을 tomato로 바꿔주기 위해!>
  const IdBox = useRef();
  const PwBox = useRef();
  const CheckPwBox = useRef();
  const NameBox = useRef();

  return (
    <>
      <Container>
        {/*  ======  id  ======  */}
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
              (eng_or_num.test(id) && id?.length >= 4) || id?.length === 0
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
        {/*  ======  id_valid  ======  */}
        <ValidBox>
          {invalidId && <RedText>필수항목입니다.</RedText>}
          {id?.length > 0 && id?.length < 4 && (
            <BlackText>최소 4 이상 입력해주세요.</BlackText>
          )}
          {id?.length > 0 && id?.length > 3 && !eng_or_num.test(id) && (
            <BlackText>영어와 숫자로만 입력해주세요.</BlackText>
          )}
          {id?.length >= 4 && eng_or_num.test(id) && (
            <GreenText>사용가능한 아이디입니다.</GreenText>
          )}
        </ValidBox>

        {/*  ====== pw ======   */}
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
        {/* ====== pw_valid ======  */}
        <ValidBox>
          {invalidPw && <RedText>필수항목입니다.</RedText>}
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

        {/* ====== pwcheck ====== */}
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
        {/* ====== pwcheck_valid ====== */}
        <ValidBox>
          {invalidCheckPw && <RedText>필수항목입니다.</RedText>}
          {checkPw?.length > 0 && pw !== checkPw && (
            <BlackText>비밀번호가 다릅니다.</BlackText>
          )}
          {pw === checkPw && <NoneText />}
        </ValidBox>

        {/* ====== name ====== */}
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
        {/* ====== name_valid ====== */}
        <ValidBox>
          {invalidName && <RedText>필수항목입니다.</RedText>}
          {name?.length >= 1 && <NoneText />}
        </ValidBox>
        {/* ====== 필수항목이 아닌 것 ====== */}
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

const RedText = styled.span`
  color: tomato;
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
