import React, {useState} from 'react'
import Signup from './Signup'
import Login from './Login'
import "../css/signup.css"





const Auth = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    
    
return(
    <div className="AuthDiv" 
    // id="form_wrapper"
    style={{textAlign:"center", color:"#4D896F", backgroundColor: 'var(--form_bg)',
    borderRadius: '50px'}}>
       
        {
            isLoggingIn ? <Login/> : <Signup/>
        }
        {
            isLoggingIn ? (
                <button 
                style={{fontSize:"15px",color:"white", backgroundColor: "#81B29A", padding: '2%', }}
                onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Join Us!
                </button>
            ) : (
                <button onClick={e => setIsLoggingIn(!isLoggingIn)}  style={{fontSize:"15px",color:"white", backgroundColor: "#81B29A", padding: '2%', }}>
                Login
                </button>
            )
        }
    </div>
)

}

export default Auth

