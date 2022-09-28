import React from 'react';
import styled from 'styled-components';
import { CustomMediaStyle } from '../../../styles/CustomMediaStyle';

function ProductshippingBox() {
  return (
    <ShippingBox>
      <p>
        ■ 배송비 : 기본배송료는 2,500원 입니다. (도서, 산간, 오지 일부지역은
        배송비가 추가될 수 있습니다)
      </p>
      <p>■ 택배사 : 우체국 택배를 이용합니다.</p>
      <p>■ 배송가능지역 : 국내 배송 가능 / 해외 배송은 불가합니다.</p>
      <br />
      <p>■ 홈페이지에서 구매한 경우</p>
      <p>
        - 러쉬 코리아 홈페이지에서 구매한 제품은 홈페이지를 통해서만 교환이
        가능합니다.
      </p>
      <p>
        - 고객님의 변심에 의한 반품인 경우 상품 및 서비스를 공급 받으느 날로
        부터 7일 이내 가능하며, 미 개봉 제품만 가능합니다.
      </p>
      <p>
        - 고객센터(1234-5678)로 반품 접수를 받고 있으며, 지정 택배사를 이용하여
        상품 회수 후 교환/반품 여부에 관한 안내가 이루어집니다.
      </p>
      <br />
      <p>
        ∙ 고객변심으로 인한 교환시 초도 택배 비용을 포함한 반품 택배 비용이
        부과됩니다.
      </p>
      <p>
        ∙ 상품결합으로 인한 교환의 경우 러쉬코리아에서 택배비용을 부담합니다.
      </p>
      <p>∙ 택배비용은 무통장 입금을 통해서만 결제 가능합니다.</p>
      <p>
        ∙ 교환 상품에 스마트 샘플 또한 깜짝 선물이 있는 경우, 함께 반품하여야
        교환이 진행됩니다.
      </p>
      <p>
        ∙ 프레쉬 마스크를 포함하여 냉장배송을 받은 제품은 교환이 불가합니다.
      </p>
      <br />
      <p>■ 휴대폰 소액 결제 시 꼭 참고해주세요.</p>
      <p>
        휴대폰 소액 결제는 익월 결제 취소가 불가한 통신사 정책으로 인해,
        당월(1일~31일)에 한한 결제 건만 취소/환불할 수 있습니다.
      </p>
      <p>또한 부분 결제 취소 불가하오니 주문 시 유의 바랍니다.</p>
      <br />
      <p>■ 고객 센터</p>
      <p>- 주말과 공휴일을 제외한 매일 운영시간 내 응답 가능합니다.</p>
      <p>- 이메일 ssh30510044@gmail.com</p>
      <p>- 상담 전화 : 13:00 ~ 16:00 (1234-5678)</p>
    </ShippingBox>
  );
}

const ShippingBox = styled.div`
  margin: 0 200px 100px;
  ${CustomMediaStyle.lessThan('desktop')`
  margin: 0 50px 100px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
  margin: 0 20px 100px;
  `}
  p {
    font-size: 14px;
    padding: 5px 0;
  }
`;

export default ProductshippingBox;
