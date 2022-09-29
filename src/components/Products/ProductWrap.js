import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductWrap(props) {
  const { products, mainCategory, subCategory, sort } = props;

  // 메인제품에 따른 필터링
  const mainProductList = products.filter(
    (products) => products.product_main_name === mainCategory
  );
  // 서브제품에 따른 필터링
  const subProductList = products.filter(
    (products) => products.product_sub_name === subCategory
  );
  const productList = subCategory === null ? mainProductList : subProductList;
  if (sort === '추천순') {
    // productList.sort(() => Math.random() - 0.5);
    productList.sort(function (a, b) {
      let x = a.product_name.toLowerCase();
      let y = b.product_name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else if (sort === '낮은 가격순') {
    productList.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === '높은 가격순') {
    productList.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sort === '리뷰많은 순') {
    productList.sort((a, b) => {
      return b.reviews.length - a.reviews.length;
    });
  }

  // 서브best제품에 따른 필터링
  const subBestList = products.filter(
    (products) => products.reviews.length > 2
  );
  const bestList = subCategory === null ? products : subBestList;
  if (sort === '추천순') {
    // bestList.sort(() => Math.random() - 0.5);
    bestList.sort(function (a, b) {
      let x = a.product_name.toLowerCase();
      let y = b.product_name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else if (sort === '낮은 가격순') {
    bestList.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === '높은 가격순') {
    bestList.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sort === '리뷰많은 순') {
    bestList.sort((a, b) => {
      return b.reviews.length - a.reviews.length;
    });
  }

  // 메인vegan제품에 따른 필터링
  const mainVeganList = products.filter((products) => products.vegan === true);
  // 서브vegan제품에 따른 필터링
  const subVeganList = products.filter(
    (products) =>
      products.product_main_name === subCategory && products.vegan === true
  );
  const veganList = subCategory === null ? mainVeganList : subVeganList;
  if (sort === '추천순') {
    // veganList.sort(() => Math.random() - 0.5);
    veganList.sort(function (a, b) {
      let x = a.product_name.toLowerCase();
      let y = b.product_name.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
  } else if (sort === '낮은 가격순') {
    veganList.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === '높은 가격순') {
    veganList.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sort === '리뷰많은 순') {
    veganList.sort((a, b) => {
      return b.reviews.length - a.reviews.length;
    });
  }

  //페이지네이션
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const totalProductList = productList.length;
  const basicNumPages = Math.ceil(totalProductList / limit);

  return (
    <Container>
      <ProductContainer>
        {productList.slice(offset, offset + limit).map((product, idx) => {
          return (
            <ProductBox key={idx}>
              <Link to={`/productDetail/${product.id}`}>
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
              </Link>
            </ProductBox>
          );
        })}
        {mainCategory === '베스트' && (
          <>
            {bestList.map((product, idx) => {
              return (
                <ProductBox key={idx}>
                  <Link to={`/productDetail/${product.id}`}>
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
                  </Link>
                </ProductBox>
              );
            })}
          </>
        )}
        {mainCategory === '비건' && (
          <>
            {veganList.map((product, idx) => {
              return (
                <ProductBox key={idx}>
                  <Link to={`/productDetail/${product.id}`}>
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
                  </Link>
                </ProductBox>
              );
            })}
          </>
        )}
      </ProductContainer>
      <PageNation>
        <Label>
          페이지당 표시할 게시물 수:&nbsp;
          <Select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => setLimit(Number(value))}
          >
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
          </Select>
        </Label>
        {mainCategory !== '베스트' && mainCategory !== '비건' && (
          <Footer>
            <Button
              onClick={() => {
                setPage(page - 1);
                window.scrollTo(0, 500);
              }}
              disabled={page === 1}
            >
              &lt;
            </Button>
            {Array(basicNumPages)
              .fill()
              .map((_, i) => (
                <Button
                  key={i + 1}
                  onClick={() => {
                    setPage(i + 1);
                    window.scrollTo(0, 500);
                  }}
                  aria-current={page === i + 1 ? 'page' : null}
                >
                  {i + 1}
                </Button>
              ))}
            <Button
              onClick={() => {
                setPage(page + 1);
                window.scrollTo(0, 500);
              }}
              disabled={page === basicNumPages}
            >
              &gt;
            </Button>
          </Footer>
        )}
      </PageNation>
    </Container>
  );
}
const Container = styled.div`
  width: 90%;
  ${CustomMediaStyle.lessThan('desktop')`
  width: 95%;
  `}
`;

const PageNation = styled.div`
  text-align: center;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 17px;
  color: #535353;
`;

const Select = styled.select`
  text-align: center;
  width: 70px;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
  padding: 8px 13px;
  font-weight: 400;
  font-size: 15px;
`;

const Footer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 50px 0 100px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 14px;
  background: black;
  color: white;
  font-size: 1rem;
  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: tomato;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 100px;
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
  a {
    text-decoration: none;
  }
  h2 {
    padding: 8px 0;
    font-size: 28px;
    font-weight: 600;
    color: black;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 25px;
    `};
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

export default ProductWrap;
