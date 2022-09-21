import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function TopBannerBox(props) {
  const { mainCategory } = props;

  return (
    <Container>
      <div>
        <h1>{mainCategory}</h1>
        <h3>
          {mainCategory === '베스트' &&
            '누구나 좋아하는 인기 제품을 만나 보세요!'}
          {mainCategory === '신제품' &&
            '따끈 따끈한 신제품을 가장 먼저 만나 보세요!'}
          {mainCategory === '배쓰' && '당신에게 향기로운 입욕을 선물합니다'}
          {mainCategory === '샤워' &&
            '일렁이는 향기와 함께 피부를 건간하게 지켜주세요'}
          {mainCategory === '보디' &&
            '늘 당신의 피부를 향긋하고 건강하세 빛내줄 거예요'}
          {mainCategory === '페이스' &&
            '신선한 재료로 만들어 믿을 수 있는 제품이에요'}
          {mainCategory === '헤어' &&
            '실리콘 성분 없이 건강한 재료만 담아 매일 더 싱그럽게'}
          {mainCategory === '메이크업' &&
            '다른 누구도 아닌, 가장 나다운 느낌을 표현해 보세요'}
          {mainCategory === '퍼퓸' &&
            '자연과 음악, 사가 주는 영감으로 빚어낸 특별한 향기'}
          {mainCategory === '기프트' &&
            '환경을 배려한 선물의 감동은 긴 여운을 남길 거예요'}
          {mainCategory === '비건' && '환경과 고객 모두를 위한 제품'}
          {mainCategory === '신규서비스' && '준비중이에요! 우리곧 만나요:)'}
        </h3>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2015/08/25/03/51/toner-906142_1280.jpg"
        alt="best"
      ></img>
    </Container>
  );
}

const Container = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    ${CustomMediaStyle.lessThan('tablet')`
    height: 400px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    height: 300px;
    `}
  }
  div {
    background-color: rgba(0, 0, 0, 0.4);
    color: white;
    width: 100%;
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    ${CustomMediaStyle.lessThan('tablet')`
    height: 400px;
    `}
    ${CustomMediaStyle.lessThan('mobile')`
    height: 300px;
    `}
    h1 {
      font-family: 'Nanum Brush Script', cursive;
      font-style: italic;
      font-size: 130px;
      font-weight: 700;
      padding: 5px 0;
      ${CustomMediaStyle.lessThan('tablet')`
      font-size: 110px;
      font-weight: 700;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
      font-size: 100px;
      font-weight: 700;
      `}
    }
    h3 {
      font-size: 30px;
      padding: 5px 0;
      letter-spacing: 1.5px;
      ${CustomMediaStyle.lessThan('tablet')`
      font-size: 22px;
      `}
      ${CustomMediaStyle.lessThan('mobile')`
      font-size: 18px;
      `}
    }
  }
`;

export default TopBannerBox;
