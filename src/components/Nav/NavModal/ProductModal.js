import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function ProductModal(props) {
  const { productOpen } = props;
  // product의 목데이터를 fetch하여 products 배열에 담기
  const [products, setProducts] = useState([]);

  // let categories = products.map((products) => products.category);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/data/CategoryData/products.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [setProducts]);

  return (
    <>
      {productOpen ? (
        <Container>
          {products.map((product, idx) => {
            return (
              <CategoryList key={idx}>
                <li>
                  <span
                    onClick={() => {
                      navigate(
                        `${'/products?mainCategory='}${
                          product.category
                        }${'&sort=추천순'}`
                      );
                    }}
                  >
                    {product.category}
                  </span>
                </li>
                {products[idx].sub_category.map((sub_category, i) => {
                  return (
                    <li key={i}>
                      <p
                        onClick={() => {
                          navigate(
                            `${'/products?mainCategory='}${
                              product.category
                            }${'&subCategory='}${sub_category}${'&sort=추천순'}`
                          );
                        }}
                      >
                        {sub_category}
                      </p>
                    </li>
                  );
                })}
              </CategoryList>
            );
          })}
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  /* z-index: 110; */
  ${CustomMediaStyle.lessThan('tablet')`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

const CategoryList = styled.ul`
  background-color: white;
  width: 100%;
  height: 300px;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.4);
  ${CustomMediaStyle.lessThan('desktop')`
    height: 250px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
    display: flex;
    padding: 0px;
    height: 40%;
  `}
  li {
    color: black;
    display: flex;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    letter-spacing: 1px;
    ${CustomMediaStyle.lessThan('desktop')`
      padding: 8px 0px;
    `}
    span:hover {
      color: #ef7300;
    }
    p:hover {
      color: #ef7300;
    }
    span {
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 1px;
      ${CustomMediaStyle.lessThan('desktop')`
        font-size : 15px;
      `}
      ${CustomMediaStyle.lessThan('tablet')`
        font-size : 17px;
        width: 80px;
        padding-left: 15px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
        font-size : 15px;
        width: 70px;
      `}
    }
    p {
      font-size: 14px;
      letter-spacing: -0.5px;
      color: #595959;
      ${CustomMediaStyle.lessThan('desktop')`
        font-size : 13px;
      `}
      ${CustomMediaStyle.lessThan('tablet')`
        font-size : 14px;
        padding : 0 10px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
        font-size : 13px;
        padding : 0 8px;
      `}
    }
  }
`;

export default ProductModal;
