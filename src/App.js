import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import Main2 from "./pages/Main2";
import SelectPage from "./pages/SelectPage";
import Ticket from "./pages/Ticket";
import Rocket from "./pages/Rocket";
import Ready from "./pages/Ready";
import Time from "./pages/Time";
import Result from "./pages/Result";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }

  body {
    background-color: #000000;
    font-size: 10px; 
  }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main2" element={<Main2 />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/rocket" element={<Rocket />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/time" element={<Time />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
