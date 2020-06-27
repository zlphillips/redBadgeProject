import React, {useState, MouseEvent} from 'react'
import "../css/signup.css"
// import {Form, FormGroup, Input} from 'reactstrap'
// import { render } from '@testing-library/react'
// import APIURL to files that send network requests


const Signup = (props: any) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    // valid form - "isFormValid" = the state variable
    const [isFormValid, setIsFormValid] = useState(true)
    // changing false/true
    const handleChange = () => {
        if (email.length > 0 && password.length > 0){
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }
    
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        const url=`http://localhost:3002/redBadge/user/signup`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                {user:{
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
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

    // render() {
    return (
        <div className="form_wrapper">
            <div id="main_form">
                <h1>Join the fun!</h1>
                <div className="input_container">
                    <i className="fas fa-envelope"></i>
                    <input placeholder="First Name" type="text" name="firstName" id="field_firstName" className='input_field'
                    onChange={(e) => { setFirstName(e.target.value);
                    handleChange();
                    }}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Last Name" type="text" name="lastName" id="field_lastName" className='input_field'
                    onChange={(e) => {setLastName(e.target.value); handleChange();}}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Email" type="email" name="Password" id="field_password" className='input_field'
                    onChange={(e) => {setEmail(e.target.value); handleChange();}}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Username" type="text" name="Username" id="field_password" className='input_field'
                    onChange={(e) => {setEmail(e.target.value); handleChange();}}/>
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input  placeholder="Password" type="password" name="Password" id="field_password" className='input_field'
                    onChange={(e) => {setPassword(e.target.value); handleChange();}}/>
                </div>
                <button type="button" value="Submit" id='input_submit' onClick={(e) => handleSubmit(e)} className='input_field' disabled={!isFormValid}>Submit</button>
                <span id='create_account'>
                    {/* AUTH LOGIN SHOULD BE HERE INSTEAD... o.O */}
                </span>
            </div>
        </div>
    )}
export default Signup;