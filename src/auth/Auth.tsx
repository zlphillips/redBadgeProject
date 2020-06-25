import React, {useState} from 'react'
import Signup from './Signup'
import Login from './Login'
import "../css/signup.css"

export interface AuthProps {
    protectedViews: (sessionToken: string) => void;
}


const Auth = (props: AuthProps) => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    
    
return(
    <div className="AuthDiv" 
    // id="form_wrapper"
    style={{textAlign:"center", color:"#4D896F", backgroundColor: 'var(--form_bg)',
    borderRadius: '50px', padding: '15%' }}>
       
        {
            isLoggingIn ? <Login protectedViews={props.protectedViews} /> : <Signup protectedViews={props.protectedViews}/>
        }
        {
            isLoggingIn ? (
                <button 
                style={{fontSize:"110%",color:"white", backgroundColor: "#81B29A", padding: '3%', borderColor: '#81B29A', borderStyle: 'solid', borderRadius: '50px'}}
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

