import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductRightBox(props) {
  const { product, setInfo, setReview, setShipping, setEssentialInfo } = props;

  // 상품의 like를 state로 하고, 하트아이콘 클릭 시 setState로 변경하기!
  const [isLike, setIsLike] = useState(product.like);
  const likeBtn = () => {
    setIsLike(!isLike);
  };

  return (
    <RightBox>
      <ProductInfoBox>
        <GotoReview>
          <div>
            <span
              onClick={() => {
                setReview(true);
                setInfo(false);
                setShipping(false);
                setEssentialInfo(false);
                window.scrollBy(0, 700);
              }}
            >
              {product.reviews.length}개의 후기 보기
            </span>
          </div>
          <img
            src="https://img.icons8.com/material-rounded/344/share.png"
            alt="공유"
          />
        </GotoReview>
        <ProductInfo>
          <img src={product.img} alt={product.product_sub_name} />
          <h1>{product.product_name}</h1>
          <h3>{product.product_sub_name}</h3>
          <p>{product.hashtag}</p>
        </ProductInfo>
        <TotalPrice>
          <span>총 합계 금액</span>
          <h1>
            ₩&nbsp;
            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h1>
        </TotalPrice>
        <BuyBox>
          {!isLike ? (
            <ButtonBox onClick={likeBtn}>
              <AiOutlineHeart />
            </ButtonBox>
          ) : (
            <ButtonBox onClick={likeBtn}>
              <AiFillHeart />
            </ButtonBox>
          )}
          <ButtonBox>
            <AiOutlineShopping />
          </ButtonBox>
          <BuyButtonBox>
            <span>바로구매</span>
          </BuyButtonBox>
        </BuyBox>
      </ProductInfoBox>
    </RightBox>
  );
}

const RightBox = styled.div`
  width: 50%;
`;

const ProductInfoBox = styled.div`
  margin: 50px 100px;
  ${CustomMediaStyle.lessThan('desktop')`
  margin: 20px 30px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  margin: 10px 20px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  margin: 10px;
  `}
`;

const GotoReview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    border-bottom: 1.5px solid #535353;
    padding-bottom: 2px;
    span {
      font-size: 18px;
      font-weight: 500;
      color: #535353;
      cursor: pointer;
      ${CustomMediaStyle.lessThan('tablet')`
        font-size: 15px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
        font-size: 13px;
      `}
    }
  }
  img {
    width: 25px;
    cursor: pointer;
    ${CustomMediaStyle.lessThan('tablet')`
    width: 20px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    width: 18px;
    `}
  }
`;

const ProductInfo = styled.div`
  text-align: center;
  padding: 30px 60px;
  ${CustomMediaStyle.lessThan('desktop')`
  padding: 0px;
  `}
  img {
    width: 300px;
    ${CustomMediaStyle.lessThan('tablet')`
    width: 200px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    width: 150px;
    `}
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
    padding: 10px 0;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 35px;
    padding: 0px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 30px;
    `}
  }
  h3 {
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0;
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 18px;
    `}
  }
  p {
    font-size: 18px;
    padding: 10px 0;
    color: #535353;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 16px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    padding: 0px;
    `}
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  ${CustomMediaStyle.lessThan('desktop')`
  padding-top: 30px;
  `}
  span {
    font-size: 19px;
    font-weight: 400;
    color: #535353;
    cursor: pointer;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 17px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 16px;
    `}
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 25px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 22px;
    `}
  }
`;

const BuyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  ${CustomMediaStyle.lessThan('desktop')`
  padding-top: 20px;
  `}
`;

const ButtonBox = styled.div`
  width: 13%;
  height: 70px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${CustomMediaStyle.lessThan('desktop')`
   height: 60px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
   height: 50px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
   height: 40px;
  `}
  svg {
    width: 25px;
    height: 25px;
    ${CustomMediaStyle.lessThan('mobile')`
    width: 22px;
    height: 22px;
   `}
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
  ${CustomMediaStyle.lessThan('desktop')`
   height: 60px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
   height: 50px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
   height: 40px;
  `}
  span {
    font-size: 19px;
    font-weight: 500;
    color: white;
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 17px;
    `}
  }
`;

export default ProductRightBox;
