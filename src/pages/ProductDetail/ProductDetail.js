import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductDetail() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/ProductData/Product.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  const pathname = useLocation().pathname;
  const idNum = Number(pathname.split('/')[2]);

  const productInfo = products.filter((products) => products.id === idNum);

  const [like, setLike] = useState(false);

  return (
    <Container>
      {productInfo.map((product, idx) => {
        return (
          <div key={idx}>
            <BoxWrap>
              <LeftBox>
                <img src={product.sub_img} alt={product.product_sub_name}></img>
                <SubImageBox>
                  <img
                    src={product.sub_img}
                    alt={product.product_sub_name}
                  ></img>
                  <img src={product.img} alt={product.product_sub_name}></img>
                </SubImageBox>
              </LeftBox>
              <RightBox>
                <ProductInfoBox>
                  <GotoReview>
                    <div>
                      <span>{product.reviews.length}개의 후기 보기</span>
                    </div>
                    <img
                      src="https://img.icons8.com/material-rounded/344/share.png"
                      alt="공유"
                    ></img>
                  </GotoReview>
                  <ProductInfo>
                    <img src={product.img} alt={product.product_sub_name}></img>
                    <h1>{product.product_name}</h1>
                    <h3>{product.product_sub_name}</h3>
                    <p>{product.hashtag}</p>
                  </ProductInfo>
                  <TotalPrice>
                    <span>총 합계 금액</span>
                    <h1>
                      ₩&nbsp;
                      {product.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </h1>
                  </TotalPrice>
                  <BuyBox>
                    {!like ? (
                      <ButtonBox onClick={() => setLike(true)}>
                        <AiOutlineHeart />
                      </ButtonBox>
                    ) : (
                      <ButtonBox onClick={() => setLike(false)}>
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
            </BoxWrap>

            <FilterBox>
              <div>
                <span>제품정보</span>
              </div>
              <div>
                <span>제품후기</span>
              </div>
              <div>
                <span>배송/반품/교환 안내</span>
              </div>
              <div>
                <span>상품필수정보</span>
              </div>
            </FilterBox>

            <ReviewBox>
              <h1>총&nbsp;{product.reviews.length}개의 후기</h1>
              {product.reviews.map((review, idx) => {
                return (
                  <ReviewContent key={idx}>
                    <ReviewLeftBox>
                      <div>
                        <span>{review.star}</span>
                        <p>{review.user_name.replace(/(?<=.{1})./, '*')}</p>
                      </div>
                      <ReviewText>{review.content}</ReviewText>
                    </ReviewLeftBox>
                    <ReviewRightBox>
                      <p>{review.date}</p>
                    </ReviewRightBox>
                  </ReviewContent>
                );
              })}
            </ReviewBox>
          </div>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 125px;
  ${CustomMediaStyle.lessThan('tablet')`
  padding-top: 120px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  padding-top: 110px;
  `}
`;

const BoxWrap = styled.div`
  display: flex;
  justify-content: center;
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
  div {
    border-bottom: 1.5px solid #535353;
    padding-bottom: 2px;
    span {
      font-size: 18px;
      font-weight: 500;
      color: #535353;
      cursor: pointer;
    }
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
    width: 300px;
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
    font-size: 18px;
    padding: 10px 0;
    color: #535353;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  span {
    font-size: 19px;
    font-weight: 400;
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
  padding-top: 40px;
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

const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
  div {
    height: 30px;
    border-bottom: 1px solid #949494;
    span {
      font-size: 20px;
      font-weight: 500;
      padding: 0 60px;
      color: #949494;
    }
  }
`;

const ReviewBox = styled.div`
  margin: 0 150px 100px;
  h1 {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 40px;
    border-bottom: 1px solid #949494;
  }
`;

const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  border-bottom: 1px solid #949494;
`;

const ReviewLeftBox = styled.div`
  width: 80%;
  div {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    span {
      padding-right: 10px;
      font-size: 22px;
    }
    p {
      font-size: 15px;
      color: #949494;
    }
  }
`;

const ReviewText = styled.span`
  font-size: 17px;
  line-height: 25px;
  color: #535353;
`;

const ReviewRightBox = styled.div`
  /* padding: 0 100px; */
`;

export default ProductDetail;
