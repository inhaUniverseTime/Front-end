import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Select1 from "../components/selectPageComponent/Select1";
import Select2 from "../components/selectPageComponent/Select2";
import Select3 from "../components/selectPageComponent/Select3";

const SelectPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const [mode, setMode] = useState(0);

  const handleMode = (num) => {
    setMode(num);
    localStorage.setItem("mode", num);
  };

  const [typeOfFood, setTypeOfFood] = useState("");

  const handleFood = (str) => {
    setTypeOfFood(str);
    localStorage.setItem("typeOfFood", str);
  };

  const [location, setLocation] = useState("");

  const handleLoc = (str) => {
    setLocation(str);
    localStorage.setItem("location", str);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleNext2Step = () => {
    setStep(step + 2);
  };

  const handleSubmit = () => {
    navigate(`/result`);
  };

  //   const handleSubmit = async () => {
  //     try {
  //       const response = await axios.post(
  //         "https://universetime.fly.dev/api/endpoint",
  //         { mode: mode, type_of_food: typeOfFood, location: location }
  //       );
  //       console.log("Data sent successfully:", response.data);

  //       navigate(`/result?mode=${mode}`);
  //     } catch (error) {
  //       console.error("Error sending data:", error);
  //     }
  //   };

  return (
    <div>
      {step === 0 && (
        <Select1
          mode={mode}
          handleMode={handleMode}
          handleNextStep={handleNextStep}
          handleNext2Step={handleNext2Step}
        />
      )}
      {step === 1 && mode === 1 && (
        <Select2
          typeOfFood={typeOfFood}
          handleFood={handleFood}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 2 && (
        <Select3
          location={location}
          handleLoc={handleLoc}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default SelectPage;
