import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function ProductEssentialInfoBox() {
  return (
    <ReviewBox>
      <ReviewContent>
        <span>제품 주요 사양</span>
        <p>모든 피부용</p>
      </ReviewContent>
      <ReviewContent>
        <span>사용기한</span>
        <p>
          이 제품의 최적의 사용기한은 제조일자로부터 14개월입니다. 당사의
          쇼핑몰에서는 제조년월일이 가장 빠른 상품부터 선출고 진행되고 있으며,
          제품의 입출고가 빈번하여 온라인상에 상세 제조년월일 기재가 어려운 점
          양해 바랍니다. 수령하신 상품에 부착된 라벨에 제조일자가 년/월/일의
          순으로 기재되어 개별 확인이 가능합니다. 추가 문의는 고객센터
          1234-5678로 문의주시면 상세히 안내 드리겠습니다.
        </p>
      </ReviewContent>
      <ReviewContent>
        <span>사용방법</span>
        <p>
          적당량을 손이나 스폰지에 덜어 몸에 부드럽게 문지르며 거품을 내어
          샤워합니다.
        </p>
      </ReviewContent>
    </ReviewBox>
  );
}

const ReviewBox = styled.div`
  margin: 0 200px 100px;
  ${CustomMediaStyle.lessThan('desktop')`
  margin: 0 50px 100px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  margin: 0 20px 100px;
  `}
`;

const ReviewContent = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0;
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
  span {
    width: 20%;
    font-size: 19px;
    font-weight: 700;
    color: #606060;
    ${CustomMediaStyle.lessThan('mobile')`
    width: 30%;
    font-size: 17px;
    font-weight: 700;
  `}
  }
  p {
    width: 80%;
    line-height: 27px;
    font-size: 18px;
    ${CustomMediaStyle.lessThan('mobile')`
    width: 70%;
    font-size: 16px;
  `}
  }
`;

export default ProductEssentialInfoBox;
