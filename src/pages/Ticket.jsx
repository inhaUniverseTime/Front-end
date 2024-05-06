import React from 'react';
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
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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

const OptionBox = styled.div`
  width: 14vw;
  height: 34vh;
  min-width: 240px;
  max-width: 310px;
  min-height: 200px;
  max-height: 390px;
  background-image: url('/image/optionbox.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TextBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px; /* 여기를 수정하여 간격을 줄임 */
`;

const Dropdown = styled.select`
  padding: 5px 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: -30px; /* 여기를 수정하여 간격을 줄임 */
  color: #3CA2FF;
  line-height: 1;
  margin-left: 20px;
  background-color: transparent;
`;

// 드롭다운 옵션 정의
const dropdownOptions = {
  출발: ["서울", "대전", "대구", "부산"],
  도착: ["서울", "대전", "대구", "부산"],
  인원: ["1명", "2명", "3명", "4명"],
  공강: ["오전", "오후", "저녁", "없음"]
};

const Ticket = () => {
  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          <OptionBox>
            {Object.entries(dropdownOptions).map(([key, values]) => (
              <OptionItem key={key}>
                <TextBox>{key}</TextBox>
                <Dropdown>
                  {values.map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Dropdown>
              </OptionItem>
            ))}
          </OptionBox>
          <CircleButton to="/"></CircleButton>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Ticket;