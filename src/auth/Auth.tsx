import React, {useState} from 'react'
import Signup from './Signup'
import Login from './Login'
import "../css/signup.css"



const Auth = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    
    
return(
    <div className="AuthDiv"
    style={{textAlign:"center", color:"#4D896F"}}>
       
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

