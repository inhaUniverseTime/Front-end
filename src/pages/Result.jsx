import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { dummyData } from "../dummyData/dummyData";

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
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  // const [data, setData] = useState({
  //   id: 0,
  //   title: "",
  //   image: "",
  //   description: "",
  //   location: "",
  // });

  const mode = localStorage.getItem("mode");
  const typeOfFood = localStorage.getItem("typeOfFood");
  const locationValue = localStorage.getItem("location");

  useEffect(() => {
    const handleData = () => {
      if (mode === 1 && typeOfFood === "한식" && locationValue === "후문") {
        setTitle(dummyData[0].title);
        setImage(dummyData[0].image);
        setDescription(dummyData[0].description);
        setLocation(dummyData[0].location);
      }
      console.log(title);
    };
    handleData();
    console.log(title);
  });

  // const navigate = useNavigate();
  // const location = useLocation();
  // const [contentData, setContentData] = useState(null);
  // const [activityDescription, setActivityDescription] = useState("");
  // const [hour, setHour] = useState(null);
  // const [minute, setMinute] = useState(null);

  // const handleData = async () => {
  //   const mode = localStorage.getItem("mode");
  //   console.log(mode);

  //   const typeOfFood = localStorage.getItem("typeOfFood");

  //   console.log(typeOfFood);
  //   const location = localStorage.getItem("location");

  //   console.log(location);

  //   axios
  //     .get(`https://universetime.fly.dev/search`, {
  //       params: {
  //         mode: mode,
  //         typeOfFood: typeOfFood,
  //         location: location,
  //       },
  //     })
  //     .then((response) => {
  //       setContentData(response.data);
  //       setActivityDescription(response.data.activityDescription);
  //       const [hour, minute] = response.data.time.split(":");
  //       setHour(hour);
  //       setMinute(minute);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       const defaultData = {
  //         title: "우주공강타임",
  //         image: "/image/test.jpg",
  //         description: "동대문 엽기떡볶이",
  //         location: "인하대학교 후문",
  //         time: "01:15",
  //       };
  //       setContentData(defaultData);
  //       setActivityDescription(defaultData.activityDescription);
  //       const [hour, minute] = defaultData.time.split(":");
  //       setHour(hour);
  //       setMinute(minute);
  //     });
  // };

  // useEffect(() => {
  //   handleData();
  // }, [location.search]);

  // const goToPage = (path) => {
  //   navigate(path);
  // };

  return (
    <>
      <GlobalStyles />
      <PageContainer>
        <ContentContainer>
          <>
            <ContentBox>
              <h2>{title}</h2>
              <img
                src={image}
                alt="Photo"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  marginBottom: "20px",
                }}
              />
              <p className="description-text">{description}</p>
            </ContentBox>
            <InfoContainer>
              <InfoTextComponent>
                <InfoLabel>위치:</InfoLabel>
                <InfoValue>
                  <span className="bold-text">{location}</span>
                </InfoValue>
              </InfoTextComponent>
              {/* <InfoTextComponent>
                  <InfoLabel>시간:</InfoLabel>
                  <InfoValue>
                    {activityDescription && (
                      <span>
                        {activityDescription}
                        <br />
                      </span>
                    )}
                    <span className="bold-text">
                      {" "}
                      강의실 {hour}시 {minute}분에 이동!
                      <br />
                    </span>
                  </InfoValue>
                </InfoTextComponent> */}
            </InfoContainer>
          </>

          {/* <ButtonContainer>
            <Button onClick={() => goToPage("/time")}>
              그래도 시간이 붕뜬다면?
            </Button>
            <Button onClick={() => goToPage("/ticket")}>
              처음부터 다시할래!
            </Button>
          </ButtonContainer> */}
        </ContentContainer>
      </PageContainer>
    </>
  );
};

export default Result;
