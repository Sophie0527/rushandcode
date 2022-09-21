import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Products() {
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

  const [filterOpen, setFilterOpen] = useState(false);

  const openFilterBox = () => {
    if (!filterOpen) {
      setFilterOpen(true);
    } else {
      setFilterOpen(false);
    }
  };

  return (
    <Container>
      <TopBannerBox>
        <div>
          <h1>베스트</h1>
          <h3>누구나 좋아하는 인기 제품을 만나 보세요!</h3>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/08/25/03/51/toner-906142_1280.jpg"
          alt="best"
        ></img>
      </TopBannerBox>
      <CategoryAndFilterBox>
        <CategoryAndFilter>
          <CategoryBox>
            <span>전체</span>
            <span>BEST 50</span>
            <span>국내제조</span>
            <span>네이키드</span>
          </CategoryBox>
          <FilterContainer>
            <FilterBox onClick={openFilterBox}>
              <span>추천순</span>
              <img
                src="https://img.icons8.com/ios-filled/344/expand-arrow.png"
                alt="아래화실표"
              ></img>
            </FilterBox>
            {filterOpen ? (
              <Filter>
                <span>추천순</span>
                <span>인기순</span>
                <span>낮은 가격순</span>
                <span>높은 가격순</span>
                <span>리뷰많은 순</span>
              </Filter>
            ) : null}
          </FilterContainer>
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
`;

const TopBannerBox = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  div {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    width: 100%;
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    h1 {
      font-family: 'Nanum Brush Script', cursive;
      font-style: italic;
      font-size: 130px;
      font-weight: 700;
      padding: 5px 0;
    }
    h3 {
      font-size: 30px;
      padding: 5px 0;
      letter-spacing: 1.5px;
    }
  }
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
`;

const CategoryBox = styled.div`
  span {
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #949494;
    padding-right: 20px;
    cursor: pointer;
  }
`;

const FilterContainer = styled.div``;

const FilterBox = styled.div`
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  span {
    width: 100px;
    font-size: 18px;
    letter-spacing: 1px;
  }
  img {
    width: 15px;
  }
`;

const Filter = styled.div`
  background-color: white;
  width: 155px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  position: absolute;
  span:hover {
    background-color: #eaeaea;
  }
  span {
    cursor: pointer;
    padding: 15px 20px;
    font-size: 18px;
    letter-spacing: 1px;
  }
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
  h2 {
    padding: 8px 0;
    font-size: 28px;
    font-weight: 600;
  }
  h3 {
    padding: 8px 0;
    font-size: 20px;
    font-weight: 500;
    color: #535353;
  }
  span {
    padding: 8px 0 20px;
    font-size: 18px;
    color: #535353;
  }
`;

const ImgBox = styled.div`
  img {
    width: 250px;
  }
`;

const VeganBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding-bottom: 10px;
  p {
    border: 2px solid green;
    border-radius: 50px;
    padding: 4px 12px;
    color: green;
    font-size: 15px;
    font-weight: 700;
  }
`;

export default Products;
