import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink, Routes, Route, Router } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Raycaster from './pages/projects/raycaster/raycaster';
import ProjectsList from './pages/ProjectsList';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="App">

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="projects" element={<ProjectsList/>} />
            <Route path="projects/:id/*" element={<ProjectPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>

    </div>
  );
}

export default App;
