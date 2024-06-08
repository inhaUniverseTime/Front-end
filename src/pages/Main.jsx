import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

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
  height: 100vh;
`;

const ContentContainer = styled.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-image: url("/image/main.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  cursor: pointer;
`;

const Main = () => {
  const navigate = useNavigate();

  //페이지 이동 함수
  const goToPage = () => {
    navigate("/main2");
  };

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer onClick={goToPage}></ContentContainer>
      </PageContainer>
    </>
  );
};

export default Main;
