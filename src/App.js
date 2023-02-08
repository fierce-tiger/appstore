// import logo from './logo.svg';
import './App.css';
// import InitPage part of InitPage file
import React, {useState} from "react";
import InitPage from "./component/Initial/InitPage/InitPage.js";
import Appstore from "./component/Appstore/Appstore.js";
import {auth} from "./constants/constants";
import { signOut } from "firebase/auth";
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

    const HandleLogout = () => {
        signOut(auth).then(() => {
            setLogin(false)
        });
    }

    return (
        <div className="App">
            {login ?
                < Appstore logoutFinish={HandleLogout} /> :
                < InitPage handleLogin={HandleLogin} />
            }
        </div>
    );
}

export default App;
