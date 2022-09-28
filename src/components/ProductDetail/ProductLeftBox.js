import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductLeftBox(props) {
  const { product } = props;

  const [subImg, setSubImg] = useState(true);

  return (
    <LeftBox>
      {subImg ? (
        <img src={product.sub_img} alt={product.product_sub_name} />
      ) : (
        <img src={product.img} alt={product.product_sub_name} />
      )}
      <SubImageBox>
        <img
          src={product.sub_img}
          alt={product.product_sub_name}
          onClick={() => {
            setSubImg(true);
          }}
        />
        <img
          src={product.img}
          alt={product.product_sub_name}
          onClick={() => {
            setSubImg(false);
          }}
        />
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
    cursor: pointer;
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
