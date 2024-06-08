import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-image: url("/image/choice.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  position: relative;
`;

const StyledSquareButton = styled.div`
  width: 110px;
  height: 110px;
  background-color: ${({ selected }) =>
    selected ? "#3CA2FF" : "rgba(255, 255, 255, 0.1)"};
  border: ${({ selected }) => (selected ? "2px solid #FFFFFF" : "none")};
  cursor: pointer;
  position: relative;
  text-align: center;

  > div {
    font-size: 28px;
    font-weight: 600;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    white-space: nowrap;
  }

  @media (max-width: 1200px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 992px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 576px) {
    width: 90px;
    height: 90px;
  }
`;

const CircleButton = styled(Link)`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url("/image/circlearrow.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 3vh;
  right: 38vw;

  @media (max-width: 768px) {
    bottom: 2vh;
    right: 30vw;
  }

  @media (max-width: 480px) {
    bottom: 1vh;
    right: 10vw;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 7px;
`;

const TopRow = styled(Row)`
  margin-bottom: 10px;
`;

const Select1 = ({ mode, handleMode, handleNextStep, handleNext2Step }) => {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          <TopRow>
            <StyledSquareButton
              onClick={() => handleMode(9)}
              selected={mode === 9}
            >
              <div>공부</div>
            </StyledSquareButton>
            <StyledSquareButton
              onClick={() => handleMode(7)}
              selected={mode === 7}
            >
              <div>쉴래</div>
            </StyledSquareButton>
          </TopRow>
          <Row>
            <StyledSquareButton
              onClick={() => handleMode(1)}
              selected={mode === 1}
            >
              <div>배고파</div>
            </StyledSquareButton>
            <StyledSquareButton
              onClick={() => handleMode(4)}
              selected={mode === 4}
            >
              <div>놀래</div>
            </StyledSquareButton>
          </Row>
          <CircleButton
            onClick={mode === 1 ? handleNextStep : handleNext2Step}
          />
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Select1;
