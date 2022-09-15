import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Footer() {
  return (
    <Container>
      <FooterTopBox>
        <div>
          <img
            alt="heart"
            src="https://cdn.pixabay.com/photo/2021/02/16/11/02/eye-6020744_1280.png"
          ></img>
          <img
            alt="dance1"
            src="https://cdn.pixabay.com/photo/2021/08/18/05/25/pair-6554663_1280.png"
          ></img>
          <img
            alt="ballet"
            src="https://cdn.pixabay.com/photo/2021/08/18/05/25/ballerina-6554665_1280.png"
          ></img>
          <img
            alt="flower"
            src="https://cdn.pixabay.com/photo/2021/10/11/10/45/flower-6700207_1280.png"
          ></img>
          <img
            alt="face"
            src="https://cdn.pixabay.com/photo/2017/06/20/09/39/psychology-2422442_1280.png"
          ></img>
          <img
            alt="dance2"
            src="https://cdn.pixabay.com/photo/2021/08/18/05/25/ballet-6554664_1280.png"
          ></img>
        </div>
      </FooterTopBox>
      <FooterBottomBox>
        <BottomBox>
          <LeftBox>
            <Subscribe>
              <InputBox>
                <input placeholder="이메일 주소를 입력해주세요"></input>
                <button>구독</button>
              </InputBox>
              <SubscribeText>
                <p>
                  매주 월요일 오후, 구독자님을 위한 제품과 브랜드 이야기를 전해
                  드립니다.
                </p>
                <p>
                  구독은 언제든지 해지하실 수 있습니다.
                  <Link to="/">미리보기</Link>
                </p>
              </SubscribeText>
            </Subscribe>
            <ServiceCenter>
              <div>
                <span>고객센터</span>
                <span>0000-1234</span>
                <span>rush.co.kr</span>
                <br />
                <p>상담전화 13:00 ~ 16:00(평일)</p>
                <p>상담톡 10:00 ~ 16:00(평일)</p>
              </div>
              <div>
                <span>기업선물</span>
                <span>0000-1234-5678</span>
                <span>rush.co.kr</span>
              </div>
            </ServiceCenter>
            <Reference>
              이 프로젝트는 lush 사이트를 참조하여 학습 목적으로 만들었습니다.
              <br />
              실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를
              활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제 될 수
              있습니다. <br />이 프로젝트에서 사용하고 있는 사진 대부분은
              위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수
              없습니다.
            </Reference>
          </LeftBox>
          <RightBox>
            <NoticeBox>
              <div>
                <span>공지사항</span>
              </div>
              <div>
                <p>2022-09-08 [공지] 2022 추석 매장 운영시간 안내</p>
                <p>2022-09-07 [베송공지] 2022 추석 연휴 배송 안내</p>
              </div>
            </NoticeBox>
            <RushIntroduceBox>
              <div>
                <span>러쉬소개</span>
                <span>스카우트</span>
                <span>채용안내</span>
              </div>
              <div>
                <p>개인정보처리방침</p>
                <span>영상정보관리지침</span>
                <span>이용약관</span>
              </div>
              <div>
                <span>FAQ</span>
                <span>1:1문의</span>
              </div>
            </RushIntroduceBox>
            <BrandInfoBox>
              <p>
                강남구 러쉬앤코드 빌딩(rush & code B/D) 1층 러쉬앤코드 코리아
              </p>
              <p>사이트 운영자 : 러쉬앤코드 코리아 | 제작자: Sophie</p>
              <p>Email : ssh30510044@gmail.com</p>
              <p>Github : github.com/sophie0527</p>
              <p>Blog : sophie0527.tistory.com</p>
            </BrandInfoBox>
          </RightBox>
        </BottomBox>
      </FooterBottomBox>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTopBox = styled.div`
  background-color: #f2f2f2;
  div {
    padding: 30px 200px;
    display: flex;
    justify-content: space-between;
    ${CustomMediaStyle.lessThan('desktop')`
    padding: 30px 100px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    padding: 30px;
    `}
    img {
      height: 120px;
      ${CustomMediaStyle.lessThan('tablet')`
        height: 70px;
      `}
    }
  }
`;

const FooterBottomBox = styled.div`
  background-color: Black;
  color: #f2f2f2;
  padding: 50px 0;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const LeftBox = styled.div`
  padding: 0 0 0 130px;
  ${CustomMediaStyle.lessThan('desktop')`
    padding: 0 0 0 50px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
    padding: 0 0 0 20px;
  `}
`;

const Subscribe = styled.div`
  padding: 25px 0;
`;

const InputBox = styled.div`
  border: 1px solid white;
  width: 450px;
  height: 30px;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  ${CustomMediaStyle.lessThan('desktop')`
    width: 350px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
    width: 240px;
  `}
  input:focus {
    outline: none;
  }
  input {
    border: none;
    width: 400px;
    background-color: rgba(0, 0, 0, 0);
    padding-left: 10px;
    letter-spacing: 1px;
    ${CustomMediaStyle.lessThan('desktop')`
    width: 300px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    width: 180px;
    `}
  }
  button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    cursor: pointer;
    ${CustomMediaStyle.lessThan('tablet')`
font-size: 12px;
  `}
  }
`;

const SubscribeText = styled.div`
  padding: 20px 0;
  p {
    padding: 5px 0;
    ${CustomMediaStyle.lessThan('desktop')`
    width: 350px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    width: 230px;
    font-size: 14px;
    `}
    a {
      color: white;
      padding-left: 5px;
    }
  }
`;

const ServiceCenter = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    padding-right: 50px;
    ${CustomMediaStyle.lessThan('desktop')`
    padding-right: 0px;
    `}
    span {
      padding: 3px 0;
      font-size: 18px;
      font-weight: 600;
      ${CustomMediaStyle.lessThan('desktop')`
        font-size: 15px;
      `}
    }
    p {
      padding: 2px 0;
      ${CustomMediaStyle.lessThan('desktop')`
        font-size: 10px;
      `}
    }
  }
`;
const Reference = styled.div`
  padding: 50px 0 20px;
  width: 480px;
  font-size: 13px;
  font-weight: 100;
  color: #8e8e8e;
  ${CustomMediaStyle.lessThan('desktop')`
    width: 250px;
    font-size: 10px;
  `}
`;

const RightBox = styled.div`
  padding: 0 130px 0 0;
  ${CustomMediaStyle.lessThan('desktop')`
    padding: 0 50px 0 0 ;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
    padding: 0 20px 0 0 ;
  `}
`;

const NoticeBox = styled.div`
  padding: 20px 0;
  div {
    padding: 5px 0;
    span {
      font-size: 18px;
      ${CustomMediaStyle.lessThan('tablet')`
        font-size: 15px;
      `}
    }
    p {
      font-size: 15px;
      padding: 5px 0;
      ${CustomMediaStyle.lessThan('tablet')`
        font-size: 10px;
      `}
    }
  }
`;

const RushIntroduceBox = styled.div`
  padding: 20px 0;
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    span {
      padding: 5px 80px 5px 0;
      font-size: 18px;
      ${CustomMediaStyle.lessThan('desktop')`
        padding: 5px 30px 5px 0;
      `}
      ${CustomMediaStyle.lessThan('tablet')`
        padding: 5px 20px 5px 0;
        font-size: 12px;
      `}
    }
    p {
      padding: 5px 80px 5px 0;
      font-size: 18px;
      color: #ef7300;
      ${CustomMediaStyle.lessThan('desktop')`
        padding: 5px 30px 5px 0;
      `}
      ${CustomMediaStyle.lessThan('tablet')`
        padding: 5px 20px 5px 0;
        font-size: 12px;
      `}
    }
  }
`;

const BrandInfoBox = styled.div`
  padding: 20px 0;
  p {
    font-size: 15px;
    padding: 4px 10px;
    color: #8e8e8e;
    letter-spacing: 1.5px;
    ${CustomMediaStyle.lessThan('desktop')`
        width: 300px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
        width: 200px;
        font-size: 12px;
    `}
  }
`;

export default Footer;
