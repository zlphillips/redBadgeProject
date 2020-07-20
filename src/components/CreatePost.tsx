import React, {useState}from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import '../css/CreatePost.css'


const NewPost = (props: any) => {
    const [media, setMedia] = useState<any>('');
    const [description, setDescription] = useState<string>('');
    const [likes, setLikes] = useState<number>();
    const [owner, setOwner] = useState<number>();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(props.token)
        fetch(`http://localhost:3002/redBadge/post/new-post`, {
            method: 'POST',
            body: JSON.stringify({ post: { media: media, description: description, likes: likes, owner: owner } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                setMedia('');
                setDescription('');
                setLikes(undefined);
                setOwner(props.user.id);
                props.fetchAll();
            })
    }

    return (
        <div className="newPost">
            <h3>Post Something!</h3>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="media">Media:</Label>
                        <Input type="file" name='media' value={media} onChange={(e) => setMedia(e.target.value)}/>
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