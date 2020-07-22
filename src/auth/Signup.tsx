import React, { useState, MouseEvent} from 'react'
// import {Button, UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap'
import {UncontrolledTooltip, Tooltip} from 'reactstrap'
import "../css/signup.css"
// import {Form, FormGroup, Input} from 'reactstrap'
// import { render } from '@testing-library/react'
// import APIURL to files that send network requests

// Password Strength
export enum PasswordCheckStrength {
    Short,
    Common,
    Weak,
    Ok,
    Strong,
}

// create an instance of PasswordCheckService:
// let checker = new PasswordCheckService()

// to check password:
// checker.checkPasswordStrength(password)


export class PasswordCheckService {
    public static get MinimumLength():
    number {
        return 6;
    }
    private commonPasswordPatterns =
    /passwo.*|123456.*|098765.*|qwerty.*|asdfgh.*|zxcvbn.*|footba.*|baseba.*|dragon.*/;
    public isPasswordCommon(
        password:string
    ) : boolean {
        return this.commonPasswordPatterns.test(password)
    };
    public checkPasswordStrength(password:string) {
        // Build up the strenth of our password
        let numberOfElements = 0;
        numberOfElements = /.*[a-z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Lowercase letters
        numberOfElements = /.*[A-Z].*/.test(password) ? ++numberOfElements : numberOfElements;      // Uppercase letters
        numberOfElements = /.*[0-9].*/.test(password) ? ++numberOfElements : numberOfElements;      // Numbers
        numberOfElements = /[^a-zA-Z0-9]/.test(password) ? ++numberOfElements : numberOfElements;   
        // Special characters (inc. space)

        // assume password is poor
        let currentPasswordStrength = PasswordCheckStrength.Short
        // check strength of the password using following rules:
        if (password === null || password.length < PasswordCheckService.MinimumLength){
            currentPasswordStrength = PasswordCheckStrength.Short;
        } else if (
            this.isPasswordCommon
            (password) === true
        ) {
            currentPasswordStrength = PasswordCheckStrength.Common
        } else if (numberOfElements === 0 || numberOfElements === 1 || numberOfElements === 2) {
            currentPasswordStrength = PasswordCheckStrength.Weak
        } else if (numberOfElements === 3){
            currentPasswordStrength = PasswordCheckStrength.Ok
        } else {
            currentPasswordStrength = PasswordCheckStrength.Strong
        }
        return currentPasswordStrength
    } 
}


// Sign Up

const Signup = (props: any) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    // valid form - "isFormValid" = the state variable
    const [isFormValid, setIsFormValid] = useState(true)
    const [weakPassword, setWeakPassword] = useState(false)


    // changing false/true
    const handleChange = () => {
        if (username.length > 5) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }
    let checker = new PasswordCheckService()
    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        console.log('handling submit')
        console.log(checker.checkPasswordStrength(password))
        // to check password:
    if (checker.checkPasswordStrength(password) === PasswordCheckStrength.Strong){
        const url = `http://localhost:3002/redBadge/user/signup`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(
                {
                    user: {
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        email: email,
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
                props.protectedViews(data.sessionToken)
            }))
            .catch(err => console.log(err))
    }
    else{
        // put the trigger to make notification visable here-----
        setWeakPassword(true)
        console.log('setting weak password')
        setTimeout(()=> setWeakPassword(false), 2000)
    }};

    // render() {
    return (
        <div className="form_wrapper">
            <div id="main_form">
                <h1>Join the fun!</h1>
                <div className="input_container">
                    <i className="fas fa-envelope"></i>
                    <input placeholder="First Name" type="text" name="firstName" id="field_firstName" className='input_field'
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            handleChange();
                        }} />
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input placeholder="Last Name" type="text" name="lastName" id="field_lastName" className='input_field'
                        onChange={(e) => { setLastName(e.target.value); handleChange(); }} />
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input placeholder="Email" type="email" name="email" id="field_email" className='input_field'
                        onChange={(e) => { setEmail(e.target.value); handleChange(); }} />
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input placeholder="Username" type="text" name="Username" id="field_username" className='input_field'
                        onChange={(e) => { setUsername(e.target.value); handleChange(); }} />
                </div>
                <div className="input_container">
                    <i className="fas fa-lock"></i>
                    <input placeholder="Password" type="password" name="Password" id="field_password" className='input_field'
                        onChange={(e) => { setPassword(e.target.value); handleChange(); }} />
                    <UncontrolledTooltip placement="right" id="toolTip" target="field_password">
                        Passwords must contain:
                        <br/>
                        6 characters
                        <br/>
                        1 Uppercase
                        <br/>
                        1 Lowercase
                        <br/>
                        1 Number
                        <br/>
                        1 Special Character
                    </UncontrolledTooltip>
                </div>
                <div>
                    <button type="button" value="Submit" id='input_signup_submit' onClick={(e) => handleSubmit(e)} className='input_field' disabled={!isFormValid}>Submit</button>
                    <Tooltip target="input_signup_submit" isOpen={weakPassword} placement="right">
                    Your password is weak bro
                        <br/>
                        6 characters
                        <br/>
                        1 Uppercase
                        <br/>
                        1 Lowercase
                        <br/>
                        1 Number
                        <br/>
                        1 Special Character
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
export default Signup;