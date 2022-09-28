import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function ProductInfoBox(props) {
  const { product } = props;

  return (
    <InfoBox>
      <span>{product.product_sub_name}</span>
      <h1>{product.product_name}</h1>
      <p>{product.hashtag}</p>
      <img src={product.sub_img} alt={product.product_name} />
    </InfoBox>
  );
}

const InfoBox = styled.div`
  text-align: center;
  margin: 0 150px 100px;
  ${CustomMediaStyle.lessThan('desktop')`
  margin: 0 50px 100px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  margin: 0 20px 100px;
  `}
  span {
    font-size: 20px;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 18px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    padding-bottom: 17px;
    `}
  }
  h1 {
    font-size: 45px;
    font-weight: 600;
    padding: 20px;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 40px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 35px;
    `}
  }
  p {
    font-size: 20px;
    color: #535353;
    padding: 20px 0 40px;
    letter-spacing: 1.5px;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 18px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    padding-bottom: 17px;
    `}
  }
  img {
    width: 1000px;
    height: 700px;
    object-fit: cover;
  }
`;

export default ProductInfoBox;
