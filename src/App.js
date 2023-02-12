// import logo from './logo.svg';
import './App.css';
// import InitPage part of InitPage file
import React, {useState} from "react";
import InitPage from "./component/Initial/InitPage/InitPage.js";
import Appstore from "./component/Appstore/Appstore.js";
import {auth} from "./constants/constants";
import {onAuthStateChanged} from "firebase/auth";
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

import { signOut } from "firebase/auth";
function App() {
    const [login, setLogin] = useState(false);
    const [loading, setLoading] = useState(true);

    const antIcon = <LoadingOutlined style={{fontSize: 72}} spin/>;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogin(true);
        }
        setLoading(false);
    });
    const HandleLogin = () => {
        setLogin(true);
    }

    const HandleLogout = () => {
        signOut(auth).then(() => {
            setLogin(false)
        });
    }

    return (
        <div className={loading?"Loading":"App"}>
            {loading ?
                <Spin indicator={antIcon}/>:
                    (login ?
                        <Appstore logoutFinish={HandleLogout} /> :
                        <InitPage handleLogin={HandleLogin}/>)
            }
        </div>
    );
}

export default App;
