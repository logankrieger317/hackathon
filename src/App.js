import  "./App.css"
import Header from './components/Header'
import Footer from "./components/Footer"
import Home from "./components/Home";
import Login from "./components/Login";


function App() {
  return (
    <div className="App"> 
    
      <div className="login">
      <Login />
      {/* <Home/> */}
      </div>
    
    </div>
  );
}

export default App;
