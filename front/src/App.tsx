import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import LandingPage from './components/Landing Page/LandingPage';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<LandingPage/>}/>
        <Route  path="/home" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
