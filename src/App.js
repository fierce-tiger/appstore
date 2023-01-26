import logo from './logo.svg';
import './App.css';
// import Login part of Login file
import React, {useState} from "react";
import Login from "./component/Login/Login";
import Appstore from "./component/Appstore/Appstore";

function App() {
  const [login, setLogin] = useState(false);

    const HandleLogin = () => {
        setLogin(true)
    }

  return (
      <div className="App">
        <header className="App-header">
          <h2>Appstore</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          {!login ? <Login handleLogin={HandleLogin}/> : <Appstore/>}
      </div>
  );
}

export default App;
