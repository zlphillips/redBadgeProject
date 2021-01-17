import React, { useEffect, useState, MouseEvent } from 'react';
import '../../css/Profile.css'
import Logout from '../../assets/logout.svg'
import APIURL from '../../helpers/environment';
import Post from '../Four04Home/Post'
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DisplayProfile from './DisplayProfile';
import Typed from 'react-typed'
import EditPosts from '../Four04Home/EditPost'
import CreateProfile from './CreateProfile'
import DeleteProfile from './DeleteProfile'


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
  bio: string,
  username: string,
  id: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  }, small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Profile(props: any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);
  const [profiles, setProfiles] = useState<any>([])
  window.onscroll = function () { Function() };
  const [erase, setErase] = useState(false)
  const [posts, setPosts] = useState([] as any)
  const [profileView, setProfileView] = useState<boolean>(false)

  const fetchProfile = () => {
    fetch(`${APIURL}/redBadge/profile/my-profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token,
      }
    }).then(results => results.json())
      .then(results =>
        setProfiles(results))
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
      .then(data => { setPosts(data) })
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

      <div className="mainDiv"
        style={{ margin: "auto", padding: "0 5% 0 5%", display: "inline-block" }}>
        <div className="header-cont" id="myHeader"
          style={{ width: "100%", height: "10%", textAlign: "center", position: "sticky" }}>

          {profiles.length !== 0 ? profiles.map((profile: Profile, index: number) => {
            return (
              <div>
                <h1 style={{ float: 'right' }} onClick={handleClick}>...</h1>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
                  <DeleteProfile token={props.token} id={profile.id} fetchAll={fetchAll} />
                  <MenuItem onClick={props.clearToken}>Logout</MenuItem>
                </Menu>
                <DisplayProfile profile={profile} classes={classes} id={profiles.id} token={props.token} fetchAll={fetchAll} />
              </div>
            )
          })
            :

            <div>
              <h1 style={{ float: 'right' }} onClick={handleClick}>...</h1>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><CreateProfile token={props.token} /></MenuItem>
                <MenuItem onClick={props.clearToken}>Logout</MenuItem>
              </Menu>

              <DialogTitle id="alert-dialog-slide-title">{"Profile"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  You dont have a profile yet, fix that by adding a photo and snippet about yourself!
                                </DialogContentText>
              </DialogContent>
            </div>


          }

        </div>
        <h1 className='element' ></h1>

        <br />
        <div className="post_bg">
          <div className="p-3 my-2 rounded"
            style={{ marginRight: "auto", marginLeft: "auto" }}>
            {posts.map((post: Posts, index: number) => (
              <Post post={post} index={index} token={props.token} fetchAll={fetchAll} admin={props.admin} />
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Profile


