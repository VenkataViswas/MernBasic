import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
