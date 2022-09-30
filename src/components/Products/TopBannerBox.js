import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function TopBannerBox(props) {
  const { categories, mainCategory, subCategory } = props;

  return (
    <>
      {/* url의 query에서 mainCategory가 카테고리와 같은 것으로 필터링하고, 필터링된 카테고리 데이터를 mapping하여 보여주기. */}
      {/* url의 query에서 subCategory가 null이면 mainCategory 정보를 보여주고, null이 아니면 subCategory 정보 보여주기. */}
      {categories
        .filter((category) => mainCategory === category.category)
        .map((category, idx) => {
          return (
            <Container key={idx}>
              <div>
                <h1>{subCategory === null ? mainCategory : subCategory}</h1>
                <h3>{category.category_meaning}</h3>
              </div>
              <img src={category.img} alt={category.category}></img>
            </Container>
          );
        })}
    </>
  );
}

const Container = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    ${CustomMediaStyle.lessThan('tablet')`
    height: 400px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    height: 300px;
    `}
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
    ${CustomMediaStyle.lessThan('tablet')`
    height: 400px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    height: 300px;
    `}
    h1 {
      font-family: 'Nanum Brush Script', cursive;
      font-style: italic;
      font-size: 130px;
      font-weight: 700;
      padding: 5px 0;
      ${CustomMediaStyle.lessThan('tablet')`
      font-size: 110px;
      font-weight: 700;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
      font-size: 100px;
      font-weight: 700;
      `}
    }
    h3 {
      font-size: 30px;
      padding: 5px 0;
      letter-spacing: 1.5px;
      ${CustomMediaStyle.lessThan('tablet')`
      font-size: 22px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
      font-size: 18px;
      `}
    }
  }
`;

export default TopBannerBox;
