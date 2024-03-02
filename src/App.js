import  "./App.css"
import Header from './components/Header'
import Footer from "./components/Footer"
import Home from "./components/Home";
// import { Auth } from "./components/auth";

function App() {
  return (
    <div className="App"> 
    
      <div className="login">
      {/* <Auth /> */}
      <Home/>
      </div>
    
    </div>
  );
}

export default App;
