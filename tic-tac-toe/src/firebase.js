// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyDiiwYVJ4jl8lGAgIn_M_ZCH-BCZu98h_0",
        authDomain: "tic-tac-toe-28712.firebaseapp.com",
        projectId: "tic-tac-toe-28712",
        storageBucket: "tic-tac-toe-28712.appspot.com",
        messagingSenderId: "528740383579",
        appId: "1:528740383579:web:1b4f0b09fdffc218a5387e"
    };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;