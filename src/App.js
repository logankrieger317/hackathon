import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import Plants from './components/Plants';
import Locations from './components/Locations';
import Profile from './components/Profile';
import Favorites from './components/Favorites';
import Settings from './components/Settings';
import Header from './components/Header';
import { UserProvider } from './components/UserContext';
import PlantDetail from './components/PlantDetail';




function App() {
  const location = useLocation();
  console.log(location);

  return (
    <UserProvider>
      <div className='App'>
      {location.pathname !== "/login" && <Header />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/plants" element={<Plants/>} />
          <Route path="/plant-details" element={<PlantDetail />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
