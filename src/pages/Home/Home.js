import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <div>home</div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lavender;
  div {
    padding-top: 100px;
  }
`;
export default Home;
