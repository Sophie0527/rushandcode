import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function TopBannerBox(props) {
  const { mainCategory, subCategory } = props;

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/CategoryData/Products.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, [setCategory]);

  return (
    <>
      {category
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
