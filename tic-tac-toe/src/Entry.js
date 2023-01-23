import React from 'react';
import "./Entry.css";
import  Button  from '@mui/material/Button';

function Entry() {
   
  return (
    <div className='entry'>

        <div className='async'>async</div>
        <div className='tic-tac-toe'>tic tac toe</div>
        <div className='login'>
        <Button className='login-button'>Login</Button>
        </div>
       

    </div>
  )
}

export default Entry