import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./RegisterSuccess.css";
import  Button  from '@mui/material/Button';


function RegisterSuccess() {
	return (
		<div>
			<div className="action-bar-success">
				<div className="left-icons-success">
					<ArrowBackIosIcon />
				</div>
			</div>
			<div className="create-icon-success">Create account</div>
			<div className="know-you-success">Let's get to know you better</div>

			<div className="name-success">Your name</div>
			<input
				className="name-input-success"
				placeholder="Type your name here"
				type="text"
			></input>

			<div className="user-name-success">Username</div>
			<input
				className="username-success"
				placeholder="Type your username here"
				type="text"
			></input>

			<div className='password-success'>
				Password
			</div>
				<input className='password-input-success' placeholder='Type your password here' type='text'></input>
			<div className="toast"><p className="toast-text">Congragulations!!! Account Created</p>
			
			</div>
			<Button variant="contained" className='register-button-registerPage' sx={{ color: '#FFFFF', backgroundColor: '#E0E0E0'}}>Register</Button>

			
		</div>
	);
}

export default RegisterSuccess;
