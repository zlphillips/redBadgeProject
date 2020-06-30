import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'
// import "../css/signup.css"
// import "../css/login.css"
export interface AuthProps {
    protectedViews: (sessionToken: string) => void;
}


const Auth = (props: AuthProps) => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)


    return (
        <div className="AuthDiv"
            style={{ alignSelf: "center", padding: '1%',margin:"5%", backgroundColor: '#F4F1DE', borderRadius: '50px', width: "50%", fontSize: "140%" }}
        // style={{textAlign:"center", color:"#4D896F", backgroundColor: 'orange',
        // borderRadius: '50px', padding: '1%', width: '40%'}}
        >

            {
                isLoggingIn ? <Login protectedViews={props.protectedViews} /> : <Signup protectedViews={props.protectedViews} />
            }
            {
                isLoggingIn ? (
                    <button
                        style={{ color: "white", backgroundColor: "#81B29A", padding: '2%', borderColor: '#81B29A', borderStyle: 'solid', borderRadius: '50px', width: '88%' }}
                        onClick={e => setIsLoggingIn(!isLoggingIn)}>
                        Become a Troll
                </button>
                ) : (
                        <button onClick={e => setIsLoggingIn(!isLoggingIn)} style={{ color: "white", backgroundColor: "#81B29A", marginTop: "5%", padding: '2%', borderRadius: '50px', width: '90%' }}>
                            Login
                </button>
                    )
            }
        </div>
    )

}

export default Auth

