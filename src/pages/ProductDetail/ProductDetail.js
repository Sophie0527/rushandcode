import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ProductLeftBox from '../../components/ProductDetail/ProductLeftBox';
import ProductRightBox from '../../components/ProductDetail/ProductRightBox';
import ProductFilterBox from '../../components/ProductDetail/ProductFilterBox';
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
