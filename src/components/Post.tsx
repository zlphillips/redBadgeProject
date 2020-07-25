import React, {useState, useEffect} from 'react';
import { Toast, ToastBody, ToastHeader, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Comment from './Comment';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import UpdatePost from './EditPost'
import { Base64 } from 'js-base64';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './Post.css';
import Typed from 'typed.js';



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

    const photoStyle = {
        height: '30vh',
        overflow: 'hidden',
    }

    const userStyles = {
        display: 'flex',
        
    }
    const textStyle = {
        fontSize:'3vh'
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
        <div className='wholeToast'>
            <div>
                <div style={userStyles}>
                    <img/>
                        <h1 style={textStyle}>{user}</h1>
                        <div>
                            {/* <p>{`posted ${0} minutes ago`}</p> */}
                        </div>
                </div>
                      <div className='toastBody'> 
                        <img src={`${newBlob(props.post.media.data)}`} style={photoStyle}/>
                        <h3>{props.post.description}</h3>
                        <h3>{props.post.likes}</h3>
                     </div>
            </div>
                    <div>
                        <LikeButton />
                        <Button onClick ={toggle} style={{margin: '2%'}}>Comment</Button>
                         
                        <Modal isOpen={modal} toggle={toggle} className="header">
                        <ModalHeader toggle={toggle}>
                            Go get 'em you keyboard warrior!
                        </ModalHeader>
                        <ModalBody>
                        <Comment token={props.token}/>
                        </ModalBody>
                        </Modal>
                    </div>    
        </div>
    )
}

export default Post;