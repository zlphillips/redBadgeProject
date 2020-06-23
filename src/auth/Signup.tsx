import React, {useState} from 'react'
import "../css/signup.css"
// import {Form, FormGroup, Input} from 'reactstrap'
// import { render } from '@testing-library/react'
// import APIURL to files that send network requests


const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
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
    
    const handleSubmit = () => {
        // e.preventDefault();
        const url=`http://localhost:3002/redBadge/user/signup`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(data => data.json())
        .catch(err => console.log(err))
    }

    // render() {
    return (
        <div >
            <div id="form_right">
                <h1>Join the fun!</h1>
                <div className="input_container">
                    <i className="fas fa-envelope"></i>
                    <input placeholder="First Name" type="text" name="firstName" id="field_firstName" className='input_field'
                    onChange={(e) => { setFirstName(e.target.value);
                    handleChange(); console.log(isFormValid)
                    }}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Last Name" type="text" name="lastName" id="field_lastName" className='input_field'
                    onChange={(e) => {setLastName(e.target.value); handleChange();console.log(isFormValid)}}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Email" type="email" name="Password" id="field_password" className='input_field'
                    onChange={(e) => {setEmail(e.target.value); handleChange();console.log(isFormValid)}}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Username" type="text" name="Username" id="field_password" className='input_field'
                    onChange={(e) => {setEmail(e.target.value); handleChange();console.log(isFormValid)}}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Password" type="password" name="Password" id="field_password" className='input_field'
                    onChange={(e) => {setPassword(e.target.value); handleChange();console.log(isFormValid)}}/>
                </div>
                <input type="submit" value="Login" id='input_submit' onSubmit={() => handleSubmit()} className='input_field' disabled={!isFormValid}/>
                <span id='create_account'>
                    {/* AUTH LOGIN SHOULD BE HERE INSTEAD... o.O */}
                    <a href="#">Login</a>
                </span>
            </div>
        </div>
    )}
export default Signup;