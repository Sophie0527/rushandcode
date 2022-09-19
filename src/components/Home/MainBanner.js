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
              <div>
                <span>{main.title}</span>
                <p>{main.sub_title}</p>
              </div>
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
  .slick-prev {
    left: 50px;
    position: absolute;
    z-index: 90;
    ${CustomMediaStyle.lessThan('tablet')`
    left: 20px;
    `}
  }
  .slick-prev:before {
    font-size: 30px;
    color: black;
  }
  .slick-next {
    right: 60px;
    position: absolute;
    z-index: 90;
    ${CustomMediaStyle.lessThan('tablet')`
    right: 30px;
    `}
  }
  .slick-next:before {
    font-size: 30px;
    color: black;
  }
`;

const Banner = styled.div`
  position: relative;
  background-color: #d5d4da;
  width: 100%;
  div {
    position: absolute;
    margin: 150px 100px;
    ${CustomMediaStyle.lessThan('tablet')`
    margin: 100px 50px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    margin: 80px 50px;
    font-weight: 600;
    `}
    span {
      font-size: 60px;
      font-weight: 700;
      text-shadow: -1px 0px whitesmoke, 0px 1px whitesmoke, 1px 0px whitesmoke,
        0px -1px whitesmoke;
      ${CustomMediaStyle.lessThan('tablet')`
        font-size: 50px;
        font-weight: 700;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
        font-size: 40px;
        font-weight: 600;
      `}
    }
    p {
      padding-top: 20px;
      font-size: 30px;
      font-style: italic;
      text-shadow: -0.5px 0px whitesmoke, 0px 0.5px whitesmoke,
        0.5px 0px whitesmoke, 0px -0.5px whitesmoke;
      ${CustomMediaStyle.lessThan('tablet')`
        font-size: 20px;
      `}
    }
  }
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
