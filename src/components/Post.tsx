import React, {useState, useEffect} from 'react';
import {Modal} from 'react-bootstrap'
import {Table,ModalBody,ModalHeader,Button } from 'reactstrap'
import Comment from './Comment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import PostBg from '../assets/postbg.png'
// import { Toast, ToastBody, ToastHeader, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Typed from 'react-typed'
import './Post.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MicroModal from 'micromodal';
import EditPost from './EditPost'


const Post = (props: any) => {

const [likes, setLikes] = useState<number>();
const [liked, setLiked] = useState<any>();
const [user, setUser] = useState('')
const [modal, setModal] = useState<any>(false);
const toggle = () => setModal(!modal);
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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



    class Like extends React.Component {
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
              <ThumbUpIcon onClick={this.handleClick}>
                {label}</ThumbUpIcon>
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
       
    

    const textStyles = {
        color:'white',
    }
    const typedStyles = {
        color:'white',
        
    }
    MicroModal.init();
    return(
        <Table borderless>
        <thead>
          <tr>
          <th style={textStyles}>comments</th>
            <th style={textStyles}>{user}</th>
            <th style={textStyles}>Ayy</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td scope="row">
                <Typed
                        style={typedStyles}
                        strings={['user: comment1', 'Welcome, to 404']}
                        typeSpeed={100}/>
            </td>
            <td scope="row" >
                                {/* image */}
                <img src={`${newBlob(props.post.media.data)}`} 
                style={{height:"30vh", overflow:"hidden"}} />
                <h5 style={textStyles}>{props.post.description}</h5>
            </td>
            <td>
                {/* like count */}
            <h3>{props.post.likes}</h3>
            
                        {/* comment button */}
            <Button onClick ={toggle} style={{margin: '2%'}}><CommentIcon/></Button>                        
            <Modal isOpen={modal} toggle={toggle} className="header">
            <ModalHeader toggle={toggle}>
                Go get 'em you keyboard warrior!
            </ModalHeader>
            <ModalBody>
            <Comment token={props.token} fetchAll={props.fetchAll}/>
            </ModalBody>
            </Modal>

            <Button className="delete"><Like/></Button>
            
           <Button onClick ={toggle} style={{margin: '2%'}}><EditIcon/></Button>    
            
            {/* DELETE */}
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

            </td>
          </tr>
          
          
        </tbody>
      </Table>
    ); 
}

export default Post;