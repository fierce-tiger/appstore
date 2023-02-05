import{initializeApp} from  "firebase/app"
import {getAuth} from "firebase/auth";
export const TOKEN_KEY="token"

export const BASE_URL="127.0.0.1:3000"
export const firebaseConfig = {
  apiKey: "AIzaSyDOhZKi6tQJqvEzgSxIpzQqd12uAoqpAa8",
  authDomain: "appstore-c59ed.firebaseapp.com",
  projectId: "appstore-c59ed",
  storageBucket: "appstore-c59ed.appspot.com",
  messagingSenderId: "520090327902",
  appId: "1:520090327902:web:8baa130581fee2ccda0dcf",
  measurementId: "G-4BY88H53X7"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth =getAuth(firebaseApp)
