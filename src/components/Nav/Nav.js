import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Nav/image/rush_logo.png';
import styled from 'styled-components';

function Nav() {
  return (
    <Container>
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <span>제품</span>
            </li>
            <li>
              <span>러쉬 소개</span>
            </li>
            <li>
              <span>매장 안내</span>
            </li>
            <li>
              <span>스파</span>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div``;
export default Nav;
