import React, { useState, MouseEvent } from 'react';
import { AuthProps } from './Auth'
import {Tooltip} from 'reactstrap'
import bobby from '../assets/bobby.jpg'
// import Change from '../auth/Auth'
import "../css/login.css"

const Login = (props: AuthProps) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    const [isFormValid, setIsFormValid] = useState(false)
    const [passwordFail, setPasswordFail] = useState(false)
    const handleChange = () => {
        if (username.length > 5) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }



    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        const url = 'http://localhost:3002/redBadge/user/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        )
            .then((data => {
                console.log(data)
                if (data.sessionToken !== undefined){
                props.protectedViews(data.sessionToken, data.user.admin)}
                else {
                    // add the display of login pw fail here
                    setPasswordFail(true)
                    console.log('failed password')
                    setTimeout(()=> setPasswordFail(false), 2000)
                }
                // add IF ELSE if the password doesn't match from the server (add notification alert too)
                // if data.sessionToken = undefined then display failed login, else run the prop.protected
                
                // if (data.sessionToken===localStorage.getItem("token"))
                //     props.data.push("/home")
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
                    onChange={(e) => {setUsername(e.target.value);
                    handleChange();
                    }}/> 
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input placeholder="Password" type="password" name="Password" id="field_password" className='input_field'
                        onChange={(e) => {setPassword(e.target.value); handleChange(); }} />
                </div>
                <div>
                <button type="button" value="Login" id='input_login_submit' onClick={(e) => handleSubmit(e)} className='input_field' disabled={!isFormValid}>Submit</button>
                <Tooltip target="input_login_submit" isOpen={passwordFail} placement="right"
                style={{backgroundColor: "transparent"}}>
                    {/* My Mama says you're wrong... */}
                    <img src={bobby}
                    style={{width:"130%", height:"130%"}}/>
                </Tooltip>
                </div>
                <span>Forgot
                    {/* FIGURE OUT WHAT HREF TO USE */}
                    <a href="#"> Email / Password</a>
                </span>
            </div>
        </div>
    )
}
export default Login

