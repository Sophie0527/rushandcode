import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function CategoryBox(props) {
  const { mainCategory, subCategory } = props;
  console.log(subCategory);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/CategoryData/products.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, [setCategoryData]);

  const best = categoryData
    .filter((best) => best.category === '베스트')
    .map((best) => best.sub_category);

  const newProduct = categoryData
    .filter((newProduct) => newProduct.category === '신제품')
    .map((newProduct) => newProduct.sub_category);

  const bath = categoryData
    .filter((bath) => bath.category === '배쓰')
    .map((bath) => bath.sub_category);

  const shower = categoryData
    .filter((shower) => shower.category === '샤워')
    .map((shower) => shower.sub_category);

  const body = categoryData
    .filter((body) => body.category === '보디')
    .map((body) => body.sub_category);

  const face = categoryData
    .filter((face) => face.category === '페이스')
    .map((face) => face.sub_category);

  const hair = categoryData
    .filter((hair) => hair.category === '헤어')
    .map((hair) => hair.sub_category);

  const makeup = categoryData
    .filter((makeup) => makeup.category === '메이크업')
    .map((makeup) => makeup.sub_category);

  const perfume = categoryData
    .filter((perfume) => perfume.category === '퍼퓸')
    .map((perfume) => perfume.sub_category);

  const gift = categoryData
    .filter((gift) => gift.category === '기프트')
    .map((gift) => gift.sub_category);

  const vegan = categoryData
    .filter((vegan) => vegan.category === '비건')
    .map((vegan) => vegan.sub_category);

  const newService = categoryData
    .filter((newService) => newService.category === '신규서비스')
    .map((newService) => newService.sub_category);

  return (
    <Container>
      <Total className={subCategory === null ? 'active' : 'inactive'}>
        전체
      </Total>
      {mainCategory === '베스트' && (
        <>
          {best.map((best, i) => {
            return (
              <div key={i}>
                {best.map((best, i) => {
                  return <span key={i}>{best}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '신제품' && (
        <>
          {newProduct.map((newProduct, i) => {
            return (
              <div key={i}>
                {newProduct.map((newProduct, i) => {
                  return <span key={i}>{newProduct}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '배쓰' && (
        <>
          {bath.map((bath, i) => {
            return (
              <div key={i}>
                {bath.map((bath, i) => {
                  return <span key={i}>{bath}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '샤워' && (
        <>
          {shower.map((shower, i) => {
            return (
              <div key={i}>
                {shower.map((shower, i) => {
                  return <span key={i}>{shower}</span>;
                })}
              </div>
            );
          })}
        </>
      )}{' '}
      {mainCategory === '보디' && (
        <>
          {body.map((body, i) => {
            return (
              <div key={i}>
                {body.map((body, i) => {
                  return <span key={i}>{body}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '페이스' && (
        <>
          {face.map((face, i) => {
            return (
              <div key={i}>
                {face.map((face, i) => {
                  return <span key={i}>{face}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '헤어' && (
        <>
          {hair.map((hair, i) => {
            return (
              <div key={i}>
                {hair.map((hair, i) => {
                  return <span key={i}>{hair}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '메이크업' && (
        <>
          {makeup.map((makeup, i) => {
            return (
              <div key={i}>
                {makeup.map((makeup, i) => {
                  return <span key={i}>{makeup}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '퍼퓸' && (
        <>
          {perfume.map((perfume, i) => {
            return (
              <div key={i}>
                {perfume.map((perfume, i) => {
                  return <span key={i}>{perfume}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '기프트' && (
        <>
          {gift.map((gift, i) => {
            return (
              <div key={i}>
                {gift.map((gift, i) => {
                  return <span key={i}>{gift}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '비건' && (
        <>
          {vegan.map((vegan, i) => {
            return (
              <div key={i}>
                {vegan.map((vegan, i) => {
                  return <span key={i}>{vegan}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
      {mainCategory === '신규서비스' && (
        <>
          {newService.map((newService, i) => {
            return (
              <div key={i}>
                {newService.map((newService, i) => {
                  return <span key={i}>{newService}</span>;
                })}
              </div>
            );
          })}
        </>
      )}
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
  span {
    font-size: 19px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: #949494;
    padding-right: 20px;
    cursor: pointer;
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
  }
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

export default CategoryBox;
