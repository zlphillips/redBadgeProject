import React, { Component, useState, useEffect } from 'react';
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
    // const [images, setImages] = useState([] as any)
  

    const toastStyles = {
        marginRight: 'auto',
        marginLeft: 'auto'

    }


//fetch all posts
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
                // console.log("Owner:", (data[0].userId))
                console.log("look here:", data)
                setPosts(data)
                
    })
            .catch(err => console.warn(err))

    }

//timeout to load posts
    useEffect(() => {
        const timer = setTimeout(() => {
         fetchAll()
        }, 3000);
        return () => clearTimeout(timer);
      }, []);



    

    return (
        <div>
            <h1>Hello there . . .</h1>
            <div className="p-3 my-2 rounded" style={toastStyles}>
                {posts.map((post: Posts, index: number) => (
                    <Post post={post} index={index} token={props.token} 
                    // images={images} setImages={setImages}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default Home;