import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Routes, Route, Router } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Raycaster from './pages/projects/raycaster';

function App() {
  return (
    <div className="App">

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects/raycaster" element={<Raycaster/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>

    </div>
  );
}

export default App;
