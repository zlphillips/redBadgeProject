import React, {useState} from 'react'
import Signup from './Signup'
import Login from './Login'
// import "../css/signup.css"
// import "../css/login.css"
export interface AuthProps {
    protectedViews: (sessionToken: string) => void;
}


const Auth = (props: AuthProps) => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    
    
return(
    <div className="AuthDiv"
    style={{alignSelf:"center", padding: '1%', backgroundColor:'#F4F1DE', borderRadius:'3em',  width:"50%",fontSize:"1.20em", margin: '3%'}}
    // style={{textAlign:"center", color:"#4D896F", backgroundColor: 'orange',
    // borderRadius: '50px', padding: '1%', width: '40%'}}
    >
        
        {
            isLoggingIn ? <Login protectedViews={props.protectedViews} /> : <Signup protectedViews={props.protectedViews}/>
        }
        {
            isLoggingIn ? (
                <button 
                style={{color:"white", backgroundColor: "#81B29A", padding: '2%', borderColor: '#81B29A', borderStyle: 'solid', borderRadius: '2em', width: '88%'}}
                onClick={e => setIsLoggingIn(!isLoggingIn)}>
                Become a Troll
                </button>
            ) : (
                <button onClick={e => setIsLoggingIn(!isLoggingIn)}  style={{color:"white", backgroundColor: "#81B29A",margin:"5%", padding: '2%',borderColor:"#81B29A", borderRadius: '2em', width:'88%' }}>
                Login
                </button>
            )
        }
    </div>
)

}

export default Auth

