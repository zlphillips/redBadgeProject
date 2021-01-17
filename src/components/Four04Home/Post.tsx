import React, {useState, useEffect} from 'react';
import { Table } from 'reactstrap'
import Comment from '../Comments/Comment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import APIURL from '../../helpers/environment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import EditPost from './EditPost'



interface Comments {
  description: string
}



const Post = (props: any) => {

const [likes, setLikes] = useState([] as any);
const [liked, setLiked] = useState<any>();
const [user, setUser] = useState('')
const [modal, setModal] = useState<any>(false);
const [comments, setComments] = useState([] as any)
 
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
            setLikes(like)
            console.log(props.post.id)
            fetch(`${APIURL}/redBadge/post/${props.post.id}`, {
              method: 'PUT',
              body: JSON.stringify({ 
                post: { 
                  likes: liked ? like - 1 : like + 1
                } 
              }),
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': props.token
              }
          }).then((data) => data.json())
              .then((data) => {
                setLikes(data)
              })
              .catch((err) => {
                  console.log(err);
              });
            liked ? setLiked(false) : setLiked(true)
        };

        
        render() {
          const label = liked ? 'Unlike' : 'Like'
          //console.log(likes)
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


    const fetchComments = () => {
      fetch(`${APIURL}/redBadge/comment/postcomments/${props.post.id}`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': props.token
        }
    }).then((data) => data.json())
        .then((data) => {
          setComments(data)
          
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => fetchComments(), [])

  
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
            {comments.map((comment: Comments , index: number) => (
              <p>{`${comment.description}`}</p>
                  ))}
            </td>
            <td scope="row" >
  
                <img src={`${newBlob(props.post.media.data)}`} 
                style={{height:"30vh", overflow:"hidden"}} />
                <h5 style={textStyles}>{props.post.description}</h5>
            </td>
        </tr>
        <tr>
          <th>
            <Comment token={props.token} fetchAll={fetchComments} postId={props.post.id}/>
          </th>
          <td>
         <Like/>
            </td>
        </tr>
      </tbody>
    </Table>
    )
}

export default Post;