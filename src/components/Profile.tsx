import React, { useEffect, useState, MouseEvent } from 'react';
import '../css/Profile.css'
import Logout from '../assets/logout.svg'
import APIURL from '../helpers/environment';
import Post from './Post'
import Typed from 'react-typed'
import EditPosts from './EditPost'


interface Posts {
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


interface Profile {
  profilePic: Blob,
  bio: string
  username: string
}

function Profile(props: any) {
  const [profile, setProfile] = useState<any>([])
  window.onscroll = function () { Function() };
  const [erase, setErase] = useState(false)
  const [posts, setPosts] = useState([] as any)
  const [profileView, setProfileView] = useState<boolean>(false)

  const fetchProfile = () => {
    fetch(`${APIURL}/redBadge/profile/my-profile`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token,
      }
    }).then(results => results.json())
      .then(results => setProfile(results))
      .catch(err => console.log(err))
  }


  useEffect(() => fetchProfile(), [])
 

  const imgStyles = {
    height: '4vh',
    color: 'white',
    fill: 'white',
    outline: 'none',
    border: 'none'
  
}

    const fetchAll = () => {
      fetch(`${APIURL}/redBadge/post/my-posts`, {
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
    
    <div className="mainDiv"
     style={{ margin: "auto", padding: "0 5% 0 5%", display: "inline-block" }}>
      <div className="header-cont" id="myHeader"
        style={{ width: "100%", height: "10%", textAlign: "center", position: "sticky" }}>
  
         {profile.map((profile: Profile , index: number) => (
            <h1>{profile.bio}</h1>
            ))}
            <img src={Logout} style={imgStyles} onClick={props.clearToken}/>
            
      </div>
      <h1 className='element' ></h1>
   
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

export default Profile


