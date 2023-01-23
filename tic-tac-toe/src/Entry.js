import React from 'react';
import "./Entry.css";
import  Button  from '@mui/material/Button';
import { blue ,yellow } from '@mui/material/colors';


function Entry() {
   
  return (
    <div className='entry'>

        <div className='async'>async</div>
        <div className='tic-tac-toe'>tic tac toe</div>
        
   
        <Button variant="contained" className='login-button'  sx={{ color: '#FFFFF', backgroundColor: '#2F80ED' }}>Login</Button>
        <Button variant="contained" className='register-button' sx={{ color: '#FFFFF', backgroundColor: '#F2C94C'}}>Register</Button>

        

    </div>
  )
}

export default Entry