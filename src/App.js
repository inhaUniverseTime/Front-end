import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Select1 from './pages/Select1';
import Select2 from './pages/Select2';
import Ticket from './pages/Ticket';
import Rocket from './pages/Rocket';
import Ready from './pages/Ready';
import Result from './pages/Result';

// 글로벌 스타일 정의
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif; /* pretendard 폰트 적용 */
  }

  body {
    background-color: #d9d9d9;
    font-size: 10px; /* 폰트 크기 조정 */
  }

  /* 다른 요소들의 글로벌한 스타일도 여기에 추가할 수 있습니다. */
`;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main2' element={<Main2 />} />
        <Route path='/Ticket' element={<Ticket />} />
        <Route path='/select1' element={<Select1 />} />
        <Route path='/select2' element={<Select2 />} />
        <Route path='/rocket' element={<Rocket />} />
        <Route path='/ready' element={<Ready />} />
        <Route path='/result' element={<Result />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GlobalStyles /> {/* 글로벌 스타일 적용 */}
    </BrowserRouter>
  );
};

export default App;
