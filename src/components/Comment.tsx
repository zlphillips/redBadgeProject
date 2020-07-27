import React, {useState}from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

const Comment = (props: any) => {
    const[description, setDescription] = useState<string>('');
    const[likes, setLikes] = useState<number>();
    const[userId, setUserId] = useState<number>();
    const[postId, setPostId] = useState<number>()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch(`http://localhost:3002/redBadge/comment/new-comment`, {
            method: 'POST',
            body: JSON.stringify({comment: {description: description, likes: likes, userId: userId, postId: postId}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then ((res) => res.json())
        .then((logData) => {
            setDescription('');
            setLikes(undefined);
            setPostId(props)
            props.fetchAll();
        })
    }

    return(
        <div className="newPost">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input name='description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </FormGroup>
                    <Button type="submit">Comment</Button>
                </Form>
        </div>
    )
}

export default Comment;