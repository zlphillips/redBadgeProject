import React, {useState} from 'react'

import Signup from './Signup'
import Login from './Login'
// import '../App.css'

{/* <link rel="stylesheet" type="text/css" href="AuthForm.css"> */}


const Auth = () => {//2: pull in props that will be passed down
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    // const [isSigningUp, setIsSigningUp] = useState(true)
    
return(
    <div className="AuthDiv"
    style={{textAlign:"center", fontSize:"20px", color:"#4D896F"}}>
        {/* <h2>{Signup ? 'Signup' : 'Sign In'}</h2> */}
        {/* {} shows JSX is in use */}
        {
            isLoggingIn ? <p>Welcome back troll master</p> : <p>Join the fun!</p>
        }
        {
            isLoggingIn ? <Login/> : <Signup/>
        }
        {
            isLoggingIn ? (
                <button onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Sign up
                </button>
            ) : (
                <button onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Sign in
                </button>
            )
        }
    </div>
)

}

export default Auth