import React from 'react';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #d9d9d9;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height:100vh;
`;

const ContentContainer = styled.div`
  width: 393px;
  height: 852px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-image: url('/image/rocket.png'); /* 이 경로를 수정하세요 */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
`;

const Rocket = () => {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Rocket;
