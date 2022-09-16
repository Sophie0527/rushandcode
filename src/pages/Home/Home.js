import React from 'react';
import styled from 'styled-components';
import MainBanner from '../../components/Home/MainBanner';
import BestReview from '../../components/Home/BestReview';

function Home() {
  return (
    <Container>
      <MainBanner />
      <BestReview />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
