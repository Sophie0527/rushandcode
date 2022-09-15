import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../Nav/image/rush_logo.png';
import styled from 'styled-components';
import MypageModal from './NavModal/MypageModal';
import ProductModal from './NavModal/ProductModal';
import IntroduceModal from './NavModal/IntroduceModal';
import { CustomMediaStyle } from '../../styles/CustomMediaStyle';

function Nav() {
  // nav mypage icon 😀 클릭 시 메뉴 박스 생성 (모달로 구현)
  const [mypageOpen, setMypageOpen] = useState(false);
  const openMypageModal = () => {
    if (!mypageOpen) {
      setMypageOpen(true);
      setProductOpen(false);
      setIntroduceOpen(false);
    } else {
      setMypageOpen(false);
    }
  };
  // nav '제품' 클릭 시 메뉴 박스 생성 (모달로 구현)
  const [productOpen, setProductOpen] = useState(false);
  const openProductModal = () => {
    if (productOpen === false) {
      setProductOpen(true);
      setIntroduceOpen(false);
      setMypageOpen(false);
    } else {
      setProductOpen(false);
    }
  };

  // nav '러쉬 소개' 클릭 시 메뉴 박스 생성 (모달로 구현)
  const [introduceOpen, setIntroduceOpen] = useState(false);
  const openIntroduceModal = () => {
    if (introduceOpen === false) {
      setIntroduceOpen(true);
      setProductOpen(false);
      setMypageOpen(false);
    } else {
      setIntroduceOpen(false);
    }
  };

  // 모달 닫기 기능
  const closeModal = () => {
    if (mypageOpen === true) {
      setMypageOpen(false);
    } else if (productOpen === true) {
      setProductOpen(false);
    } else if (introduceOpen === true) {
      setIntroduceOpen(false);
    }
  };
  // 로고 클릭 시 메인페이지로 이동 (+ window.location.reload() //리랜더링)
  const navigate = useNavigate();
  return (
    <Container onClick={closeModal}>
      <NavBox>
        <LogoBox
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
        >
          <img src={logo} alt="logo" />
        </LogoBox>
        <NavListBox>
          <ul>
            <li
              className={productOpen ? 'active' : 'inactive'}
              onClick={openProductModal}
            >
              제품
            </li>
            <li
              className={introduceOpen ? 'active' : 'inactive'}
              onClick={openIntroduceModal}
            >
              러쉬 소개
            </li>
            <li>매장 안내</li>
            <li>스파</li>
            <li>이벤트</li>
          </ul>
        </NavListBox>
        <MyPageBox>
          <ul>
            <li>
              <img
                alt="search"
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03NC41MzMzMywxNy4yYy0zMS41OTY0MiwwIC01Ny4zMzMzMywyNS43MzY5MiAtNTcuMzMzMzMsNTcuMzMzMzNjMCwzMS41OTY0MiAyNS43MzY5Miw1Ny4zMzMzMyA1Ny4zMzMzMyw1Ny4zMzMzM2MxMy43Mzk5OCwwIDI2LjM1ODM0LC00Ljg3OTE1IDM2LjI0NzY2LC0xMi45NzgzOWwzNC4yMzIwMywzNC4yMzIwM2MxLjQzODAyLDEuNDk3NzggMy41NzM0LDIuMTAxMTMgNS41ODI2LDEuNTc3MzVjMi4wMDkyLC0wLjUyMzc4IDMuNTc4MjYsLTIuMDkyODQgNC4xMDIwNCwtNC4xMDIwNGMwLjUyMzc4LC0yLjAwOTIgLTAuMDc5NTcsLTQuMTQ0NTggLTEuNTc3MzUsLTUuNTgyNmwtMzQuMjMyMDMsLTM0LjIzMjAzYzguMDk5MjQsLTkuODg5MzIgMTIuOTc4MzksLTIyLjUwNzY4IDEyLjk3ODM5LC0zNi4yNDc2NmMwLC0zMS41OTY0MiAtMjUuNzM2OTIsLTU3LjMzMzMzIC01Ny4zMzMzMywtNTcuMzMzMzN6TTc0LjUzMzMzLDI4LjY2NjY3YzI1LjM5OTM3LDAgNDUuODY2NjcsMjAuNDY3MyA0NS44NjY2Nyw0NS44NjY2N2MwLDI1LjM5OTM3IC0yMC40NjcyOSw0NS44NjY2NyAtNDUuODY2NjcsNDUuODY2NjdjLTI1LjM5OTM3LDAgLTQ1Ljg2NjY3LC0yMC40NjcyOSAtNDUuODY2NjcsLTQ1Ljg2NjY3YzAsLTI1LjM5OTM3IDIwLjQ2NzMsLTQ1Ljg2NjY3IDQ1Ljg2NjY3LC00NS44NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              ></img>
            </li>
            <li>
              <img
                alt="cart"
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xMTcuODQ2ODgsNDQuNDc4MTNsLTEuMDc1LC0xNC41MTI1Yy0xLjIwOTM4LC0xNS45OTA2MiAtMTQuNjQ2ODgsLTI4LjYyMTg3IC0zMC43NzE4OCwtMjguNjIxODdjLTE2LjEyNSwwIC0yOS42OTY4NywxMi42MzEyNSAtMzAuNzcxODcsMjguNjIxODhsLTEuMDc1LDE0LjUxMjVoLTE1LjQ1MzEyYy02LjMxNTYzLDAgLTExLjU1NjI1LDQuOTcxODggLTEyLjA5Mzc1LDExLjI4NzVsLTcuMjU2MjUsMTAxLjk5MDYzdjBjLTAuMjY4NzUsMy4zNTkzOCAwLjk0MDYyLDYuNzE4NzUgMy4yMjUsOS4xMzc1YzIuMjg0MzgsMi40MTg3NSA1LjUwOTM3LDMuODk2ODcgOC44Njg3NSwzLjg5Njg3aDEwOS4yNDY4N2MzLjM1OTM4LDAgNi41ODQzOCwtMS4zNDM3NSA4Ljg2ODc1LC0zLjg5Njg3YzIuMjg0MzcsLTIuNDE4NzUgMy40OTM3NSwtNS43NzgxMyAzLjIyNSwtOS4xMzc1bC03LjI1NjI1LC0xMDEuMDVjLTAuNTM3NSwtNi44NTMxMyAtNi4xODEyNSwtMTIuMDkzNzUgLTEzLjAzNDM4LC0xMi4wOTM3NWgtMTQuNjQ2ODd6TTYzLjI5MDYzLDMwLjUwMzEzYzAuODA2MjUsLTExLjgyNSAxMC43NSwtMjEuMDk2ODcgMjIuNzA5MzgsLTIxLjA5Njg3YzExLjk1OTM4LDAgMjEuOTAzMTMsOS4yNzE4OCAyMi43MDkzOCwyMS4wOTY4OGwwLjk0MDYyLDEzLjk3NWgtNDcuNDM0Mzh6TTEzNy40NjU2Miw1Ny4yNDM3NWw3LjI1NjI1LDEwMS4wNWMwLjEzNDM3LDEuMDc1IC0wLjI2ODc1LDIuMTUgLTEuMDc1LDMuMDkwNjJjLTAuODA2MjUsMC44MDYyNSAtMS44ODEyNSwxLjM0Mzc1IC0yLjk1NjI1LDEuMzQzNzVoLTEwOS4yNDY4OGMtMS4wNzUsMCAtMi4xNSwtMC40MDMxMiAtMi45NTYyNSwtMS4zNDM3NWMtMC44MDYyNSwtMC45NDA2MyAtMS4yMDkzOCwtMS44ODEyNSAtMS4wNzUsLTMuMDkwNjJ2MGw3LjI1NjI1LC0xMDEuOTkwNjJjMC4xMzQzOCwtMi4xNSAxLjg4MTI1LC0zLjc2MjUgNC4wMzEyNSwtMy43NjI1aDE0LjkxNTYzbC0wLjgwNjI1LDEwLjc1Yy0wLjEzNDM3LDIuMjg0MzggMS40NzgxMyw0LjE2NTYyIDMuNzYyNSw0LjNjMC4xMzQzOCwwIDAuMTM0MzgsMCAwLjI2ODc1LDBjMi4xNSwwIDMuODk2ODgsLTEuNjEyNSA0LjAzMTI1LC0zLjc2MjVsMC44MDYyNSwtMTEuMjg3NWg0OC42NDM3NWwwLjgwNjI1LDExLjI4NzVjMC4xMzQzNywyLjI4NDM4IDIuMDE1NjMsMy44OTY4OCA0LjMsMy43NjI1YzIuMjg0MzcsLTAuMTM0MzggMy44OTY4OCwtMi4wMTU2MiAzLjc2MjUsLTQuM2wtMC44MDYyNSwtMTAuNzVoMTQuMTA5MzhjMi41NTMxMiwwIDQuNzAzMTMsMi4wMTU2MiA0Ljk3MTg3LDQuNzAzMTJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
              ></img>
            </li>
            <li onClick={openMypageModal}>
              <img
                alt="mypage"
                src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik04Niw2Ljg4Yy0wLjE3ODA1LDAuMDA0MTUgLTAuMzU1NTEsMC4wMjIxMiAtMC41MzA3OCwwLjA1Mzc1Yy00My40MDgxLDAuMjkzNTggLTc4LjU4OTIyLDM1LjU4OTcxIC03OC41ODkyMiw3OS4wNjYyNWMwLDQzLjY1ODMgMzUuNDYxNyw3OS4xMiA3OS4xMiw3OS4xMmM0My42NTgzLDAgNzkuMTIsLTM1LjQ2MTcgNzkuMTIsLTc5LjEyYzAsLTQzLjQ3MTk4IC0zNS4xNzM5NiwtNzguNzY1MzYgLTc4LjU3NTc4LC03OS4wNjYyNWMtMC4xNzk2OSwtMC4wMzIzMyAtMC4zNjE2NywtMC4wNTAzIC0wLjU0NDIyLC0wLjA1Mzc1ek04NiwxMy43NmMzOS45NDA1OCwwIDcyLjI0LDMyLjI5OTQyIDcyLjI0LDcyLjI0YzAsMzkuOTQwNTggLTMyLjI5OTQyLDcyLjI0IC03Mi4yNCw3Mi4yNGMtMzkuOTQwNTgsMCAtNzIuMjQsLTMyLjI5OTQyIC03Mi4yNCwtNzIuMjRjMCwtMzkuOTQwNTggMzIuMjk5NDIsLTcyLjI0IDcyLjI0LC03Mi4yNHpNNTguNDgsNjEuOTJjLTUuNjk5NTgsMCAtMTAuMzIsNC42MjA0MiAtMTAuMzIsMTAuMzJjMCw1LjY5OTU4IDQuNjIwNDIsMTAuMzIgMTAuMzIsMTAuMzJjNS42OTk1OCwwIDEwLjMyLC00LjYyMDQyIDEwLjMyLC0xMC4zMmMwLC01LjY5OTU4IC00LjYyMDQyLC0xMC4zMiAtMTAuMzIsLTEwLjMyek0xMTMuNTIsNjEuOTJjLTUuNjk5NTgsMCAtMTAuMzIsNC42MjA0MiAtMTAuMzIsMTAuMzJjMCw1LjY5OTU4IDQuNjIwNDIsMTAuMzIgMTAuMzIsMTAuMzJjNS42OTk1OCwwIDEwLjMyLC00LjYyMDQyIDEwLjMyLC0xMC4zMmMwLC01LjY5OTU4IC00LjYyMDQyLC0xMC4zMiAtMTAuMzIsLTEwLjMyek00MS4xMzIxOSw5OS43MTk2OWMtMS4yNzc0OSwwLjA0MjEzIC0yLjQyNjMyLDAuNzg5MDIgLTIuOTgzMjMsMS45Mzk1Yy0wLjU1NjkxLDEuMTUwNDggLTAuNDMwMDksMi41MTQ4NyAwLjMyOTMyLDMuNTQzYzAsMCAxNy45OTUwNSwyNS41MTc4MSA0Ny41MjE3MiwyNS41MTc4MWMyOS41MjY2NywwIDQ3LjUyMTcyLC0yNS41MTc4MSA0Ny41MjE3MiwtMjUuNTE3ODFjMS4xMDU3OCwtMS41NDczNSAwLjc0NzgxLC0zLjY5ODEzIC0wLjc5OTUzLC00LjgwMzljLTEuNTQ3MzUsLTEuMTA1NzggLTMuNjk4MTMsLTAuNzQ3ODEgLTQuODAzOSwwLjc5OTUzYzAsMCAtMTYuNDA0OTUsMjIuNjQyMTkgLTQxLjkxODI4LDIyLjY0MjE5Yy0yNS41MTMzMywwIC00MS45MTgyOCwtMjIuNjQyMTkgLTQxLjkxODI4LC0yMi42NDIxOWMtMC42Njc0LC0wLjk2Mjc0IC0xLjc3ODgyLC0xLjUxOTcxIC0yLjk0OTUzLC0xLjQ3ODEzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
              ></img>
            </li>
          </ul>
        </MyPageBox>
      </NavBox>
      <MypageModal mypageOpen={mypageOpen} />
      <ProductModal productOpen={productOpen} />
      <IntroduceModal introduceOpen={introduceOpen} />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100;
`;

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 0 200px;
  color: white;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 4px 3px 5px rgba(160, 160, 160, 0.5);
  ${CustomMediaStyle.lessThan('desktop')`
    padding: 0 100px;
  `}
  ${CustomMediaStyle.lessThan('tablet')`
    padding: 0 50px;
  `}
  ${CustomMediaStyle.lessThan('mobile')`
    padding: 0 30px;
  `}
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  img {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 82px;
    ${CustomMediaStyle.lessThan('mobile')`
        width: 75px;
    `}
  }
`;

const NavListBox = styled.div`
  width: 55%;
  ${CustomMediaStyle.lessThan('mobile')`
    width: 65%;
  `}
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    li:hover {
      color: #ef7300;
    }
    li {
      cursor: pointer;
      letter-spacing: 1.5px;
      font-size: 16.5px;
      &.active {
        color: #ef7300;
      }
    }
  }
`;

const MyPageBox = styled.div`
  width: 10%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    li {
      cursor: pointer;
      img {
        width: 22px;
        ${CustomMediaStyle.lessThan('mobile')`
          width: 20px;
        `}
      }
    }
  }
`;

export default Nav;
