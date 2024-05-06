import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from 'react-router-dom';

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
  height: auto; /* 높이 설정을 auto로 변경하여 컨텐츠에 맞게 조절 */
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
  padding: 20px; /* 내부 여백 추가 */
`;

const ContentBox = styled.div`
  width: 240px; /* 필요에 따라 조절 */
  height: 340px; /* 필요에 따라 조절 */
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px; /* 내부 여백을 늘림 */
  margin-top: 10px;
  overflow: auto; /* 내용이 넘치면 스크롤바 생성 */
  h2 {
    color: black;
    font-size: 30px; /* 텍스트 크기를 줄임 */
  }
  p {
    color: #3CA2FF;
    font-size: 20px; /* 텍스트 크기를 줄임 */
  }
    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
    display: none; /* Webkit 브라우저용 */
  }

  -ms-overflow-style: none; /* IE, Edge 브라우저용 */
  scrollbar-width: none; /* Firefox 브라우저용 */
`;

const TextComponent = styled.div`
  font-size: 20px; /* 폰트 크기 수정 */
  color: white;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const InfoTextComponent = styled.div`
  display: flex; /* flexbox 레이아웃 사용 */
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 중앙 정렬 */
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 5px; /* 내부 여백 */
  border-radius: 5px; /* 둥근 테두리 */
`;

const InfoLabel = styled.span`
  font-size: 15px; /* 폰트 크기 */
  color: #B6DCFF; /* 텍스트 색상 */
  margin-right: 5px; /* 라벨과 값 사이 간격 */
`;

const InfoValue = styled.span`
  font-size: 15px; /* 폰트 크기 */
  color: white; /* 텍스트 색상 */
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 수정된 부분 */
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px; /* 버튼 사이의 간격을 조정하기 위해 추가 */
`;

const Button = styled.button`
  padding: 10px 50px;
  width: 230px; /* 너비 설정 */
  background-color: white;
  font-weight: bold;
  color: black;
  border: none;
  border-radius: 20px; /* 더 둥글게 */
  cursor: pointer;
`;

const Result = () => {
    const navigate = useNavigate();
  
    // 페이지 이동 함수
    const goToPage = (path) => {
      navigate(path);
    };
  
    return (
      <>
        <GlobalStyles />
        <PageContainer>
          <ContentContainer>
            {/* ContentBox */}
            <ContentBox>
              <h2>떡볶이 드세요 그냥</h2>
              <img src="/image/test.jpg" alt="Photo" style={{ width: "100%", maxHeight: "250px", objectFit: "cover", marginBottom: "20px" }} />
              <p>떡볶이 맛집이 많은데 그냥 엽떡 드세요 마라로제로다가</p>
            </ContentBox>
            {/* TextComponent */}
            <TextComponent>#해시태그</TextComponent>
            <InfoTextComponent>
              <InfoLabel>위치:</InfoLabel><InfoValue>서울</InfoValue>
            </InfoTextComponent>
            <InfoTextComponent>
              <InfoLabel>시간:</InfoLabel><InfoValue>오후 3시</InfoValue>
            </InfoTextComponent>
            {/* ButtonContainer */}
            <ButtonContainer>
              <Button onClickx={() => goToPage('/main')}>다른 선택지는 없어?</Button>
              <Button onClick={() => goToPage('/main2')}>정보를 다시 입력할래!</Button>
            </ButtonContainer>
          </ContentContainer>
        </PageContainer>
      </>
    );
};

export default Result;
