import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  background-image: url('/image/resultBack.png');
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
    color: #3CA2FF;
    font-size: 26px; /* Increase font size more */
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
  width: 260px; /* Increase width to accommodate margin */
  margin-top: 10px;
  margin-left: 20px; /* Add margin to push content to the right */
`;

const InfoTextComponent = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: flex-start; 
  justify-content: flex-start; 
  margin-bottom: 2px; /* 간격을 줄이기 위해 margin-bottom 조정 */
  padding: 10px;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  color: #FFEE59;
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
  const [contentData, setContentData] = useState(null);
  const [activityDescription, setActivityDescription] = useState("");
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);

  useEffect(() => {
    axios.get('/api/content')
      .then(response => {
        setContentData(response.data);
        setActivityDescription(response.data.activityDescription);
        // Splitting time into hour and minute
        const [hour, minute] = response.data.time.split(':');
        setHour(hour);
        setMinute(minute);
      })
      .catch(error => {
        const defaultData = {
          title: "우주공강타임",
          image: "/image/test.jpg",
          description: "동대문 엽기떡볶이",
          location: "인하대학교 후문",
          time: "01:15",
        };
        setContentData(defaultData);
        setActivityDescription(defaultData.activityDescription);
        // Splitting time into hour and minute
        const [hour, minute] = defaultData.time.split(':');
        setHour(hour);
        setMinute(minute);
      });
  }, []);

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          {contentData ? (
            <>
              <ContentBox>
                <h2>{contentData.title}</h2>
                <img src={contentData.image} alt="Photo" style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "20px" }} />
                <p className="description-text">{contentData.description}</p>
              </ContentBox>
              <InfoContainer>
                <InfoTextComponent>
                  <InfoLabel>위치:</InfoLabel>
                  <InfoValue><span className="bold-text">{contentData.location}</span></InfoValue>
                </InfoTextComponent>
                <InfoTextComponent>
                  <InfoLabel>시간:</InfoLabel>
                  <InfoValue>
                    {activityDescription && <span>{activityDescription}<br /></span>}
                    <span className="bold-text"> 강의실 {hour}시 {minute}분에 이동!<br /></span>
                  </InfoValue>
                </InfoTextComponent>
              </InfoContainer>
            </>
          ) : (
            <p>데이터를 불러오는 중입니다...</p>
          )}
          <ButtonContainer>
            <Button onClick={() => goToPage('/time')}>그래도 시간이 붕뜬다면?</Button>
            <Button onClick={() => goToPage('/ticket')}>처음부터 다시할래!</Button>
          </ButtonContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Result;