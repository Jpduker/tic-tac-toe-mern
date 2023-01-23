import React from 'react';
import "./Entry.css";
import  Button  from '@mui/material/Button';


const styles = theme => ({
    containedBlue: {
      color: theme.palette.getContrastText('#2F80ED'),
      backgroundColor: '#2F80ED',
      "&:hover": {
        backgroundColor: '#2F80ED',
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: '#2F80ED'
        }
      }
    },
  
    // This is required for the '&$disabled' selector to work
    disabled: {}
  });
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