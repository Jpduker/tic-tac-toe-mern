import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './LoginError.css'
import { Button } from '@mui/material';

function LoginError() {
	return (
		<div>
			

            <div className='action-bar-loginError'>
            <div className='left-icons-loginError' >
                 <ArrowBackIosIcon  />
            </div>    
        </div>
        <div className='create-icon-loginError'>
            Login
        </div>
        <div className='details-Error'>
        Please enter your details
        </div>
        <div className='username-loginError'>
        Username
        </div>
        <input className='username-input-loginError' placeholder='Type your username here' type='text'></input>
        
        <div className='password-loginError'>
        Password
        </div>
        <input className='password-input-loginError' placeholder='Type your password here' type='text'></input>
        <div className="login-error"><p className="login-error-text">Enter correct details</p></div>
        <Button variant="contained" className='login-button-LoginErrorPage' sx={{ color: '#FFFFF', backgroundColor: '#F2C94C'}}>Login</Button>
		</div>
	);
}

export default LoginError;
