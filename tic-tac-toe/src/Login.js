import React, {useState} from 'react';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Login.css";
import {login} from './Auth'

const Login = () => {
    const [form,setForm] = useState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await login(form);
        console.log(e.target.value)
  
    }
	return (
		<div>
			<div className="action-bar-login">
				<div className="left-icons-login">
					<ArrowBackIosIcon />
				</div>
			</div>
            
			<div className="create-icon-login">Login</div>
			<div className="details">Please enter your details</div>
            <form onSubmit={handleSubmit}>
			<label className='username-login' for="email">Email</label>
			<input
				className="username-input-login"
				placeholder="Type your email here"
				type="text"
                id='mail'
                onChange={(e) => 
                setForm({...form, email: e.target.value})} 
			></input>

			<label className='password-login' for="password">Password</label>
			<input
				className="password-input-login"
				placeholder="Type your password here"
				type="text"
                onChange={(e) => 
                setForm({...form, password: e.target.value})}
			></input>
			
            <button  className="login-button-LoginPage" type="submit" >
                  Login
             </button>
            </form>
            
           
		</div>
	);
}

export default Login;
