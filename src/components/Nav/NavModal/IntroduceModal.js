import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function IntroduceModal(props) {
  const { introduceOpen } = props;
  // introduce의 목데이터를 fetch하여 introduce 배열에 담기
  const [introduction, setIntroduction] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/CategoryData/introduce.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setIntroduction(data);
      });
  }, [setIntroduction]);

  return (
    <>
      {introduceOpen ? (
        <Container>
          {introduction.map((introduce, idx) => {
            return (
              <CategoryList key={idx}>
                <li>
                  <span>{introduce.category}</span>
                </li>
                {introduction[idx].sub_category.map((sub_category, i) => {
                  return (
                    <li key={i}>
                      <p>{sub_category}</p>
                    </li>
                  );
                })}
              </CategoryList>
            );
          })}
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  display: flex;
  justify-content: space-between;
  ${CustomMediaStyle.lessThan('tablet')`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`;

const CategoryList = styled.ul`
  background-color: white;
  width: 100%;
  height: 300px;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.4);
  ${CustomMediaStyle.lessThan('desktop')`
    height: 250px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
    display: flex;
    padding: 0px;
    height: 40%;
  `}
  li {
    color: black;
    display: flex;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    letter-spacing: 1px;
    ${CustomMediaStyle.lessThan('desktop')`
      padding: 8px 0px;
    `}
    span:hover {
      color: #ef7300;
    }
    p:hover {
      color: #ef7300;
    }
    span {
      font-size: 17px;
      font-weight: 800;
      letter-spacing: 1px;
      ${CustomMediaStyle.lessThan('desktop')`
        font-size : 15px;
      `}
      ${CustomMediaStyle.lessThan('tablet')`
        font-size : 17px;
        width: 90px;
        padding-left: 15px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
        font-size : 15px;
        width: 80px;
      `}
    }
    p {
      font-size: 15px;
      letter-spacing: -0.5px;
      color: #595959;
      ${CustomMediaStyle.lessThan('desktop')`
        font-size : 13px;
      `}
      ${CustomMediaStyle.lessThan('tablet')`
        font-size : 14px;
        padding : 0 10px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
        font-size : 13px;
        padding : 0 8px;
      `}
    }
  }
`;

export default IntroduceModal;
