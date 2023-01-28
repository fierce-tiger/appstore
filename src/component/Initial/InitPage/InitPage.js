import './InItPage.css';
import React, { useState } from 'react';
import LoginStyle from "../Login/Login";
import Register from "../register/Register";
const BackgroundBoard = ({ children }) => (
    <main className="background-board">{children}</main>
);

function InitPage({handleLogin}) {
    const [register, setRegister] = useState(false);
    const OnRegister = () => {
        setRegister(true)
    }
    const LoginFinish = (values) => {
        console.log('Success:', values);
        handleLogin()
    }
    const RegisterFinish = () => {
        setRegister(false)
    }
    return (
            <BackgroundBoard>
                {register ?
                    <Register onFinish={RegisterFinish}/>:
                    <LoginStyle onRegister={OnRegister} onFinish={LoginFinish}/>
                }
            </BackgroundBoard>
    );
}

export default InitPage;