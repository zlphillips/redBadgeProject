import React, {useState} from 'react';
import "../css/login.css"
// import {Row, Col, Card, CardTitle, CardText} from 'reactstrap'
// import { URL } from 'url';
// import APIURL to files that send network requests


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    // valid form - "isFormValid" = the state variable
    const [isFormValid, setIsFormValid] = useState(false)
    // changing false/true
    const handleChange = () => {
        console.log('err')
        if (email.length > 0 && password.length > 0){
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }
    
    // COMMENT OUT HANDLESUBMIT
    const handleSubmit = () => {
        // e.preventDefault();
        const url=`/user/login`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(data => data.json()) //parse use data.json()
        // .then(userData => {   
        //     props.updateToken(userData.sessionToken)
        // if( userData.sessionToken===localStorage.getItem("token"))
        //     props.history.push("/profile")
        // })
        .catch(err => console.log(err))
    }

    return (
        <div id="form_wrapper">
            <div id="form_left">
                <img src="icon.png" alt="LOGO WILL GO HERE"/>
            </div>
            <div id="form_right">
                <h2>Welcome Back Troll Master</h2>
                <div className="input_container">
                    <i className="fas fa-envelope"></i>
                    <input placeholder="Email" type="email" name="Email" id="field_email" className='input_field'
                    onChange={(e) => { setEmail(e.target.value);
                    handleChange(); console.log(isFormValid)
                    }}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Password" type="password" name="Password" id="field_password" className='input_field'
                    onChange={(e) => {setPassword(e.target.value); handleChange();console.log(isFormValid)}}/>
                </div>
                <input type="submit" value="Login" id='input_submit'onSubmit={() => handleSubmit()} className='input_field' disabled={!isFormValid}/>
                <span>Forgot
                    {/* FIGURE OUT WHAT HREF TO USE */}
                     <a href="#"> Email / Password ?</a>
                     </span>
                <span id='create_account'>
                    {/* AUTH SIGN UP SHOULD BE HERE INSTEAD... o.O */}
                    <a href="http://localhost:3000/user/signup">Become a troll</a>
                </span>
            </div>
        </div>
        )        
    }      
    export default Login
    
    //     <input type="email" className="form-control" id="email" placeholder="Email"
    //     onChange={(e) => { setEmail(e.target.value);
    //     handleChange()
    // }}/>

        // <input type="password" className="form-control" id="pwd" placeholder="Password"
        // onChange={(e) => {setPassword(e.target.value); handleChange();console.log(isFormValid)}}/>

    // <div className="checkbox">
    //     <label
    //     style={{fontSize:"20px"}}><input type="checkbox"></input>Remember me</label>
    // </div>
    // <input type="submit" disabled={!isFormValid}/>