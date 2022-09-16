import React from 'react';
import styled from 'styled-components';
import MainBanner from '../../components/Home/MainBanner';

function Home() {
  return (
    <Container>
      <MainBanner />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
