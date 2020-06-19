import React, {useState} from 'react'
import { URL } from 'url';
// import APIURL from "../Helpers/environment"
// import {Router} from 'react-router-dom'
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
        <div className="loginBodyDiv">
        <div className="container"
            style={{borderRadius:"20px", width:"500px", backgroundSize:"cover", height:"500px", paddingTop:"150px", backgroundPosition:"center"}}>
             {/* position:"inherit"*/}
       <form className="loginForm" onSubmit={() => handleSubmit()}
       style={{display:"inline-block"}}>
            <h3
            style={{color:"#4EB187"}}>Sign in </h3>
            <div className="emailDiv">
                <h4><label htmlFor="email"
                style={{padding:"2px", color:"#208C57"}}>Email</label></h4>
                <input
                    type="text"
                    id="emailField"
                    name="email"
                    className="input-field"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        // console.log(email);
                        // console.log(password);
                        handleChange()
                        console.log(isFormValid)
                    }}
                />
            </div>
            <div className="pwordDiv">
                <h4><label htmlFor="password"
                style={{padding:"2px", color:"#208C57"}}>
                    Password</label></h4>
                <input
                    type="password"
                    id="pWordField"
                    name="password"
                    className="input-field"
                    // onChange={(e) => {
                    //     setPassword(e.target.value);
                    //     // console.log(email)
                    //     // console.log(password)
                    //     handleChange()
                    //     console.log(isFormValid)
                    // }}
                />
            </div>
                <br/>
                <input type="submit" disabled={!isFormValid}/>
            </form>
            <br/>
        </div>
     </div>
    )
}

export default Login



// import React, {useState} from 'react'
// import {Form, FormGroup, Label, Input, Button} from 'reactstrap' 

// const Login = (props) => {
//     const [username, setUsername] = useState('') 
//     const [password, setPassword] = useState('')
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         fetch('http://localhost:3000/login',{
//             method: 'POST',
//             body: JSON.stringify({user:{username: username, password: password}}),
//             headers: new Headers ({
//                 'Content-Type': 'application/json'
//             })
//         }) .then(
//             (response) => response.json()
//         ) .then((data) => {
//             props.updateToken(data.sessionToken)
//         })
//     }
//     return(
//         <div>
//             <h1>Login</h1>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor="username">Username</Label>
//                     <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
//                 </FormGroup>
//                 <FormGroup>
//                     <Label htmlFor="password">Password</Label>
//                     <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
//                 </FormGroup>
//                 <Button type="submit">Login</Button>
//             </Form>
//         </div>
//     )
// }



// export default Login