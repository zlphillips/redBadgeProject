import React, {useState}from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import '../css/CreatePost.css'
import { Base64 } from 'js-base64';


interface CorynneElement extends HTMLElement {
    files : HTMLInputElement & any 
}


const NewPost = (props: any) => {
    const [media, setMedia] = useState<any>('');
    const [description, setDescription] = useState<string>('');
    const [likes, setLikes] = useState<number>();
    const [owner, setOwner] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target)
        const Gerald = document.getElementById("gerald") as CorynneElement
        // console.log(Gerald.files)
        const file = Gerald.files[0]
        console.log(file)

        let reader = new FileReader();
        reader.onload = async function () {
            console.log(reader.result )
            // const url = reader.result as URL
            // setMedia(url)



        // console.log(reader.readAsBinaryString(media))
        fetch(`http://localhost:3002/redBadge/post/new-post`, {
            method: 'POST',
            body: JSON.stringify({ 
                post: { 
                    media: media, 
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
                
                // setMedia();
                setDescription('');
                setLikes(undefined);
                setOwner('');
                // props.fetchAll();
            })
          .catch(err => console.log(err))
    }
    reader.readAsDataURL(file)
}

    return (
        <div className="newPost">
            <h3>Post Something!</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="media">Media:</Label>
                        <Input type="file" id="gerald" accepts="image/jpeg" name='media' onChange={(e) => { console.log(e.target); setMedia(e.target.files ? e.target.files[0] : null)}}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>Description:</Label>
                        <Input name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Post</Button>
                </Form>
        </div>
    )
}

export default NewPost;