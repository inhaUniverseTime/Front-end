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
  background-image: url("/image/timeBack.png");
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
  height: 30vh;
  min-width: 235px;
  max-width: 300px;
  min-height: 60px;
  max-height: 82px;
  background-color: #ffffff;
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
  margin-bottom: 5px;
`;

const TextBox = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: #000;
  white-space: pre-line;
`;

const TimeInput = styled.input`
  padding: 0px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 150px;
  color: #3ca2ff;
  line-height: 1;
  background-color: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
`;

const Time = () => {
  const defaultOptions = {
    "현재 시각": [getCurrentTime()],
  };

  const [dropdownOptions, setDropdownOptions] = useState(defaultOptions);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/endpoint");
        const options = response.data;

        // 시간 형식으로 변환
        const formattedOptions = {};
        for (const [key, values] of Object.entries(options)) {
          formattedOptions[key] = values.map((value) => {
            const hours = value.match(/\d+/)[0].padStart(2, "0"); // 숫자를 추출하고 2자리로 만듦
            return `${hours}:00`;
          });
        }

        setDropdownOptions(formattedOptions);
      } catch (error) {
        console.error("Error fetching data, using default options", error);
      }
    };

    fetchData();
  }, []);

  // 현재 시각 가져오기
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          <OptionBox>
            {Object.entries(dropdownOptions).map(([key, values]) => (
              <OptionItem key={key}>
                <TextBox>{key}</TextBox>
                <TimeInput
                  type="time"
                  defaultValue={values[0]}
                  list={`${key}-times`}
                />
                <datalist id={`${key}-times`}>
                  {values.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </datalist>
              </OptionItem>
            ))}
          </OptionBox>
          <CircleButton to="/result"></CircleButton>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Time;
