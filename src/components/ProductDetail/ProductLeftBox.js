import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductLeftBox(props) {
  const { product } = props;
  return (
    <LeftBox>
      <img src={product.sub_img} alt={product.product_sub_name} />
      <SubImageBox>
        <img src={product.sub_img} alt={product.product_sub_name} />
        <img src={product.img} alt={product.product_sub_name} />
      </SubImageBox>
    </LeftBox>
  );
}

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
    ${CustomMediaStyle.lessThan('tablet')`
    width: 16%;
    margin: 10px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    width: 16%;
    margin: 5px;
    `}
  }
`;

export default ProductLeftBox;
