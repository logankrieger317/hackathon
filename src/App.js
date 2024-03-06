import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {

 

  return (
    <div className='App'>
    <Home/>
    </div>
  );
}

export default App;
