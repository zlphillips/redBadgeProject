import React, { Component, useState, useEffect } from 'react';
import Post from './Post'
import Typed from 'react-typed';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  



    

//fetch all posts
    const fetchAll = (props: any) => {
        fetch('http://localhost:3002/redBadge/post/all-posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
            }
        })
            .then(data => data.json())
            .then(data => {setPosts(data)})
            .catch(err => console.warn(err))
            
    }

//timeout to load posts
    useEffect(() => {
        const timer = setTimeout(() => {
         fetchAll(props)
        }, 1000);
        return () => clearTimeout(timer);
      }, []);


 const helloStyles = {
     fontSize: '5vh'
 }

 const borderStyle = {
     borderStyle: 'solid',
     borderColor: '#F2CC8F',
     borderWidth: 'thin'
 }
    
    return (
        <div>
            <h1 className='element' ></h1>
            <Typed
                    style={helloStyles}
                    strings={['Hello there ...', 'Welcome, to 404']}
                    typeSpeed={100}
                />
                <br/>
            <div className="post_bg"
            style={{border:"1px solid red"}}>
                <div className="p-3 my-2 rounded" 
                style={{marginRight:"auto", marginLeft:"auto", border:"1px solid orange"}}>
                    {posts.map((post: Posts, index: number) => (
                        <Post post={post} index={index} token={props.token} fetchAll={fetchAll}
                        // images={images} setImages={setImages}
                        />
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default Home;