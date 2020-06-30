import React, {useState, MouseEvent} from 'react';
import {AuthProps} from './Auth'
import "../css/login.css"

const Login = (props: AuthProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    const handleChange = () => {
        if (username.length > 0 && password.length > 0){
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }


    
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        const url='http://localhost:3002/redBadge/user/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                username: username,
                password: password,
                }
            }),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        }).then(
            (response) => response.json()
        )
        .then((data => {
            props.protectedViews(data.sessionToken)
        }))
        .catch(err => console.log(err))
    }


    return (
        <div id="form_wrapper" >
           {/* <div id="form_left">
                 <img src="icon.png" alt="LOGO WILL GO HERE"/>
                </div> */}
            <div id="main_form">
                <h2>Welcome Back Troll Master</h2>
                <div className="input_container">
                    <i className="fas fa-envelope"></i>
                    <input placeholder="Username" type="text" name="Username" id="field_username" className='input_field'
                    onChange={(e) => { setUsername(e.target.value);
                    handleChange();
                    }}/> 
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Password" type="password" name="Password" id="field_password" className='input_field'
                    onChange={(e) => {setPassword(e.target.value); handleChange();}}/>
                </div>
                <button type="button" value="Login" id='input_submit' onClick={(e) => handleSubmit(e)} className='input_field' disabled = {!isFormValid}>Submit</button>
                <span>Forgot
                    {/* FIGURE OUT WHAT HREF TO USE */}
                     <a href="#"> Email / Password</a>
                </span>
            </div>
        </div>
        )        
    }      
    export default Login
    
   