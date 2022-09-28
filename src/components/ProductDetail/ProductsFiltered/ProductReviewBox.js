import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function ProductReviewBox(props) {
  const { product } = props;

  return (
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
  );
}

const ReviewBox = styled.div`
  margin: 0 150px 100px;
  ${CustomMediaStyle.lessThan('desktop')`
  margin: 0 50px 100px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  margin: 0 20px 100px;
  `}
  h1 {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 40px;
    border-bottom: 1px solid #949494;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 23px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    padding-bottom: 20px;
    `}
  }
`;

const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  border-bottom: 1px solid #949494;
  ${CustomMediaStyle.lessThan('desktop')`
  padding: 40px 50px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  padding: 30px 20px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  padding: 20px 10px;
  `}
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
      ${CustomMediaStyle.lessThan('mobile')`
      font-size: 20px;
      `}
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
  ${CustomMediaStyle.lessThan('mobile')`
  font-size: 16px;
  `}
`;

const ReviewRightBox = styled.div`
  ${CustomMediaStyle.lessThan('mobile')`
  font-size: 14px;
  `}
`;

export default ProductReviewBox;
