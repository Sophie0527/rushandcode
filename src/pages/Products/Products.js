import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';
import TopBannerBox from '../../components/Products/TopBannerBox';
import CategoryBox from '../../components/Products/CategoryBox';
import FilterContainer from '../../components/Products/FilterContainer';
import ProductWrap from '../../components/Products/ProductWrap';
function Products() {
  let sch = useLocation().search;
  let query = new URLSearchParams(sch);
  let mainCategory = query.get('mainCategory');
  let subCategory = query.get('subCategory');
  let sort = query.get('sort');

  const navigate = useNavigate();

  const basicURL = `/products`;
  const mainURL = `?mainCategory=${mainCategory}`;
  const mainSubURL = `?mainCategory=${mainCategory}&subCategory=${subCategory}`;
  const sortURL = `&sort=${sort}`;

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/CategoryData/Products.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, [setCategories]);

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
      <TopBannerBox
        categories={categories}
        mainCategory={mainCategory}
        subCategory={subCategory}
      />
      <CategoryAndFilterBox>
        <CategoryAndFilter>
          <CategoryBox
            navigate={navigate}
            categories={categories}
            mainCategory={mainCategory}
            subCategory={subCategory}
            basicURL={basicURL}
            mainURL={mainURL}
            sortURL={sortURL}
          />
          <FilterContainer
            navigate={navigate}
            basicURL={basicURL}
            mainSubURL={mainSubURL}
            sort={sort}
          />
        </CategoryAndFilter>
      </CategoryAndFilterBox>
      <ProductList>
        <ProductWrap
          products={products}
          mainCategory={mainCategory}
          subCategory={subCategory}
        />
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

export default Products;
