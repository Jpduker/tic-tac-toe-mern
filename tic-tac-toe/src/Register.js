import React, {useState} from 'react'
import {register} from './Auth'

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./Register.css";
const Register = () => {
        const [form,setForm] = useState({
            email:'',
            password:''
        })
        const handleSubmit = async(e)=>{
            e.preventDefault();
            await register(form);
    
        }
    
	return (
		<div>
			<div className="action-bar">
				<div className="left-icons">
					<ArrowBackIosIcon />
				</div>
			</div>
			<div className="create-icon">Create account</div>
			<div className="know-you">Let's get to know you better</div>
			<form onSubmit={handleSubmit} >
				<div className="name">Your name</div>
				<input
					className="name-input"
					placeholder="Type your name here"
					type="text"
                    
				></input>

				<div className="username">Username</div>
				<input
					className="username-input"
					placeholder="Type your username here"
					type="text"
				></input>

				
                <label className="email" for="email">Email</label>
				<input
					className="email-input"
					placeholder="Type your email here"
                    id='mail'
					type="text"
                    onChange={(e) =>
                    setForm({...form, email: e.target.value})}
				></input>

			
                <label className="password" for="password">Password</label>
				<input
					className="password-input"
					placeholder="Type your password here"
					type="password"
                    onChange={(e) =>
                    setForm({...form, password: e.target.value})}
				></input>
                <button className="register-button-registerPage" type="submit" >
                  Register
             </button>
			</form>
            

		</div>
	);
}

export default Register;

//avanga code uh!

// import React, {useState} from 'react'
// import {register} from './Auth'

// const Register = () => {
//     const [form,setForm] = useState({
//         email:'',
//         password:''
//     })
//     const handleSubmit = async(e)=>{
//         e.preventDefault();
//         await register(form);

//     }
//     const InputFields = {
//         padding:'0.5rem',
//         margin:'0.8rem',
//         borderRadius: '4px'
//     }
//     const ButtonStyle = {
//         borderRadius: '4px',
//         padding:'0.7rem',
//         margin:'0.5rem'
//     }
//     return (
//         <div>
//             <h1>Register</h1>
//             <form onSubmit={handleSubmit} >
//             <label for="email">Email</label>
//             <input type="text" style={InputFields}
//                    placeholder="email" id="mail"
//             onChange={(e) =>
//             setForm({...form, email: e.target.value})} />
//             <br/>
//             <label for="password">Password</label>
//             <input type="password"  placeholder="Password"
//                    style={InputFields}
//             onChange={(e) =>
//             setForm({...form, password: e.target.value})}/>
//             <br/>
//             <button type="submit" style={ButtonStyle}>
//                 Submit
//             </button>
//             </form>
//         </div>

//     )
// }

// export default Register
