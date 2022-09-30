import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function ProductWrap(props) {
  const { products, mainCategory, subCategory, sort } = props;

  // ①메인제품에 따른 필터링
  const mainProductList = products.filter(
    (products) => products.product_main_name === mainCategory
  );
  // ②서브제품에 따른 필터링
  const subProductList = products.filter(
    (products) => products.product_sub_name === subCategory
  );
  // url의 query에서 subCategory가 null 이면 ① null이 아니면 ②
  const productList = subCategory === null ? mainProductList : subProductList;
  // <정렬조건>
  // 추천순: 이름순 / 낮은가격순: 가격순 / 높은가격순: 가격역순 /리뷰많은 순: 리뷰수가 많은 순
  if (sort === '추천순') {
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

  // ③ 상품 mockdata에서 가져온 리뷰의 수가 2개 이상 되는 것으로 필터링하기.
  const subBestList = products.filter(
    (products) => products.reviews.length > 2
  );
  // URL에서subCategory가 null이면 기본 상품리스트를 null이 아니면 ③을 mapping하여 보여주기!
  const AllList = subCategory === null ? products : subBestList;
  // <정렬조건>
  // 추천순: 이름순 / 낮은가격순: 가격순 / 높은가격순: 가격역순 /리뷰많은 순: 리뷰수가 많은 순
  if (sort === '추천순') {
    AllList.sort(function (a, b) {
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
    AllList.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sort === '높은 가격순') {
    AllList.sort((a, b) => {
      return b.price - a.price;
    });
  } else if (sort === '리뷰많은 순') {
    AllList.sort((a, b) => {
      return b.reviews.length - a.reviews.length;
    });
  }

  // ④ 상품 mockdata에서 가져온 vegan이 true인 것으로 필터링하기.
  const mainVeganList = products.filter((products) => products.vegan === true);
  // ⑤ URL에서subCategory가 상품 mockdata에서 가져온 product_main_name과 같은 것이고 vegan이 true인 것으로 필터링하기.
  const subVeganList = products.filter(
    (products) =>
      products.product_main_name === subCategory && products.vegan === true
  );
  // URL에서subCategory가 null이면 ④를 null이 아니면 ⑤를 mapping하여 보여주기!
  const veganList = subCategory === null ? mainVeganList : subVeganList;
  // <정렬조건>
  // 추천순: 이름순 / 낮은가격순: 가격순 / 높은가격순: 가격역순 /리뷰많은 순: 리뷰수가 많은 순
  if (sort === '추천순') {
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
        {mainCategory === '전체상품' && (
          <>
            {AllList.map((product, idx) => {
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
        {mainCategory !== '전체상품' && mainCategory !== '비건' && (
          <>
            {/* 최소 표시할 게시물 수를 state로 8로 지정하여 기본 값으로 보여주고 
            해당 숫자를 클릭하면 setState로 수량을 변경 할 수 있도록 함. */}
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
              {/* 전체상품 수에서 최소 페이지당 표시할 게시물 수를 나누기. (ex. 전체상품수(24) ➗ 표시할 게시물 수(8)) */}
              {/* fill()로 배열의 각자리를 채우기. fill 인자가 없으므로 undefined로 할당됨. (ex. [ undefined, undefined, undefined ]) */}
              {/* map()으로 각자리 index에 해당하는 값 할당하기. (ex. [ 1, 2, 3 ]) */}
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
          </>
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
