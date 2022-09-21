import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';
import TopBannerBox from '../../components/Products/TopBannerBox';
import CategoryBox from '../../components/Products/CategoryBox';
import FilterContainer from '../../components/Products/FilterContainer';

function Products() {
  let sch = useLocation().search;
  let query = new URLSearchParams(sch);
  let mainCategory = query.get('mainCategory');

  //   let subCategory = query.get('subCategory');
  //   let sort = query.get('sort');

  //   const basicURL = `/products`;
  //   const mainURL = `?mainCategory=${mainCategory}`;
  //   const mainSubURL = `?mainCategory=${mainCategory}&subCategory=${subCategory}`;

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

  return (
    <Container>
      <TopBannerBox mainCategory={mainCategory} />
      <CategoryAndFilterBox>
        <CategoryAndFilter>
          <CategoryBox mainCategory={mainCategory} />
          <FilterContainer />
        </CategoryAndFilter>
      </CategoryAndFilterBox>
      <ProductList>
        <ProductWrap>
          {products
            //   .filter((product) => product.reviews.length > 2)
            .map((product, idx) => {
              return (
                <ProductBox key={idx}>
                  <ImgBox>
                    <img src={product.img} alt={product.product_name}></img>
                  </ImgBox>
                  {product.vegan === true ? (
                    <VeganBox>
                      <p>VEGAN</p>
                    </VeganBox>
                  ) : (
                    <VeganBox></VeganBox>
                  )}
                  <h2>{product.product_name}</h2>
                  <h3>{product.product_sub_name}</h3>
                  <span>
                    ₩&nbsp;
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </ProductBox>
              );
            })}
        </ProductWrap>
      </ProductList>
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

const CategoryAndFilterBox = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryAndFilter = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  ${CustomMediaStyle.lessThan('desktop')`
  width: 90%;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  width: 90%;
  flex-direction: column;
  `}
`;

const ProductList = styled.div`
  display: flex;
  justify-content: center;
`;
const ProductWrap = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 100px;
  ${CustomMediaStyle.lessThan('desktop')`
  width: 95%;
  `}
  div:hover {
    background-color: #eaeaea;
  }
`;

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 315px;
  background-color: #fafafa;
  padding: 20px 0;
  margin: 15px;
  cursor: pointer;
  ${CustomMediaStyle.lessThan('desktop')`
  width: 260px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  width: 190px;
  padding: 0px;
  `}
  h2 {
    padding: 8px 0;
    font-size: 28px;
    font-weight: 600;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 25px;
    `}
  }
  h3 {
    padding: 8px 0;
    font-size: 20px;
    font-weight: 500;
    color: #535353;
    ${CustomMediaStyle.lessThan('tablet')`
    padding: 3px 0;
    font-size: 18px;
    `}
  }
  span {
    padding: 8px 0 20px;
    font-size: 18px;
    color: #535353;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 16px;
    `}
  }
`;

const ImgBox = styled.div`
  img {
    width: 250px;
    ${CustomMediaStyle.lessThan('desktop')`
    width: 200px;
    `}
  }
`;

const VeganBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding-bottom: 10px;
  ${CustomMediaStyle.lessThan('tablet')`
  height: 20px;
  `}
  p {
    border: 2px solid green;
    border-radius: 50px;
    padding: 4px 12px;
    color: green;
    font-size: 15px;
    font-weight: 700;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 14px;
    `}
  }
`;

export default Products;
