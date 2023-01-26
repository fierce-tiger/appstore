import './Login.css';
import React, { useState } from 'react';
import Antd from "./Antd";
const BackgroundBoard = ({ children }) => (
    <main className="background-board">{children}</main>
);

function Login({handleLogin}) {
    const [register, setRegister] = useState(true);
    const OnRegister = () => {
        setRegister(false)
    }
    const LoginFinish = (values) => {
        console.log('Success:', values);
        handleLogin()
    }
    return (
            <BackgroundBoard>
                {register ?
                    <Antd onRegister={OnRegister} onFinish={LoginFinish}/>:
                    null
                }
            </BackgroundBoard>
    );
}

export default Login;