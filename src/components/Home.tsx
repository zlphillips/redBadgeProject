import React, { Component, useState, useEffect } from 'react';
import { Toast, ToastBody, ToastHeader} from 'reactstrap';
import Comment from './Comment';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
import FetchHome from './FetchHome'
import Post from './Post'





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
                console.log("Owner:", (data[0].userId))
                setPosts(data)
    })
            .catch(err => console.warn(err))

    }


    useEffect(() => fetchAll(), [])


    return (
        <div>
            {/* <FetchHome token={props.token}/> */}
            <div className="p-3 my-2 rounded" style={toastStyles}>
                <h1>Hello There . .</h1>
                {posts.map((post: Posts, index: number) => (
                    <Post post={post} index={index} token={props.token}/>
                ))}
            </div>
        </div>
    )
}

export default Home;