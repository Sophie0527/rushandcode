import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function MainBanner() {
  const [mainBanner, setMainBanner] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/BannerData/MainBanner.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setMainBanner(data);
      });
  }, [setMainBanner]);

  const settings = {
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    infinite: true, //무한 반복 옵션
    speed: 500, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    autoplay: true, // 자동 스크롤 사용 여부
    autoplatSpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    sliedsToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    centerMode: true,
    centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    draggable: true, //드래그 가능 여부
    pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {mainBanner.map((main, idx) => {
          return (
            <Banner key={idx}>
              <img src={main.src} alt={main.alt} />
            </Banner>
          );
        })}
      </StyledSlider>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 100px;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  flex-direction: column;
  .slick-list {
    width: 98%;
    margin: 0 auto;
  }
  .slick-slide div {
    outline: none;
  }
  .slick-dots {
    padding-left: 40%;
  }
  .slick-prev {
    left: 50px;
    position: absolute;
    z-index: 90;
  }
  .slick-prev:before {
    font-size: 30px;
    color: black;
  }
  .slick-next {
    right: 60px;
    position: absolute;
    z-index: 90;
  }
  .slick-next:before {
    font-size: 30px;
    color: black;
  }

  .button {
    position: absolute;
    z-index: 1000;
    left: 100px;
  }
`;

const Banner = styled.div`
  position: relative;
  background-color: #d5d4da;
  width: 100%;
  img {
    height: 650px;
    width: 100%;
    object-fit: cover;
    ${CustomMediaStyle.lessThan('desktop')`
    height: 550px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    height: 450px;
    `}
  }
`;

export default MainBanner;
