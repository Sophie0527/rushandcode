import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function Unnecessary() {
  return (
    <>
      {/* ====== nickname ====== */}
      <InfoBox>
        <ImgBox></ImgBox>
        <SpanBox>
          <span>닉네임</span>
        </SpanBox>
        <InputBox>
          <input></input>
        </InputBox>
      </InfoBox>
      {/* ====== email ====== */}
      <InfoBox>
        <ImgBox></ImgBox>
        <SpanBox>
          <span>이메일</span>
        </SpanBox>
        <InputAgreeBox>
          <InputContainer>
            <div>
              <input></input>
            </div>
            <select>
              <option>직접입력</option>
              <option>naver.com</option>
              <option>hanmail.net</option>
              <option>daum.net</option>
              <option>nate.com</option>
              <option>hotmail.com</option>
              <option>gmail.com</option>
              <option>icloud.com</option>
            </select>
          </InputContainer>
          <AgreeBox>
            <input type="checkbox"></input>
            <span>정보/이벤트 메일 수신에 동의합니다.</span>
          </AgreeBox>
        </InputAgreeBox>
      </InfoBox>
      {/* ====== phone ====== */}
      <InfoBox>
        <ImgBox></ImgBox>
        <SpanBox>
          <span>휴대폰번호</span>
        </SpanBox>
        <InputAgreeBox>
          <InputBox>
            <input placeholder="- 없이 입력하세요."></input>
          </InputBox>
          <AgreeBox>
            <input type="checkbox"></input>
            <span>정보/이벤트 SNS 수신에 동의합니다.</span>
          </AgreeBox>
        </InputAgreeBox>
      </InfoBox>
      {/* ====== address ====== */}
      <InfoBox>
        <ImgBox></ImgBox>
        <SpanBox>
          <span>주소</span>
        </SpanBox>
        <InputContainer>
          <div>
            <input></input>
          </div>
          <button>우편번호 선택</button>
        </InputContainer>
      </InfoBox>
      <AddressSubBox>
        <InputBox>
          <input></input>
        </InputBox>
        <InputBox>
          <input></input>
        </InputBox>
      </AddressSubBox>
    </>
  );
}

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
const InputAgreeBox = styled.div`
  display: flex;
  ${CustomMediaStyle.lessThan('desktop')`
  flex-direction: column;
  `}
`;

const InputContainer = styled.div`
  display: flex;
  div {
    border: 1px solid black;
    border-radius: 1px;
    width: 250px;
    height: 40px;
    ${CustomMediaStyle.lessThan('mobile')`
    width: 205px;
    `}
    input {
      padding: 0 10px;
      border: none;
      width: 230px;
      height: 40px;
      outline: none;
      font-size: 15px;
      letter-spacing: 0.5px;
      ::placeholder {
        letter-spacing: 1px;
      }
      ${CustomMediaStyle.lessThan('mobile')`
      width: 185px;
     `}
    }
  }
  select {
    margin-left: 10px;
    padding-inline-start: 15px;
    width: 120px;
    cursor: pointer;
    margin-right: 5px;
    ${CustomMediaStyle.lessThan('mobile')`
    margin-left: 5px;
    padding-inline-start: 10px;
    width: 90px;
    `}
  }
  button {
    margin-left: 10px;
    margin-right: 5px;
    width: 120px;
    cursor: pointer;
    border: 1.5px solid black;
    background-color: white;
    ${CustomMediaStyle.lessThan('mobile')`
    margin-left: 5px;
    width: 90px;
    `}
  }
`;

const AgreeBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  ${CustomMediaStyle.lessThan('desktop')`
   padding-top: 5px;
   padding-left: 0px;
  `}
  input {
    cursor: pointer;
    width: 15px;
  }
  span {
    font-size: 14px;
    letter-spacing: -0.5px;
    margin-left: -5px;
  }
`;

const AddressSubBox = styled.div`
  padding: 0 160px;
  display: flex;
  ${CustomMediaStyle.lessThan('tablet')`
  flex-direction: column;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  padding: 0 124px;
  flex-direction: column;
  `}
`;

export default Unnecessary;
