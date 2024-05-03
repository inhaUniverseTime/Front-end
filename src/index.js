import React from 'react';
import ReactDOM from 'react-dom/client'; // 수정된 부분
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
