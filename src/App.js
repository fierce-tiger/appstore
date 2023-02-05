// import logo from './logo.svg';
import './App.css';
// import InitPage part of InitPage file
import React, {useState} from "react";
import InitPage from "./component/Initial/InitPage/InitPage.js";
import Appstore from "./component/Appstore/Appstore.js";
import {firebaseApp, TOKEN_KEY, auth} from "./constants/constants";
import {onAuthStateChanged } from "firebase/auth";
function App() {
    const [login, setLogin] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogin(true)
        }
    });
    const HandleLogin = () => {
        setLogin(true)
    }

    return (
        <div className="App">
            {login ?
                <Appstore/> :
                <InitPage handleLogin={HandleLogin}/>
            }
        </div>
    );
}

export default App;
