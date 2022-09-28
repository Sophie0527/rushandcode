import React from 'react';
import styled from 'styled-components';
import ProductReviewBox from './ProductsFiltered/ProductReviewBox';
import ProductInfoBox from './ProductsFiltered/ProductInfoBox';
import ProductshippingBox from './ProductsFiltered/ProductshippingBox';
import ProductEssentialInfoBox from './ProductsFiltered/ProductEssentialInfoBox';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductFilterBox(props) {
  const {
    product,
    info,
    setInfo,
    review,
    setReview,
    shipping,
    setShipping,
    essentialInfo,
    setEssentialInfo,
  } = props;

  return (
    <>
      <FilterBox>
        <div
          className={info === true ? 'active' : 'inactive'}
          onClick={() => {
            setInfo(true);
            setReview(false);
            setShipping(false);
            setEssentialInfo(false);
          }}
        >
          <span className={info === true ? 'active' : 'inactive'}>
            제품정보
          </span>
        </div>
        <div
          className={review === true ? 'active' : 'inactive'}
          onClick={() => {
            setReview(true);
            setInfo(false);
            setShipping(false);
            setEssentialInfo(false);
          }}
        >
          <span className={review === true ? 'active' : 'inactive'}>
            제품후기
          </span>
        </div>
        <div
          className={shipping === true ? 'active' : 'inactive'}
          onClick={() => {
            setShipping(true);
            setReview(false);
            setInfo(false);
            setEssentialInfo(false);
          }}
        >
          <span className={shipping === true ? 'active' : 'inactive'}>
            배송/반품/교환 안내
          </span>
        </div>
        <div
          className={essentialInfo === true ? 'active' : 'inactive'}
          onClick={() => {
            setEssentialInfo(true);
            setShipping(false);
            setReview(false);
            setInfo(false);
          }}
        >
          <span className={essentialInfo === true ? 'active' : 'inactive'}>
            상품필수정보
          </span>
        </div>
      </FilterBox>

      {info ? <ProductInfoBox product={product} /> : null}
      {review ? <ProductReviewBox product={product} /> : null}
      {shipping ? <ProductshippingBox /> : null}

      {essentialInfo ? <ProductEssentialInfoBox /> : null}
    </>
  );
}

const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
  ${CustomMediaStyle.lessThan('tablet')`
  padding: 70px 0;
  `}
  div {
    height: 30px;
    border-bottom: 1px solid #949494;
    &.active {
      border-bottom: 2px solid black;
    }
    span {
      font-size: 20px;
      font-weight: 500;
      padding: 0 60px;
      color: #949494;
      cursor: pointer;
      &.active {
        color: black;
      }
      ${CustomMediaStyle.lessThan('tablet')`
      font-size: 18px;
      padding: 0 40px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
      font-size: 17px;
      padding: 0 20px;
      `}
    }
  }
`;

export default ProductFilterBox;
