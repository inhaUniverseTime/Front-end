import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import axios from 'axios';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
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
  height: 30vh; /* 줄 간격 조정 */
  min-width: 240px;
  max-width: 310px;
  min-height: 180px;
  max-height: 270px;
  background-color: #ffffff; /* 하얀색 배경 설정 */
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
  margin-bottom: 5px; /* 줄 간격 더욱 좁힘 */
`;

const TextBox = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #000; /* 검정색 */
`;

const Dropdown = styled.select`
  padding: 0px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 150px;
  color: #3CA2FF; /* 파란색 */
  line-height: 1;
  background-color: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: right; /* 오른쪽 정렬 */
  font-size: 16px; /* 폰트 크기 */
  font-weight: bold;
`;

const Ticket = () => {
  const defaultOptions = {
    출발: ["5호관", "60주년 기념관", "비룡플라자", "9호관"],
    도착: ["9호관", "6호관", "5호관", "60주년 기념관"],
    인원: ["1명", "2명", "3명", "4명"],
    공강: ["1시간", "2시간", "3시간 이상"]
  };

  const [dropdownOptions, setDropdownOptions] = useState(defaultOptions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/endpoint'); // 여기에 실제 API 엔드포인트를 입력하세요.
        setDropdownOptions(response.data);
      } catch (error) {
        console.error("Error fetching data, using default options", error);
      }
    };

    fetchData();
  }, []);

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
          <CircleButton to="/select1"></CircleButton>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Ticket;