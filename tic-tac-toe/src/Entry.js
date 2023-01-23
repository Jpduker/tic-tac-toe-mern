import React from 'react';
import "./Entry.css";
import  Button  from '@mui/material/Button';



function Entry() {
 
  return (
    <div className='entry'>

        <div className='async'>async</div>
        <div className='tic-tac-toe'>tic tac toe</div>
        
   
        <Button variant="contained" className='login-button'  sx={{ color: '#FFFFF', backgroundColor: '#2F80E' }}>Login</Button>
        <Button variant="contained" className='register-button' sx={{ color: '#FFFFF', backgroundColor: '#F2C94C'}}>Register</Button>

        

    </div>
  )
}

export default Entry