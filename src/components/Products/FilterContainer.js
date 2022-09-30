import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function FilterContainer(props) {
  const { navigate, subCategory, basicURL, mainURL, mainSubURL, sort } = props;
  const [filterOpen, setFilterOpen] = useState(false);

  // 필터박스 클릭 시 메뉴박스 생성 또는 숨기기
  const openFilterBox = () => {
    if (!filterOpen) {
      setFilterOpen(true);
    } else {
      setFilterOpen(false);
    }
  };
  // 해당 필터메뉴 클릭 시 메뉴박스 숨기기
  const closeFilterBox = () => {
    if (filterOpen) {
      setFilterOpen(false);
    }
  };

  return (
    <Container>
      <FilterBox onClick={openFilterBox}>
        <span>{sort}</span>
        <img
          src="https://img.icons8.com/ios-filled/344/expand-arrow.png"
          alt="아래화실표"
        ></img>
      </FilterBox>
      {filterOpen ? (
        <Filter onClick={closeFilterBox}>
          {/* url의 query에서 subCategory가 null일 경우 mainURL(?mainCategory=${mainCategory})로 하고 이동. */}
          {subCategory === null && (
            <>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainURL}${'&sort=추천순'}`);
                }}
              >
                추천순
              </span>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainURL}${'&sort=낮은 가격순'}`);
                }}
              >
                낮은 가격순
              </span>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainURL}${'&sort=높은 가격순'}`);
                }}
              >
                높은 가격순
              </span>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainURL}${'&sort=리뷰많은 순'}`);
                }}
              >
                리뷰많은 순
              </span>
            </>
          )}
          {/* url의 query에서 subCategory가 null이 아닐 경우 mainSubURL(?mainCategory=${mainCategory}&subCategory=${subCategory})로 하고 이동. */}
          {subCategory && (
            <>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainSubURL}${'&sort=추천순'}`);
                }}
              >
                추천순
              </span>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainSubURL}${'&sort=낮은 가격순'}`);
                }}
              >
                낮은 가격순
              </span>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainSubURL}${'&sort=높은 가격순'}`);
                }}
              >
                높은 가격순
              </span>
              <span
                onClick={() => {
                  navigate(`${basicURL}${mainSubURL}${'&sort=리뷰많은 순'}`);
                }}
              >
                리뷰많은 순
              </span>
            </>
          )}
        </Filter>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  ${CustomMediaStyle.lessThan('tablet')`
  padding-left: 80%;
  padding-top: 20px;
  `}
`;

const FilterBox = styled.div`
  height: 50px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  ${CustomMediaStyle.lessThan('tablet')`
  display: flex;
  justify-content: right;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  height: 40px;
  padding: 0 10px;
  `}
  span {
    width: 100px;
    font-size: 18px;
    letter-spacing: 1px;
    ${CustomMediaStyle.lessThan('mobile')`
    width: 85px;
    font-size: 16px;
    `}
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
  ${CustomMediaStyle.lessThan('mobile')`
  width: 120px;
  padding: 5px 0;
  `}
  span:hover {
    background-color: #eaeaea;
  }
  span {
    cursor: pointer;
    padding: 15px 20px;
    font-size: 18px;
    letter-spacing: 1px;
    ${CustomMediaStyle.lessThan('mobile')`
    padding: 10px 10px;
    font-size: 16px;
    letter-spacing: 0.5px;
   `}
  }
`;

export default FilterContainer;
