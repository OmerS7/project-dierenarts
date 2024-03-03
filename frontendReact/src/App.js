import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/pages/HomePage/HomePage';
import SecondPage from '../src/components/pages/secondPage/secondPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondPage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;