import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductDetail() {
  return (
    <Container>
      <LeftBox>
        <img
          src="https://cdn.pixabay.com/photo/2021/01/24/10/01/bath-5944728_1280.png"
          alt="예시"
        ></img>
        <SubImageBox>
          <img
            src="https://cdn.pixabay.com/photo/2021/01/24/10/01/bath-5944728_1280.png"
            alt="예시"
          ></img>
          <img
            src="https://cdn.pixabay.com/photo/2021/01/24/10/01/bath-5944728_1280.png"
            alt="예시"
          ></img>
          <img
            src="https://cdn.pixabay.com/photo/2021/01/24/10/01/bath-5944728_1280.png"
            alt="예시"
          ></img>
        </SubImageBox>
      </LeftBox>
      <RightBox>
        <ProductInfoBox>
          <GotoReview>
            <span>후기 보기</span>
            <img
              src="https://img.icons8.com/material-rounded/344/share.png"
              alt="공유"
            ></img>
          </GotoReview>
          <ProductInfo>
            <img
              src="https://cdn.pixabay.com/photo/2021/01/24/10/01/bath-5944728_1280.png"
              alt="예시"
            ></img>
            <h1>인터갈락틱</h1>
            <h3>배쓰 밤</h3>
            <p>#배스밤 #환상적인우주느낌</p>
          </ProductInfo>
          <TotalPrice>
            <span>총 합계 금액</span>
            <h1>₩ 17000</h1>
          </TotalPrice>
          <BuyBox>
            <ButtonBox>
              <AiOutlineHeart />
            </ButtonBox>
            <ButtonBox>
              <AiOutlineShopping />
            </ButtonBox>
            <BuyButtonBox>
              <span>바로구매</span>
            </BuyButtonBox>
          </BuyBox>
        </ProductInfoBox>
      </RightBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 125px;
  display: flex;
  justify-content: center;
  ${CustomMediaStyle.lessThan('tablet')`
  padding-top: 120px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  padding-top: 110px;
  `}
`;

const LeftBox = styled.div`
  text-align: center;
  width: 50%;
  img {
    width: 100%;
  }
`;

const SubImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  img {
    width: 12%;
    border: 1px solid black;
    margin: 15px;
  }
`;

const RightBox = styled.div`
  width: 50%;
`;

const ProductInfoBox = styled.div`
  margin: 50px 100px;
`;

const GotoReview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 18px;
    font-weight: 500;
    color: #535353;
    cursor: pointer;
  }
  img {
    width: 25px;
    cursor: pointer;
  }
`;

const ProductInfo = styled.div`
  text-align: center;
  padding: 30px 60px;
  img {
    width: 100%;
    padding: 5px 0;
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
    padding: 10px 0;
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0;
  }
  p {
    padding: 10px 0;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  span {
    font-size: 18px;
    font-weight: 500;
    color: #535353;
    cursor: pointer;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`;

const BuyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
`;

const ButtonBox = styled.div`
  width: 13%;
  height: 70px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const BuyButtonBox = styled.div`
  width: 70%;
  height: 70px;
  background-color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 19px;
    font-weight: 500;
    color: white;
  }
`;

export default ProductDetail;
