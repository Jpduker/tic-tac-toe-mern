import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Login.css'
import { Button } from '@mui/material';


function Login() {
  return (
    <div>
    <div className="action-bar-login">
    <div className="left-icons-login">
        <ArrowBackIosIcon />
    </div>
</div>
<div className="create-icon-login">Login</div>
<div className="details">Please enter your details</div>
<div className="username-login">Username</div>
<input
    className="username-input-login"
    placeholder="Type your username here"
    type="text"
></input>

<div className="password-login">Password</div>
<input
    className="password-input-login"
    placeholder="Type your password here"
    type="text"
></input>
<Button
    variant="contained"
    className="login-button-LoginPage"
    sx={{ color: "#FFFFF", backgroundColor: "#F2C94C" }}
>
    Login
</Button>
    </div>
  )
}

export default Login