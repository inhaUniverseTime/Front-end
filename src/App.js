import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Main2 from './pages/Main2';
import Choice from './pages/Choice';
import Ticket from './pages/Ticket';
import Rocket from './pages/Rocket';
import Ready from './pages/Ready';
import Result from './pages/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/main2' element={<Main2 />} />
        <Route path='/Ticket' element={<Ticket />} />
        <Route path='/choice' element={<Choice />} />
        <Route path='/rocket' element={<Rocket />} />
        <Route path='/ready' element={<Ready />} />
        <Route path='/result' element={<Result />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
