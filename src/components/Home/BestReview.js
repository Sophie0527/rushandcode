import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineShopping } from 'react-icons/ai';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function BestReview() {
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

  const [like, setLike] = useState([false, false, false, false, false]);
  const tmp = [false, false, false, false, false];
  const likeBtn = (index) => {
    if (like[index] === false) {
      tmp[index] = true;
      setLike(tmp);
    }
    setLike(tmp);
  };

  const settings = {
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    infinite: true, //무한 반복 옵션
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    autoplay: true, // 자동 스크롤 사용 여부
    autoplatSpeed: 8000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
    sliedsToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    centerMode: true,
    centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    draggable: true, //드래그 가능 여부
    pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {products
          .filter(
            (product) =>
              product.reviews.length > 0 && product.reviews[0].star === '★★★★★'
          )
          .map((product, idx) => {
            return (
              <Banner key={idx}>
                <span>{product.reviews[0].star}</span>
                <ProductName>
                  <h2>{product.product_name}</h2>
                  <div>
                    {like[idx] === false ? (
                      <AiOutlineHeart size="24" onClick={() => likeBtn(idx)} />
                    ) : (
                      <AiFillHeart
                        size="24"
                        color="tomato"
                        onClick={() => likeBtn(idx)}
                      />
                    )}
                    <AiOutlineShopping size="24" />
                  </div>
                </ProductName>
                <Link to={`/productDetail/${product.id}`}>
                  <img src={product.sub_img} alt={product.product_name} />
                </Link>
                <ReviewText>
                  {product.reviews[0].content.length < 45 ? (
                    <>{product.reviews[0].content}</>
                  ) : (
                    <>{product.reviews[0].content.substr(0, 44) + '...'}</>
                  )}
                </ReviewText>
                <UserName>
                  {product.reviews[0].user_name.replace(/(?<=.{1})./, '*')}
                </UserName>
              </Banner>
            );
          })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 120px;
  height: 650px;
  ${CustomMediaStyle.lessThan('desktop')`
  height: 550px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  height: 400px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  height: 350px;
  `}
`;

const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: column;
  .slick-list {
    width: 85%;
    margin: 0 auto;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    position: relative;
  }
  .slick-next {
    right: 0px;
  }
`;

const Banner = styled.div`
  position: relative;
  margin-left: 5%;
  span {
    letter-spacing: 2.5px;
    font-size: 18px;
    ${CustomMediaStyle.lessThan('desktop')`
    font-size: 15px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 13px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 11px;
    `}
  }
  img {
    background-color: #eaeaea;
    display: block;
    width: 90%;
    object-fit: cover;
  }
`;

const ProductName = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 5px 0;
  h2 {
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    ${CustomMediaStyle.lessThan('desktop')`
    font-size: 27px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    font-size: 20px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 17px;
    `}
  }
  div {
    display: flex;
    justify-content: center;
    text-align: center;
    svg {
      width: 25px;
      cursor: pointer;
      ${CustomMediaStyle.lessThan('desktop')`
      width: 20px;
      `}
      ${CustomMediaStyle.lessThan('tablet')`
      width: 17px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
      width: 14px;
      `}
    }
  }
`;

const ReviewText = styled.div`
  width: 90%;
  font-size: 18px;
  padding: 10px 0;
  line-height: 25px;
  color: #636363;
  font-weight: 500;
  ${CustomMediaStyle.lessThan('desktop')`
  font-size: 15px;
  line-height: 22px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  font-size: 13px;
  line-height: 20px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  font-size: 11px;
  line-height: 15px;
  `}
`;

const UserName = styled.div`
  width: 90%;
  font-size: 18px;
  padding: 10px 0;
  letter-spacing: 1px;
  color: #636363;
  font-weight: 500;
  ${CustomMediaStyle.lessThan('desktop')`
  font-size: 15px;
  padding: 5px 0;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
  font-size: 13px;
  padding: 0px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  font-size: 11px;
  padding: 0px;
  `}
`;

export default BestReview;
