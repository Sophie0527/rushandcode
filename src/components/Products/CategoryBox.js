import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function CategoryBox(props) {
  const { categories, mainCategory, subCategory } = props;

  const subCategoryList = categories
    .filter((categories) => categories.category === mainCategory)
    .map((categories) => categories.sub_category);

  const navigate = useNavigate();
  const mainURL = `/products?mainCategory=${mainCategory}`;

  return (
    <Container>
      <Total
        className={subCategory === null ? 'active' : 'inactive'}
        onClick={() => {
          navigate(`${mainURL}`);
        }}
      >
        전체
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
                    navigate(`${mainURL}${'&subCategory='}${category}`);
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
