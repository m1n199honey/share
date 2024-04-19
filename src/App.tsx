import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Testing from './pages/Testing';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Testing />} />
        {/* <Route path="/svg" element={<SvgPage />} /> */}
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;