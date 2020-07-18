import React, {useState}from 'react';
import {Button, Form, FormGroup,Input} from 'reactstrap'
import Add from '../assets/fileimg.png'

// to add an img, import it then call it as: <img src={IMG NAME HERE}>
import '../css/CreatePost.css'


const NewPost = (props: any) => {
    const [media, setMedia] = useState<any>('');
    const [description, setDescription] = useState<string>('');
    const [likes, setLikes] = useState<number>();
    const [owner, setOwner] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(props.token)
        fetch(`http://localhost:3002/redBadge/post/new-post`, {
            method: 'POST',
            body: JSON.stringify({ post: { media: media, description: description, likes: likes, owner: owner }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                setMedia('');
                setDescription('');
                setLikes(undefined);
                setOwner('');
                props.fetchAll('');
            })
    }

    return (
        <div className="newPost">
            {/* <h3>Post Something!</h3> */}
                <Form onSubmit={handleSubmit}>
                    <FormGroup className="script">
                        <Input className='description' value={description} placeholder="Post..Man" type="textarea" onChange={(e) => setDescription(e.target.value)}
                        style={{outline: "none", userSelect:"text", whiteSpace:"pre-wrap", overflowWrap:"break-word", flexGrow: 1, fontWeight:"bold" }}/>
                    </FormGroup>
                    {/* <FormGroup className="files">
                        <Input type="file" name='media' value={media} onChange={(e) => setMedia(e.target.value)}/>
                    </FormGroup> */}
                    <FormGroup className="upld">
                        <div className="img-upld">
                            <label htmlFor="file-input">
                            <img src={Add}/>
                            </label>
                            <input id="file-input" type="file" name="media" value={media} onChange={(e) => setMedia(e.target.value)}/>
                    <Button type="submit" className="postbtn" style={{color:"#F2CC8F", backgroundColor:"none", fontSize:"20px"}}>Post</Button>
                        </div>
                    </FormGroup>
                </Form>
        </div>
    )
}

export default NewPost;