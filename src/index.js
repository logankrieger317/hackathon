import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer'; // Import Footer
import { BrowserRouter as Router } from 'react-router-dom'; 
import { CityProvider } from './components/CityContext';
import Cityselector from './components/Cityselector';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with Router */}
    <CityProvider>
      <App />
      {/* <Cityselector/> */}
      <Footer/>
      
      </CityProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);