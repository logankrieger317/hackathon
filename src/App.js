import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import Plants from './components/Plants';
import Locations from './components/Locations';
import Profile from './components/Profile';
import Favorites from './components/Favorites';
import Settings from './components/Settings';



function App() {

 

  return (
    <div className='App'>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/plants" element={<Plants/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/" element={<Home />} />
    </Routes>

   
    </div>
  );
}

export default App;
