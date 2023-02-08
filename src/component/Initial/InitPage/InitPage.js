import './InItPage.css';
import React, { useState } from 'react';
import Login from "../Login/Login";
import Register from "../register/Register";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {firebaseApp} from "../../../constants/constants";
const BackgroundBoard = ({ children }) => (
    <main className="background-board">{children}</main>
);

function InitPage({handleLogin}) {
    const [register, setRegister] = useState(false);
    const OnRegister = () => {
        setRegister(true)
    }
    const LoginFinish = (values) => {
        console.log(values)
        const auth=getAuth(firebaseApp)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(()=>{
                console.log("login successfully")
                handleLogin()
            }).catch((error)=>{
                const errorMessage = error.message;
                console.log(errorMessage)
        })
    }
    const RegisterFinish = (values) => {
        console.log(values)
        const auth=getAuth(firebaseApp)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(()=>{
                console.log("login successfully")
                setRegister(false)
                handleLogin()
            }).catch((error)=>{
                const errorMessage = error.message;
                console.log(errorMessage)
        })
    }
    return (
            <BackgroundBoard>
                {register ?
                    <Register onFinish={RegisterFinish}/>:
                    <Login onRegister={OnRegister} onFinish={LoginFinish}/>
                }
            </BackgroundBoard>
    );
}

export default InitPage;
