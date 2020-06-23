import React, {useState} from 'react';
import Change from '../auth/Auth'
import {AuthProps} from "./Auth"
import "../css/login.css"

const Login = (props: AuthProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    const handleChange = () => {
        console.log('err')
        if (username.length > 0 && password.length > 0){
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }
    
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const url='http://localhost:3002/user/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                username: username,
                password: password,
            }}),
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
        <div >
           {/* <div id="form_left">
                 <img src="icon.png" alt="LOGO WILL GO HERE"/>
                </div> */}
            <div id="form_right">
                <h2>Welcome Back Troll Master</h2>
                <div className="input_container">
                    <i className="fas fa-envelope"></i>
                    <input placeholder="Email" type="email" name="Email" id="field_email" className='input_field'
                    onChange={(e) => { setUsername(e.target.value);
                    handleChange(); console.log(isFormValid)
                    }}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Password" type="password" name="Password" id="field_password" className='input_field'
                    onChange={(e) => {setPassword(e.target.value); handleChange();console.log(isFormValid)}}/>
                </div>
                <button type="button" value="Login" id='input_submit'onClick={(e) => handleSubmit(e)} className='input_field' disabled = {!isFormValid}>Login</button>
                <span>Forgot
                    {/* FIGURE OUT WHAT HREF TO USE */}
                     <a href="#"> Email / Password ?</a>
                     </span>
                <span id='create_account'>
                    {/* AUTH SIGN UP SHOULD BE HERE INSTEAD... o.O */}
                   
                </span>
            </div>
        </div>
        )        
    }      
    export default Login
    
   