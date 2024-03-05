import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }

  const handleSignup = () => {
    setIsAuthenticated(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/login"
          element={<Login onLogin={handleLogin} onSignup={handleSignup} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
