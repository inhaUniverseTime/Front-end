import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom"

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
  background-image: url('/image/ticketback.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  position: relative;
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

const OptionBox = styled.div`
  width: 14vw;
  height: 34vh;
  min-width: 240px; /* 최소 너비 */
  max-width: 310px; /* 최대 너비를 px 단위로 설정 */
  min-height: 200px; /* 최소 높이 */
  max-height: 390px; /* 최대 높이를 px 단위로 설정 */
  background-image: url('/image/optionbox.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const Ticket = () => {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
            <OptionBox>
              {/* OptionBox 내부 내용 */}
              옵션 내용
            </OptionBox>
            <CircleButton to = "/"></CircleButton>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Ticket;
