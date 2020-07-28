import React, {useState, useEffect} from 'react';
import {Table,Button, Input } from 'reactstrap'
import Comment from './Comment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import APIURL from '../helpers/environment';
import Typed from 'react-typed'
import './Post.css';
import DeleteIcon from '@material-ui/icons/Delete';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import MicroModal from 'micromodal';
import EditPost from './EditPost'

const Post = (props: any) => {

const [likes, setLikes] = useState<number>();
const [liked, setLiked] = useState<any>();
const [user, setUser] = useState('')
const [modal, setModal] = useState<any>(false);

const toggle = () => setModal(!modal);
const [text, setText] = useState(props.text ? props.text : "")

  const deleteButton = () => {
    {fetch(`${APIURL}/user/${props.id}`, {
      method: 'DELETE',
      headers :{
        'Content-Type' : 'application/json',
        Authorization: props.sessionToken
      }
  })}
}

 

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
            setLikes(0)
            console.log(props.post.id)
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
                props.fetchAll(props.token)
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
  
    return(
        <Table borderlesss>
        <thead>
          <tr>
          <th style={textStyles} className="col1">Comments</th>
            <th style={textStyles}>{user}</th>
            <th><EditPost fetchAll={props.fetchAll} token={props.token} post={props.post} index={props.index}/></th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td scope="row">
                <Typed
                    style={typedStyles}
                    strings={['Hello There ...', 'Welcome, to 404']}
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
        </tr>
        <tr>
          <th>
            <Input type="textarea" rows={2} token={props.token} fetchAll={props.fetchAll} postId={props.post.id} placeholder="Clap back. . ."/>
            <Button token={props.token} fetchAll={props.fetchAll} postId={props.post.id}>Post</Button>
          
          </th>
          <td>
         
            <h3>{props.post.likes}</h3>
         <Like/>
            </td>
        </tr>
      </tbody>
    </Table>
    )
}

export default Post;