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
  height: 100vh; /* 화면 전체 높이로 설정  */
`;

const ContentContainer = styled.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto; /* 가운데 정렬을 위해 auto로 설정  */
  background-image: url('/image/main.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
`;

const Main = () => {
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

export default Main;