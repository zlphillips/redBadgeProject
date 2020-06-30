import React, { Component, useState, useEffect } from 'react';
import Profile from '../components/Profile'
// import { Toast, ToastBody, ToastHeader } from 'reactstrap';
// import StockPic2 from '../assets/headshot2.jpg'
// import { SSL_OP_SINGLE_DH_USE } from 'constants';




export interface Posts {
    media: Blob,
    description: string,
    likes: number,
    owner: number
}




export interface Users {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    passwordhash: string
}



const Home = (props: any) => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])


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
 



    const fetchAll = () => {
        fetch('http://localhost:3002/redBadge/post/all-posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
            }
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
            .catch(err => console.warn(err))

    }



    useEffect(() => fetchAll(), [])



    const fetchUsers = () => {
        fetch('http://localhost:3002/redBadge/user/username', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
            }
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
            .catch(err => console.warn(err))

    }


    useEffect(() => fetchUsers(), [])



    return (
        <div>
            <div className="p-3 my-2 rounded" style={toastStyles}>
                <p>Hello There</p>
                <Profile/>
                {/* <Toast style={singleToast}>
                    {posts.map((post: Posts , index: number) => (
                        <div>
                            <ToastHeader>
                                <div style={userStyles}>
                                    <img src={StockPic2} style={photoStyle} />
                                    <h1 style={{ fontSize: '3vh' }}>{user.username}</h1>
                                    <div>
                                <p>{`posted ${number} minutes ago`}</p>
                                </div>
                                </div>
                            </ToastHeader>
                        ))}


                        {posts.map((post: Posts, index: number) => (
                            <ToastBody>
                                <h3 style={{ fontSize: '3vh' }}>{post.description}</h3>
                                <h3>{post.likes}</h3>
                                <h3>{}</h3>
                            </ToastBody>
                        </div>
                    ))}
                </Toast> */}
            </div>
        </div>
    )
}

export default Home