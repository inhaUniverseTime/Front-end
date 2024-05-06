import React, { useState } from 'react';
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
  background-image: url('/image/choice.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  position: relative;
`;

const StyledSquareButton = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ selected }) => (selected ? '#3CA2FF' : 'rgba(255, 255, 255, 0.1)')};
  border: ${({ selected }) => (selected ? '2px solid #FFFFFF' : 'none')};
  cursor: pointer;
  position: relative;
  text-align: center; /* 텍스트를 가로로 가운데 정렬 */
  
  > div {
    font-size: 30px;
    font-weight: 600; /* 세미 볼드(미디엄) */
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block; /* 추가 */
    white-space: nowrap; /* 텍스트가 너비를 벗어나더라도 줄 바꿈 방지 */
  }
`;

const CircleButton = styled(Link)`
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url('/image/circlearrow.png');
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

const TopRow = styled(Row)`
  margin-bottom: 32px;
`;

const Select1 = () => {
  const [selectedIdx, setSelectedIdx] = useState(null); // 선택된 사각형의 인덱스 상태 관리

  // 사각형 클릭 시 선택된 사각형의 인덱스를 저장하고 이전에 선택된 사각형을 비활성화
  const handleClick = (index) => {
    if (selectedIdx === index) {
      // 이미 선택된 사각형을 다시 클릭한 경우
      setSelectedIdx(null); // 선택 취소
    } else {
      setSelectedIdx(index); // 새로운 사각형 선택
    }
  };

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          <TopRow>
            {/* 첫 번째 행 */}
            <StyledSquareButton onClick={() => handleClick(0)} selected={selectedIdx === 0} style={{ top: '25px' }}>
              <div>공부</div>
            </StyledSquareButton>
            <StyledSquareButton onClick={() => handleClick(1)} selected={selectedIdx === 1} style={{ top: '25px' }}>
              <div>쉴래</div>
            </StyledSquareButton>
          </TopRow>
          <Row>
            {/* 두 번째 행 */}
            <StyledSquareButton onClick={() => handleClick(2)} selected={selectedIdx === 2}>
              <div>배고파</div>
            </StyledSquareButton>
            <StyledSquareButton onClick={() => handleClick(3)} selected={selectedIdx === 3}>
              <div>놀래</div>
            </StyledSquareButton>
          </Row>
          <CircleButton to="/select2" />
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Select1;