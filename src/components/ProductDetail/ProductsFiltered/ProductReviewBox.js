import React, { useState } from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function ProductReviewBox(props) {
  const { product } = props;

  // <오늘 날짜 year-month-day 형태로 보여주기>
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const dateString = year + '-' + month + '-' + day;

  // 상품 리뷰 배열를 변수로 만들고, 배열이 바뀔 수 있게 state로 만들기
  const reviewList = product.reviews;
  const [reviewState, setReviewState] = useState(reviewList);

  // <리뷰 구현하기 1~6>
  // 1. input창의 입력 값을 setState에 담기
  // 2. 선택하는 별점에 따라 변경 될 수 있도록 state 만들기
  // 3. 추가되야할 필요한 리뷰 정보를 객체로 state 만들기
  const [inputComment, setInputComment] = useState('');
  const [selectStar, setSelectStar] = useState('★★★★★');
  const [newComment, setNewComment] = useState({
    id: '',
    user_name: '손소희',
    content: '',
    star: '★★★★★',
    date: '',
  });

  // 4. input창에 onChange 이벤트 시,
  //    setState(setInputComment)를 입력값으로 바꾸고
  //    newComment에서 content 값을 입력값으로 지정하고
  //    star를 선택되는 별점으로 지정하고
  //    날짜는 현재 날짜로 지정하고
  //    배열 데이터에 id값을 추가해 입력된 객체 만들어 담아두기!
  const onChange = (e) => {
    setInputComment(e.target.value);
    setNewComment({
      ...newComment,
      content: e.target.value,
      star: selectStar,
      date: dateString,
      id: reviewList.length + 1,
    });
  };

  // 5. 엔터 또는 게시 버튼 클릭 시,
  //    newComment에 담아둔 객체를 reviewList에 추가해주고
  //    setNewComment로 content의 값과 star의 값을 다시 초기화해주고
  //    setInputComment로 input창의 글도 초기화해주기!
  const addNewComment = () => {
    setReviewState(reviewList.push(newComment));
    setNewComment({ ...newComment, content: '', star: '' });
    setInputComment('');
    setSelectStar('★★★★★');
  };
  // 리뷰 input창에 글자가 1자 이상 이라면,
  // 게시버튼 색상변경 및 클릭가능하고 엔터로 등록가능 조건!
  const validation = (inputComment) => {
    if (inputComment.length < 1) {
      return false;
    }
    return true;
  };
  const valid = validation(inputComment);

  return (
    <ReviewBox>
      <h1>총&nbsp;{reviewList.length}개의 후기</h1>
      {reviewList.map((review, idx) => {
        return (
          <ReviewContent key={idx}>
            <ReviewLeftBox>
              <div>
                <span>{review.star}</span>
                <p>{review.user_name.replace(/(?<=.{1})./, '*')}</p>
              </div>
              <ReviewText>{review.content}</ReviewText>
            </ReviewLeftBox>
            <ReviewRightBox>
              <p>{review.date}</p>
            </ReviewRightBox>
          </ReviewContent>
        );
      })}

      <h2>리뷰 작성하기</h2>
      <ReviewContainer>
        <StarBoxContainer>
          <p>•리뷰작성 시 별점을 선택해주세요.</p>
          <StarBox>
            <span
              onClick={() => {
                setSelectStar('★☆☆☆☆');
              }}
            >
              ★☆☆☆☆
            </span>
            <span
              onClick={() => {
                setSelectStar('★★☆☆☆');
              }}
            >
              ★★☆☆☆
            </span>
            <span
              onClick={() => {
                setSelectStar('★★★☆☆');
              }}
            >
              ★★★☆☆
            </span>
            <span
              onClick={() => {
                setSelectStar('★★★★☆');
              }}
            >
              ★★★★☆
            </span>
            <span
              onClick={() => {
                setSelectStar('★★★★★');
              }}
            >
              ★★★★★
            </span>
          </StarBox>
        </StarBoxContainer>
        <ReviewInfo>
          <div>
            <span>{selectStar}</span>
            <p>손소희</p>
          </div>
          <span>{dateString}</span>
        </ReviewInfo>
        <InputContainer>
          <InputBox>
            <input
              placeholder="리뷰 작성하기..."
              value={inputComment}
              type="text"
              onChange={onChange}
              onKeyDown={(e) => {
                if (e.keyCode === 13 && valid) {
                  addNewComment();
                }
              }}
            ></input>
          </InputBox>
          <ButtonBox>
            <button
              className={valid ? 'active' : 'inactive'}
              disabled={!valid}
              onClick={() => {
                addNewComment();
              }}
            >
              게시
            </button>
          </ButtonBox>
        </InputContainer>
      </ReviewContainer>
    </ReviewBox>
  );
}

const ReviewBox = styled.div`
  margin: 0 150px 100px;
  ${CustomMediaStyle.lessThan('desktop')`
  margin: 0 50px 100px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  margin: 0 20px 100px;
  `}
  h1 {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 40px;
    border-bottom: 1px solid #949494;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 23px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    padding-bottom: 20px;
    `}
  }
  h2 {
    font-size: 25px;
    font-weight: 600;
    padding-top: 80px;
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 23px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    padding-bottom: 20px;
    `}
  }
`;

const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 100px;
  border-bottom: 1px solid #949494;
  ${CustomMediaStyle.lessThan('desktop')`
  padding: 40px 50px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  padding: 30px 20px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  padding: 20px 10px;
  `}
`;

const ReviewLeftBox = styled.div`
  width: 80%;
  div {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    span {
      padding-right: 10px;
      font-size: 22px;
      ${CustomMediaStyle.lessThan('mobile')`
      font-size: 20px;
      `}
    }
    p {
      font-size: 15px;
      color: #949494;
    }
  }
`;

const ReviewText = styled.span`
  font-size: 17px;
  line-height: 25px;
  color: #535353;
  ${CustomMediaStyle.lessThan('mobile')`
  font-size: 16px;
  `}
`;

const ReviewRightBox = styled.div`
  ${CustomMediaStyle.lessThan('mobile')`
  font-size: 14px;
  `}
`;

const ReviewContainer = styled.div`
  margin-top: 30px;
  border: 1px solid black;
  ${CustomMediaStyle.lessThan('tablet')`
  margin-top: 20px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  margin-top: 0px;
  `}
`;

const StarBoxContainer = styled.div`
  width: 100%;
  background-color: black;
  padding: 10px 0;
  p {
    padding: 10px 15px 0;
    font-size: 15px;
    font-weight: 300;
    letter-spacing: 1px;
    color: white;
  }
`;

const StarBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
  span:hover {
    color: #ef7300;
  }
  span {
    background-color: #f4f4f4;
    border-radius: 5px;
    padding: 8px;
    margin: 10px;
    color: #999999;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    ${CustomMediaStyle.lessThan('mobile')`
      font-size: 15px;
      margin: 6px;
      padding: 5px;
    `}
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonBox = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  button {
    border: none;
    font-size: 18px;
    font-weight: 450;
    color: #999999;
    background-color: white;
    width: 100px;
    &.active {
      cursor: pointer;
      color: black;
    }
  }
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding-left: 50px;
    font-size: 16px;
    font-weight: 500;
    width: 800px;
    height: 100px;
    border: none;
    outline: none;
    text-align: start;
    ${CustomMediaStyle.lessThan('desktop')`
      width: 650px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
      width: 480px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
      width: 350px;
    `}
  }
`;

const ReviewInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
  div {
    display: flex;
    align-items: center;
    padding: 20px 45px;
    span {
      font-size: 18px;
      padding-right: 10px;
    }
    p {
      font-size: 15px;
      color: #999999;
    }
  }
`;

export default ProductReviewBox;
