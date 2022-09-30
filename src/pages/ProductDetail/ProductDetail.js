import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProductLeftBox from '../../components/ProductDetail/ProductLeftBox';
import ProductRightBox from '../../components/ProductDetail/ProductRightBox';
import ProductFilterBox from '../../components/ProductDetail/ProductFilterBox';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductDetail() {
  // 상품 정보가 있는 Mock data를, fetch하여 data를 setState로 배열에 담기.
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

  // useLocation().pathname으로 url의 정보를 가져와서 split를 사용하여 /(슬래시)를 기준으로 뒤의 정보 가져오기.
  // 상품 아이디가 '/' 뒤의 숫자와 같은 것으로 필터링하고, 필터링된 상품을 mapping하여 보여주기.
  const pathname = useLocation().pathname;
  const idNum = Number(pathname.split('/')[2]);
  const productInfo = products.filter((products) => products.id === idNum);

  // 카테고리(제품정보, 제품후기, 배송안내, 상품필수정보) 를 보여주고, 스타일변경을 위한 state.
  // 제품정보를 보여주는 것이 기본값(true)으로 지정.
  const [info, setInfo] = useState(true);
  const [review, setReview] = useState(false);
  const [shipping, setShipping] = useState(false);
  const [essentialInfo, setEssentialInfo] = useState(false);

  return (
    <Container>
      {productInfo.map((product, idx) => {
        return (
          <div key={idx}>
            <BoxWrap>
              <ProductLeftBox product={product} />
              <ProductRightBox
                product={product}
                setInfo={setInfo}
                setReview={setReview}
                setShipping={setShipping}
                setEssentialInfo={setEssentialInfo}
              />
            </BoxWrap>
            <ProductFilterBox
              product={product}
              info={info}
              setInfo={setInfo}
              review={review}
              setReview={setReview}
              shipping={shipping}
              setShipping={setShipping}
              essentialInfo={essentialInfo}
              setEssentialInfo={setEssentialInfo}
            />
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

export default ProductDetail;
