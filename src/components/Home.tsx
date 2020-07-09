import React, { Component, useState, useEffect } from 'react';
import Profile from '../components/Profile'
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import StockPic2 from '../assets/headshot2.jpg'
import { SSL_OP_SINGLE_DH_USE } from 'constants';




export interface Posts {
    media: Blob,
    description: string,
    likes: number,
    userId: number
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
                console.log("Owner:",(data[0].userId))
                setPosts(data)
            })
            .catch(err => console.warn(err))

    }



    useEffect(() => fetchAll(), [])



    let [str, setStr] = useState("")
     const fetchUsers = (id: number) : string => {
        fetch(`http://localhost:3002/redBadge/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
            }
        }).then
            (results => results.json())
            .then (
                results => {setStr(results.username)
                console.log(results.username)
                })
            return str
    }


   // useEffect(() => fetchUsers(), [])



    return (
        <div>
            <div>
                {/* <p>Hello There</p> */}
                
                {/* <Profile/> */}
            </div>
        </div>
    )
}

export default Home