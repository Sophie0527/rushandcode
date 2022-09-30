import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function SubBanner() {
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

  const settings = {
    infinite: true, //무한 반복 옵션
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    autoplay: true, // 자동 스크롤 사용 여부
    autoplatSpeed: 8000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    slidesToShow: 3, // 한 화면에 보여질 컨텐츠 개수
    sliedsToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    centerMode: true,
    centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    draggable: true, //드래그 가능 여부
    pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
  };

  return (
    <Container>
      <SubBannerBox>
        <div>
          <h2>
            # 나만 알고 싶은 향기 <br /># 프래그런스 <br /># 리미티드 기프트
          </h2>
        </div>
        <img
          alt="SubBanner"
          src="https://cdn.pixabay.com/photo/2018/02/01/15/53/soap-3123468_1280.jpg"
        ></img>
      </SubBannerBox>
      <BestProduct>
        <h1>BEST</h1>
        <h3>지금 가장 인기있는 제품을 만나보세요!</h3>
        <StyledSlider {...settings}>
          {products
            // 상품의 리뷰의 수가 3개 이상인 것을 필터링하고 mapping하기
            .filter((product) => product.reviews.length > 2)
            .map((product, idx) => {
              return (
                <Link to={`/productDetail/${product.id}`} key={idx}>
                  <Banner>
                    <img src={product.img} alt={product.product_name} />
                    <ProductInfo>
                      <h4>{product.product_name}</h4>
                      <span>{product.hashtag}</span>
                      <p>
                        ₩&nbsp;
                        {product.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </p>
                    </ProductInfo>
                  </Banner>
                </Link>
              );
            })}
        </StyledSlider>
      </BestProduct>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  ${CustomMediaStyle.lessThan('tablet')`
    flex-direction: column;
    justify-content: center;
    margin-bottom: 70px;
  `}
`;

const SubBannerBox = styled.div`
  width: 42%;
  position: relative;
  ${CustomMediaStyle.lessThan('tablet')`
    width: 100%;
  `}
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    vertical-align: middle;
    ${CustomMediaStyle.lessThan('desktop')`
    height: 400px;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    height: 150px;
    `}
  }
  div {
    display: flex;
    justify-content: center;
    h2 {
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      color: white;
      font-size: 25px;
      font-weight: 800;
      line-height: 40px;
      ${CustomMediaStyle.lessThan('tablet')`
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      `}
    }
  }
`;

const BestProduct = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${CustomMediaStyle.lessThan('desktop')`
  width: 55%;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
   width: 80%;
   margin-left: 10%;
  `}
  h1 {
    font-size: 40px;
    font-weight: 900;
    ${CustomMediaStyle.lessThan('desktop')`
    font-size: 35px;
    font-weight: 800;
    `}
    ${CustomMediaStyle.lessThan('tablet')`
    margin-top: 7%;
    `}
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
    padding: 10px 0;
    ${CustomMediaStyle.lessThan('desktop')`
    font-size: 16px;
    `}
  }
`;

const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: column;
  text-align: center;
  .slick-list {
    width: 100%;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-prev {
    left: -10px;
    z-index: 90;
  }
  .slick-prev:before {
    font-size: 25px;
    color: black;
  }
  .slick-next {
    right: 5px;
    z-index: 90;
    ${CustomMediaStyle.lessThan('tablet')`
    right: -20px;
    `}
  }
  .slick-next:before {
    font-size: 25px;
    color: black;
  }
  a {
    text-decoration: none;
  }
`;

const Banner = styled.div`
  position: relative;
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    margin-top: -20px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: black;
    font-size: 20px;
    font-weight: 800;
    margin-top: -15px;
    ${CustomMediaStyle.lessThan('desktop')`
    font-size: 17px;
    padding-right: 2px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 15px;
    `}
  }
  span {
    font-size: 16px;
    font-weight: 400;
    padding: 10px 0;
    font-style: italic;
    color: #4c4c4c;
    ${CustomMediaStyle.lessThan('desktop')`
    font-size: 13px;
    padding-right: 2px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 11px;
    padding-right: 15px;
    `}
  }
  p {
    font-size: 18px;
    font-weight: 500;
    padding: 5px 0;
    color: #4c4c4c;
    ${CustomMediaStyle.lessThan('desktop')`
    font-size: 15px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    font-size: 13px;
    `}
  }
`;

export default SubBanner;
