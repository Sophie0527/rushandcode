import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
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
    dots: true,
    infinite: false,
    speed: 500,
    autoplay: true,
    autoplatSpeed: 2000,
    slidesToShow: 1,
    sliedsToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <Container>
      <MainBanner>
        <StyledSlider {...settings}>
          {mainBanner.map((main, idx) => {
            return (
              <Banner key={idx}>
                <img src={main.src} alt={main.alt} />
              </Banner>
            );
          })}
        </StyledSlider>
      </MainBanner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
`;

const MainBanner = styled.div`
  padding-top: 120px;
  height: 100vh;
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
    position: relative;
  }
  .slick-prev {
    left: 50px;
    position: absolute;
    z-index: 1000;
  }
  .slick-prev:before {
    font-size: 30px;
    color: black;
  }
  .slick-next {
    right: 60px;
    position: absolute;
    z-index: 100;
  }
  .slick-next:before {
    font-size: 30px;
    color: black;
  }

  .button {
    /* margin-left: 100px;
    margin-right: 100px; */
    position: absolute;
    z-index: 1000;
    left: 100px;
    /* width: 100px; */
  }
`;

const Banner = styled.div`
  position: relative;
  background-color: #d5d4da;
  width: 100%;
  img {
    display: block;
    margin: auto;
    height: 650px;
    width: 100%;
    object-fit: cover;
  }
`;

export default Home;
