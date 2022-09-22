import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function CategoryBox(props) {
  const { mainCategory, subCategory } = props;
  const navigate = useNavigate();

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
      <Total
        className={subCategory === null ? 'active' : 'inactive'}
        onClick={() => {
          navigate(`${'/products?mainCategory='}${mainCategory}`);
        }}
      >
        전체
      </Total>
      {mainCategory === '베스트' && (
        <>
          {best.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '신제품' && (
        <>
          {newProduct.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '배쓰' && (
        <>
          {bath.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '샤워' && (
        <>
          {shower.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '보디' && (
        <>
          {body.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '페이스' && (
        <>
          {face.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '헤어' && (
        <>
          {hair.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '메이크업' && (
        <>
          {makeup.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '퍼퓸' && (
        <>
          {perfume.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '기프트' && (
        <>
          {gift.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '비건' && (
        <>
          {vegan.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
      {mainCategory === '신규서비스' && (
        <>
          {newService.map((data, i) => {
            return (
              <SubTextWrap key={i}>
                {data.map((data, i) => {
                  return (
                    <div key={i}>
                      <SubText
                        subCategory={subCategory}
                        data={data}
                        mainCategory={mainCategory}
                      />
                    </div>
                  );
                })}
              </SubTextWrap>
            );
          })}
        </>
      )}
    </Container>
  );
}

function SubText(props) {
  const { data, subCategory, mainCategory } = props;
  const navigate = useNavigate();

  const mainURL = `/products?mainCategory=${mainCategory}`;
  console.log(mainURL);

  return (
    <SubSpan
      className={subCategory === data ? 'active' : 'inactive'}
      onClick={() => {
        navigate(`${mainURL}${'&subCategory='}${data}`);
      }}
    >
      {data}
    </SubSpan>
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
