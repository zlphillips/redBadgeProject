import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
import { Session } from 'inspector'
// import "../css/signup.css"
// import "../css/login.css"
export interface AuthProps {
    protectedViews: (sessionToken: string, Boss: boolean) => void;
}


const Auth = (props: AuthProps) => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)


    return (
        <div className="AuthDiv"
            style={{ alignSelf: "center",display:"inline-block", padding: '1%',margin:"5%", backgroundColor: '#F4F1DE', 
            borderRadius: '50px', width: "50%", fontSize: "140%" }}
    
        >

            {
                isLoggingIn ? <Login protectedViews={props.protectedViews} /> : 
                <Signup protectedViews={props.protectedViews} />
            }
            {
                isLoggingIn ? (
                    <button
                        style={{ color: "white", backgroundColor: "#81B29A", padding: '2%', borderColor: '#81B29A', 
                        borderStyle: 'solid', borderRadius: '50px', width: '90%' }}
                        onClick={e => setIsLoggingIn(!isLoggingIn)}>
                        Become a Troll
                </button>
                ) : (
                    <button 
                        onClick={e => setIsLoggingIn(!isLoggingIn)} 
                        style={{ color: "white", backgroundColor: "#81B29A", marginTop: "5%", padding: '2%',
                         borderRadius: '50px', width: '90%' }}>
                            Login
                </button>
                    )
            }
        </div>
    )

}

export default Auth

