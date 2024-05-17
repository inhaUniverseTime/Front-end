import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios 라이브러리 추가

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
  }
  p {
    color: #3CA2FF;
    font-size: 20px;
    white-space: pre-wrap; /* 줄 바꿈을 위한 설정 */
    word-wrap: break-word; /* 긴 단어의 줄 바꿈을 허용 */
  }
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const InfoTextComponent = styled.div`
  display: flex;
  flex-direction: row; /* 라벨과 값이 같은 라인에 표시되도록 설정합니다. */
  align-items: flex-start; /* 자식 요소들을 시작 위치로 정렬합니다. */
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
`;

const InfoLabel = styled.span`
  font-size: 16px;
  color: #FFEE59;
  margin-right: 5px;
  display: flex; /* 수평 정렬을 위해 추가합니다. */
  align-items: flex-start; /* 시작 위치로 정렬하도록 설정합니다. */
`;

const InfoValue = styled.div`
  font-size: 16px;
  color: white;
  word-wrap: break-word;
  max-width: 200px; // 더 적합한 너비로 조정해보세요
  white-space: pre-wrap; /* 텍스트 줄 바꿈을 위해 추가 */
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
`;


const Result = () => {
  const navigate = useNavigate();
  const [contentData, setContentData] = useState(null); // 백엔드에서 받아온 컨텐츠 데이터 상태
  const [activityDescription, setActivityDescription] = useState(""); // 백엔드에서 받아온 활동 설명 상태

  useEffect(() => {
    // 백엔드 API에서 데이터 가져오기
    axios.get('/api/content')
      .then(response => {
        setContentData(response.data); // 데이터 상태 업데이트
        setActivityDescription(response.data.activityDescription); // 활동 설명 상태 업데이트
      })
      .catch(error => {
        // API 요청이 실패할 경우 기본값 설정
        const defaultData = {
          title: "떡볶이 드세요 그냥",
          image: "/image/test.jpg",
          description: "떡볶이 맛집이 많은데 그냥 엽떡 드세요 마라로제로다가",
          location: "인하대학교 후문",
          time: "50분",
          activityDescription: "밥을 먹은 당신!"
        };
        setContentData(defaultData); // 기본값으로 데이터 상태 업데이트
        setActivityDescription(defaultData.activityDescription); // 활동 설명 상태 업데이트
      });
  }, []);

  // 페이지 이동 함수
  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          {contentData && (
            <ContentBox>
              <h2>{contentData.title}</h2>
              <img src={contentData.image} alt="Photo" style={{ width: "100%", maxHeight: "250px", objectFit: "cover", marginBottom: "20px" }} />
              <p>{contentData.description}</p>
            </ContentBox>
          )}
          <InfoTextComponent>
            <InfoLabel>위치:</InfoLabel><InfoValue>{contentData && contentData.location}</InfoValue>
          </InfoTextComponent>
          <InfoTextComponent>
            <InfoLabel>시간:</InfoLabel>
            <InfoValue>
              {contentData && activityDescription && <span>{activityDescription}<br /></span>}
              {contentData ? <span>수업 시작까지 {contentData.time} 남았어요.<br /></span> : "데이터를 불러오는 중입니다."}
            </InfoValue>
          </InfoTextComponent>
          {/* ButtonContainer */}
          <ButtonContainer>
            <Button onClick={() => goToPage('/main')}>{contentData ? `남은 ${contentData.time} 뭐하지?` : "남은 50분 뭐하지?"}</Button>
            <Button onClick={() => goToPage('/main2')}>다시 할래!</Button>
          </ButtonContainer>
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Result;
