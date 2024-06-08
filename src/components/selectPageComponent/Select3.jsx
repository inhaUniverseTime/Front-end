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
  height: 100vh; /* 화면 전체 높이로 설정  */
`;

const ContentContainer = styled.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto; /* 가운데 정렬을 위해 auto로 설정  */
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
  text-align: center; /* 텍스트를 가로로 가운데 정렬 */

  > div {
    font-size: 28px;
    font-weight: 600; /* 세미 볼드(미디엄) */
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block; /* 추가 */
    white-space: nowrap; /* 텍스트가 너비를 벗어나더라도 줄 바꿈 방지 */
  }

  /* 반응형 유지 - 부모 요소의 크기에 맞춰 배치 조정 */
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
const CircleButton = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url("/image/circlearrow.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 3vh; // 하단에서 10px 떨어진 곳에 위치
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
  gap: 7px; /* 사각형 간의 간격 */
`;

const Select3 = ({ location, handleLoc, handleSubmit }) => {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          <Row>
            <StyledSquareButton
              onClick={() => handleLoc("정문")}
              selected={location === "정문"}
            >
              <div>정문</div>
            </StyledSquareButton>
            <StyledSquareButton
              onClick={() => handleLoc("후문")}
              selected={location === "후문"}
            >
              <div>후문</div>
            </StyledSquareButton>
          </Row>
          <CircleButton onClick={handleSubmit} />
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Select3;
