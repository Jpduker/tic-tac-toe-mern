import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './Register.css';
import  Button  from '@mui/material/Button';
function Register() {
  return (
    <div>
        <div className='action-bar'>
            <div className='left-icons' >
                 <ArrowBackIosIcon  />
            </div>    
        </div>
        <div className='create-icon'>
            Create account
        </div>
        <div className='know-you'>
        Let's get to know you better
        </div>
        <div className='name'>
        Your name
        </div>
        <input className='name-input' placeholder='Type your name here' type='text'></input>
        
        <div className='username'>
        Username
        </div>
        <input className='username-input' placeholder='Type your username here' type='text'></input>
       
        <div className='email'>
        Email
        </div>
        <input className='email-input' placeholder='Type your email here' type='text'></input>
        
        <div className='password'>
        Password
        </div>
        <input className='password-input' placeholder='Type your password here' type='text'></input>
    
        <Button variant="contained" className='register-button-registerPage' sx={{ color: '#FFFFF', backgroundColor: '#F2C94C'}}>Register</Button>
    </div>

  )
}

export default Register