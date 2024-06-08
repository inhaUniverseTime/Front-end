import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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
  background-image: url("/image/ticketback.png");
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

const OptionBox = styled.div`
  width: 14vw;
  height: 35vh;
  min-width: 250px;
  max-width: 310px;
  min-height: 200px;
  max-height: 300px;
  background-color: #ffffff;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 3px;
`;

const TextBox = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

const TimeInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
  width: 150px;
  color: #3ca2ff;
  line-height: 1;
  background-color: transparent;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  outline: none;
`;

const SelectBox = styled.select`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #fff;
  width: 150px;
  color: #3ca2ff;
  line-height: 1;
  background-color: transparent;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  outline: none;
`;

const Ticket = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const calculateEndTime = (startTime) => {
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const endTime = new Date();
    endTime.setHours(startHour);
    endTime.setMinutes(startMinute);
    endTime.setMinutes(endTime.getMinutes() + 90); // 1시간 30분 후
    const hours = endTime.getHours().toString().padStart(2, "0");
    const minutes = endTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const defaultOptions = {
    출발: [
      "1호관",
      "2호관",
      "4호관",
      "5호관",
      "6호관",
      "7호관",
      "9호관",
      "서호관",
      "하이테크센터",
      "운동장",
      "60주년 기념관",
      "비룡플라자",
    ],
    도착: [
      "1호관",
      "2호관",
      "4호관",
      "5호관",
      "6호관",
      "7호관",
      "9호관",
      "서호관",
      "하이테크센터",
      "운동장",
      "60주년 기념관",
      "비룡플라자",
    ],
    인원: ["1명", "2명", "3명", "4명 이상"],
    공강_시작: getCurrentTime(),
    공강_종료: calculateEndTime(getCurrentTime()),
  };

  const [dropdownOptions, setDropdownOptions] = useState(defaultOptions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/endpoint");
        setDropdownOptions(response.data.options || defaultOptions);
      } catch (error) {
        console.error("Error fetching data, using default options", error);
        setDropdownOptions(defaultOptions);
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
            {Object.entries(dropdownOptions || {}).map(([key, value]) => (
              <OptionItem key={key}>
                <TextBox>
                  {key.includes("_") ? key.replace("_", " ") : key}
                </TextBox>
                {key.includes("시작") || key.includes("종료") ? (
                  <TimeInput type="time" defaultValue={dropdownOptions[key]} />
                ) : (
                  <SelectBox>
                    <option value="">입력</option>
                    {value.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectBox>
                )}
              </OptionItem>
            ))}
          </OptionBox>
          <CircleButton to="/select"></CircleButton>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Ticket;
