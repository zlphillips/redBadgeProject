import React, {useState, useEffect} from 'react';
import {Table, Modal,ModalBody,ModalHeader,Button } from 'reactstrap'
import Comment from './Comment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import PostBg from '../assets/postbg.png'
// import { Toast, ToastBody, ToastHeader, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import './Post.css';
import { url } from 'inspector';
import { Tab } from 'react-bootstrap';


// import EditIcon from '@material-ui/icons/Edit';
// import Fab from '@material-ui/core/Fab';
// import UpdatePost from './EditPost'
// import { Base64 } from 'js-base64';
// import Typed from 'typed.js';



const Post = (props: any) => {

const [user, setUser] = useState('')
const [image, setImage] = useState('')
const [modal, setModal] = useState<any>(false);
const toggle = () => setModal(!modal);


function fetchUser (id: '')  {
         fetch(`http://localhost:3002/redBadge/user/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        }).then((data) => data.json())
            .then((id) => {
              setUser(id.username)
            })
            .catch((err) => {
                console.log(err);
            });

        }
        useEffect(() => fetchUser(props.post.userId), [])


    const singleToast = {
        minWidth: '90vw',
        minHeight: '10vh',
        // margin: '2%'
     
    }


    const editStyles = {
        fload: 'right'
    }

    const [likes, setLikes] = useState<number>();
    const [liked, setLiked] = useState<any>();

    class LikeButton extends React.Component {
        constructor(props: number) {
          super(props);
          this.state = {
            liked: false
          };
          this.handleClick = this.handleClick.bind(this);
        } 

        handleClick(id: any) {
            let like = props.post.likes
            console.log(id)
            
            fetch(`http://localhost:3002/redBadge/post/${props.post.id}`, {
              method: 'PUT',
              body: JSON.stringify({ post: { likes: liked ? like - 1 : like + 1} }),
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': props.token
              }
          }).then((data) => data.json())
              .then((id) => {
                setLikes(id.likes)
                props.fetchAll()
              })
              .catch((err) => {
                  console.log(err);
              });
            liked? setLiked(false) : setLiked(true)
        };

        
        render() {
          const label = liked ? 'Unlike' : 'Like'
          return (
            <div className="customContainer">
              <button className="btn btn-primary" onClick={this.handleClick}>
                {label}</button>
            </div>
          );
        }
      }


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#F4F1DE',
        main: '#E07A5F',
        dark: '#3D405B',
        contrastText: '#F2CC8F',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  

    function newBlob(photo: any) {
        const photoURL = String.fromCharCode.apply( null, new Uint8Array(photo) as any)
        return photoURL
    }
       

    return(
        <Table borderless>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>{user}</th>
            <th>
                Ayy
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td scope="row">
                                {/* image */}
            <img src={`${newBlob(props.post.media.data)}`} 
            style={{height:"30vh", overflow:"hidden"}}/>
            </td>
            <td>
                {/* like count */}
            <h3>{props.post.likes}</h3>
            <LikeButton />
            {/* comment button */}
            <Button onClick ={toggle} style={{margin: '2%'}}>Clapback</Button>                        
            <Modal isOpen={modal} toggle={toggle} className="header">
            <ModalHeader toggle={toggle}>
                Go get 'em you keyboard warrior!
            </ModalHeader>
            <ModalBody>
            <Comment token={props.token}/>
            </ModalBody>
            </Modal>
            {/* DELETE */}
            </td>
          </tr>
          <tr>
            <th scope="row" className="col1">
                             {/* post text */}
            <h5>{props.post.description}</h5>
            
            </th>
            <td>
            <Button className="delete">
                Delete
            </Button>
                        </td>
          </tr>
          <tr>
            <th scope="row" className="col3">
            Comments Button here
            </th>
          </tr>
          
        </tbody>
      </Table>
    )
}

export default Post;