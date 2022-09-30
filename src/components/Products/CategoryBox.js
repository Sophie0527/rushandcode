import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function CategoryBox(props) {
  const {
    navigate,
    categories,
    mainCategory,
    subCategory,
    basicURL,
    mainURL,
    sortURL,
    products,
  } = props;

  // url의 query에서 mainCategory가 상품의 product_main_name과 같은 것으로 필터링.
  const totalProduct = products.filter(
    (products) => products.product_main_name === mainCategory
  );
  // 상품의 비건이 true인 것으로 필터링.
  const veganProduct = products.filter((products) => products.vegan === true);

  // url의 query에서 mainCategory가 카테고리와 같은 것으로 필터링하고, 필터링된 카테고리 데이터의 sub_category를 mapping하여 보여주기.
  const subCategoryList = categories
    .filter((categories) => categories.category === mainCategory)
    .map((categories) => categories.sub_category);

  return (
    <Container>
      <Total
        className={subCategory === null ? 'active' : 'inactive'}
        onClick={() => {
          navigate(`${basicURL}${mainURL}${sortURL}`);
        }}
      >
        {(() => {
          if (mainCategory !== '전체상품' && mainCategory !== '비건') {
            return <>전체({totalProduct.length})</>;
          } else if (mainCategory === '전체상품') {
            return <>전체({products.length})</>;
          } else if (mainCategory === '비건') {
            return <>전체({veganProduct.length})</>;
          }
        })()}
      </Total>

      {subCategoryList.map((category, i) => {
        return (
          <SubTextWrap key={i}>
            {category.map((category, i) => {
              return (
                <SubSpan
                  key={i}
                  className={subCategory === category ? 'active' : 'inactive'}
                  onClick={() => {
                    navigate(
                      `${basicURL}${mainURL}${'&subCategory='}${category}${sortURL}`
                    );
                  }}
                >
                  {category}
                </SubSpan>
              );
            })}
          </SubTextWrap>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  ${CustomMediaStyle.lessThan('tablet')`
  width: 100%;
  justify-content: left;
  `}
`;

const Total = styled.span`
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #949494;
  padding-right: 20px;
  cursor: pointer;
  &.active {
    color: black;
  }
  ${CustomMediaStyle.lessThan('desktop')`
    font-size: 18px;
    padding-right: 15px;
   `}
  ${CustomMediaStyle.lessThan('tablet')`
    font-size: 16px;
   `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 14px;
    padding-right: 8px;
   `}
`;

const SubTextWrap = styled.div`
  display: flex;
`;

const SubSpan = styled.span`
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: #949494;
  padding-right: 20px;
  cursor: pointer;
  &.active {
    color: black;
  }
  ${CustomMediaStyle.lessThan('desktop')`
    font-size: 18px;
    padding-right: 15px;
   `}
  ${CustomMediaStyle.lessThan('tablet')`
    font-size: 16px;
   `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 14px;
    padding-right: 8px;
   `}
`;

export default CategoryBox;
