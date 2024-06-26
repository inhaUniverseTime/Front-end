import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #d9d9d9;
    font-weight: bold;
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
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-image: url("/image/resultBack.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: white;
  cursor: pointer;
  padding: 20px;
`;

const ContentBox = styled.div`
  width: 240px;
  height: 340px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 10px;
  overflow: auto;
  h2 {
    color: black;
    font-size: 30px;
    font-weight: bold;
  }
  p {
    color: #3ca2ff;
    font-size: 26px;
    font-weight: bold;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 260px;
  margin-top: 10px;
  margin-left: 20px;
`;

const InfoTextComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2px;
  padding: 10px;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  color: #ffee59;
  margin-right: 5px;
  display: flex;
  align-items: flex-start;
  font-weight: bold;
`;

const InfoValue = styled.div`
  font-size: 14px;
  color: white;
  word-wrap: break-word;
  max-width: 200px;
  white-space: pre-wrap;
  text-align: left;
  span {
    font-weight: normal;
  }
  .bold-text {
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 50px;
  width: 230px;
  background-color: white;
  font-weight: bold;
  color: black;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
`;

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [contentData, setContentData] = useState(null);

  const handleData = async () => {
    const mode = localStorage.getItem("mode");
    const typeOfFood = localStorage.getItem("typeOfFood");
    const locationValue = localStorage.getItem("location");

    try {
      const response = await axios.get(`https://universetime.fly.dev/search`, {
        params: {
          mode: mode,
          number_of_people: mode === "1" ? "2" : undefined,
          type_of_food: typeOfFood,
          location: locationValue,
        },
      });

      const imageData = response.data.image; // 이미지 데이터
      const mimeType = getImageMimeType(imageData); // 이미지 MIME 유형 가져오기
      const imageDataURI = `data:${mimeType};base64,${imageData}`; // 이미지 데이터를 데이터 URI로 변환

      setContentData({
        image: imageDataURI,
        title: "우주공강 타임",
        description:
          mode === "1" ? response.data.result_value : response.data.result,
        location: response.data.location,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // 예외 처리
    }
  };

  const getImageMimeType = (imageData) => {
    if (imageData.startsWith("/9j/") || imageData.startsWith("/8A")) {
      return "image/jpeg";
    } else if (imageData.startsWith("iVBORw0KGgoAAAANSUhEUgAA")) {
      return "image/png";
    } else {
      // 기본적으로 jpeg로 설정
      return "image/jpeg";
    }
  };

  const [hour, setHour] = useState(13);
  const [minute, setMinute] = useState(10);

  useEffect(() => {
    handleData();
  }, [location.search]);

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          {contentData && (
            <>
              <ContentBox>
                <h2>{contentData.title}</h2>
                <img
                  src={contentData.image}
                  alt="Photo"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    marginBottom: "20px",
                  }}
                />
                <p className="description-text">{contentData.description}</p>
              </ContentBox>
              <InfoContainer>
                <InfoTextComponent>
                  <InfoLabel>위치:</InfoLabel>
                  <InfoValue>
                    <span className="bold-text">
                      인하대{" "}
                      {contentData.location === "front" ? "정문" : "후문"}
                    </span>
                  </InfoValue>
                </InfoTextComponent>
                <InfoTextComponent>
                  <InfoLabel>시간:</InfoLabel>
                  <InfoValue>
                    <span className="bold-text">
                      {" "}
                      강의실 {hour}시 {minute}분에 이동!
                      <br />
                    </span>
                  </InfoValue>
                </InfoTextComponent>
              </InfoContainer>
            </>
          )}
          <ButtonContainer>
            <Button onClick={() => goToPage("/time")}>
              그래도 시간이 붕뜬다면?
            </Button>
            <Button onClick={() => goToPage("/ticket")}>
              처음부터 다시할래!
            </Button>
          </ButtonContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Result;
