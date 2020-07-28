import React, {useState, useEffect} from 'react';
import {Table, Modal,ModalBody,ModalHeader,Button, Input, Form,FormGroup,FormText } from 'reactstrap'
// import APIURL from '../Helpers/environment'
import Comment from './Comment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import APIURL from '../helpers/environment';
// import PostBg from '../assets/postbg.png'
// import { Toast, ToastBody, ToastHeader, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Typed from 'react-typed'
import './Post.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import EditIcon from '@material-ui/icons/Edit';




const Post = (props: any) => {

const [user, setUser] = useState('')
const [modal, setModal] = useState<any>(false);

const toggle = () => setModal(!modal);
const [text, setText] = useState(props.text ? props.text : "")
// const deleteButton = () => {
//   {fetch(`${APIURL}/user/${props.id}`, {
//     method: 'DELETE',
//     headers :{
//       'Content-Type' : 'application/json',
//       Authorization: props.sessionToken
//     }
//   })}
// }


function fetchUser (id: '')  {
         fetch(`${APIURL}/redBadge/user/${id}`, {
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
            setLikes(0)
            fetch(`${APIURL}/redBadge/post/${props.post.id}`, {
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


// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         light: '#F4F1DE',
//         main: '#E07A5F',
//         dark: '#3D405B',
//         contrastText: '#F2CC8F',
//       },
//       secondary: {
//         light: '#ff7961',
//         main: '#f44336',
//         dark: '#ba000d',
//         contrastText: '#000',
//       },
//     },
//   });
  

    function newBlob(photo: any) {
        const photoURL = String.fromCharCode.apply( null, new Uint8Array(photo) as any)
        return photoURL
    }
       
    const fixedStyles = {
       position: 'fixed'
    }
    

    const bigPicture = {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }

const zoom = () => {    

newBlob(props.post.media.data)

}

    const textStyles = {
        color:'white',
    }
    const typedStyles = {
        color:'white',
        
    }

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
                        typeSpeed={100}
                        // smartBackspace={true}
                    />
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
            <LikeButton />
                        {/* comment button */}
            <Button onClick ={toggle} style={{margin: '2%'}}><CommentIcon/></Button>                        
            <Modal isOpen={modal} toggle={toggle} className="header">
            <ModalHeader toggle={toggle}>
                Go get 'em you keyboard warrior!
            </ModalHeader>
            <ModalBody>
            <Input type="textarea" rows={5} token={props.token} fetchAll={props.fetchAll} postId={props.post.id}/>
            </ModalBody>
            </Modal>
            <Button className="delete"><DeleteIcon/></Button>
            {/* DELETE */}
          </td>
        </tr>
        <tr>
          <th scope="row" className="description">
          {/* post text */}
          <Input type="text" rows={4} columns={5} value={props.post.description}/>
            {/* {props.post.description}</h6> */}
          </th>
          {/* <td>
          <Button className="delete">
              Delete
          </Button>
            </td> */}
        </tr>
        <tr>
          <th scope="row" className="col3">
          <Button className="comment">
          Comments Button here
          </Button>
          </th>
        </tr>
      </tbody>
    </Table>
    )
}

export default Post;