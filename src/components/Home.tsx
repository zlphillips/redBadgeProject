import React, { Component, useState, useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import StockPic2 from '../assets/headshot2.jpg'
import { SSL_OP_SINGLE_DH_USE } from 'constants';
import FetchHome from './FetchHome'





export interface Posts {
    media: Blob,
    description: string,
    likes: number,
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    passwordhash: string
}






const Home = (props: any) => {
    const [posts, setPosts] = useState([] as any)


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

    





    return (
        <div>
            <FetchHome token={props.token}/>
            {/* <div className="p-3 my-2 rounded" style={toastStyles}>
                <h1>Hello There . .</h1>
                {posts.map((post: Posts, index: number) => (
                    <Toast style={singleToast}>
                        <div>
                            <ToastHeader>
                                <div style={userStyles}>
                                    <img src={StockPic2} style={photoStyle} />
                                    <h1 style={{ fontSize: '3vh' }}></h1>
                                    <div>
                                        <p>{`posted ${0} minutes ago`}</p>
                                    </div>
                                </div>
                            </ToastHeader>
                            <ToastBody>

                                <h3>{post.description}</h3>
                                 <form action="/upload/photo" enctype="multipart/form-data" method="POST"> 
                                <input type="file" name="myImage" accept="image/*" />
                                <input type="submit" value="Upload Photo"/>
                                </form> 
                                <h3>{post.likes}</h3>
                            </ToastBody>
                        </div>
                    </Toast>
                ))}
            </div> */}
        </div>
    )
}

export default Home