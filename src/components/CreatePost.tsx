import React, {useState}from 'react';
import {Button, Form, FormGroup,Input, Label, UncontrolledTooltip} from 'reactstrap'

import Add from '../assets/fileimg.png'
import APIURL from '../helpers/environment';

// to add an img, import it then call it as: <img src={IMG NAME HERE}>
import '../css/CreatePost.css'
import { Base64 } from 'js-base64';


interface CorynneElement extends HTMLElement {
    files : HTMLInputElement & any 
}


const NewPost = (props: any) => {
    const [media, setMedia] = useState<string | ArrayBuffer | null>('');
    const [description, setDescription] = useState<string>('');
    const [likes, setLikes] = useState<number>();
    const [owner, setOwner] = useState<number>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
      
        const Gerald = document.getElementById("gerald") as CorynneElement
        const file = Gerald.files[0]
       

        let reader = new FileReader();
        reader.onload = async function () {
            console.log(reader.result)
            const url = reader.result
            setMedia(url)
            // console.log(JSON.stringify({media}))
            
            


        // console.log(reader.readAsBinaryString(media))
        fetch(`${APIURL}/post/new-post`, {
            method: 'POST',
            body: JSON.stringify({ 
                post: { 
                    media: reader.result, 
                    description: description, 
                    likes: likes, 
                    owner: owner 
                } 
        }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                setDescription('');
                setLikes(undefined);
                alert('Thank you for posting!')
            })
          .catch(err => console.log(err))
    }
    reader.readAsDataURL(file)
}

 

    return (
        <div className="newPost">
            {/* <h3>Post Something!</h3> */}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input type="file" id="gerald" accepts="image/jpeg" name='media'/>
                        <UncontrolledTooltip placement="bottom-start" id="fileType" target="gerald">Media must be JPG</UncontrolledTooltip>
                    </FormGroup>
                    {/* <FormGroup className="files">
                        <Input type="file" name='media' value={media} onChange={(e) => setMedia(e.target.value)}/>
                    </FormGroup> */}

                    <Input type="textarea"  onChange={(e) => setDescription(e.target.value)}/>
                    <FormGroup className="upld">
                        <div className="img-upld">
                    <Button type="submit" className="postbtn" 
                    // onClick={} 
                    style={{color:"#F2CC8F", backgroundColor:"none", fontSize:"20px"}}>Post</Button>
                        </div>
                    </FormGroup>
                </Form>
        </div>
    )
}

export default NewPost;