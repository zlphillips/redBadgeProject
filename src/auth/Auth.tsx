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
    style={{textAlign:"center", color:"#4D896F"}}>
        {/* <h2>{Signup ? 'Signup' : 'Sign In'}</h2> */}
        {/* {} shows JSX is in use */}
        {/* {
            isLoggingIn ? <p>Welcome Back, Troll Master</p> : <p>Are you troll enough?</p>
        } */}
        {
            isLoggingIn ? <Login/> : <Signup/>
        }
        {
            isLoggingIn ? (
                <button 
                style={{fontSize:"15px",color:"green"}}
                onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Join Us!
                </button>
            ) : (
                <button onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Login
                </button>
            )
        }
    </div>
)

}

export default Auth
