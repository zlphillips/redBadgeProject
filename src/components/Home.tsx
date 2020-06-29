import React, { Component, useState, useEffect} from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import StockPic2 from '../assets/headshot2.jpg'
import { SSL_OP_SINGLE_DH_USE } from 'constants';




   export interface Posts {
        media: Blob,
        description: string,
        likes: number,
        owner: number
      }


const Home = (props: any) => {
    const [posts, setPosts] = useState([])

    const toastStyles = {
        marginRight: 'auto',
        marginLeft: 'auto'
        
    }

    const singleToast = {
        minWidth: '95vw',
        minHeight: '10vh'
    }

    const photoStyle = {
        borderStyle: 'solid',
        width: '5vh',
        height: '5vh',
        overflow: 'hidden',
        borderRadius: '50%',
        }
     
    const userStyles = {
        display: 'flex',
    }
 
    

        const user = 'susansickomode'
        const number = '4'
        const postContent = 'I need a <br/>'


//   use <string> to give useState a string type
    const [tempToken, setTempToken] = useState<string>("")

        const fetchAll  = () => {
            fetch( 'http://localhost:3002/redBadge/post/all-posts', {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' : props.token,
                }
            })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setPosts(data)})
            .catch(err => console.warn(err))
        
        }



        useEffect(() => {console.log(props.token);fetchAll()}, [])





    return(
        <div>
            <div className="p-3 my-2 rounded" style={toastStyles}>
                <Toast style={singleToast}>
                    {posts.map((post: Posts , index: number) => (
                        <div>
                            <ToastHeader>
                                <div style={userStyles}>
                                    <img src={StockPic2} style={photoStyle} />
                                    <h1 style={{fontSize: '3vh'}}>{}</h1>
                                    <div>
                                {/* <p>{`posted ${number} minutes ago`}</p> */}
                                </div>
                                </div>
                            </ToastHeader>
                            <ToastBody>
                                <h3 style={{fontSize: '3vh'}}>{post.description}</h3>
                                <h3>{post.likes}</h3>
                                <h3>{}</h3>
                            </ToastBody>
                        </div>
                    ))}
                </Toast>
            </div>
        </div>
    )
}

export default Home