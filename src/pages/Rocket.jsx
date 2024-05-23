import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from 'react-router-dom';

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
  background-image: url('/image/rocket.png'); /* 이 경로를 수정하세요 */
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
`;

const Rocket = () => {
  const navigate = useNavigate();

  // 3초 뒤에 페이지 이동 함수
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/result');
    }, 1000); 

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, [navigate]);

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
