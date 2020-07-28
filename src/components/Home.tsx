import React, { Component, useState, useEffect } from 'react';
import Post from './Post'
import Typed from 'react-typed';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import APIURL from '../helpers/environment';

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
    const fetchAll = () => {
        fetch(`${APIURL}/redBadge/post/all-posts`, {
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
         fetchAll()
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
            <div className="post_bg">
                <div className="p-3 my-2 rounded" 
                style={{marginRight:"auto", marginLeft:"auto"}}>
                    {posts.map((post: Posts, index: number) => (
                        <Post post={post} index={index} token={props.token} fetchAll={fetchAll} admin={props.admin} />
                    ))}
                </div> 
            </div>
            
        </div>
    )
}

export default Home;