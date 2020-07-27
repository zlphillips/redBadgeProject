import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import APIURL from '../helpers/environment';

const UpdatePost = (props: any) => {
    const [editMedia, setEditMedia] = useState<any>(props.postToUpdate.media);
    const [editDescription, setEditDescription] = useState<string>(props.postToUpdate.description);

    const postUpdate = (e: any) => {
        e.preventDefault();
        fetch(`${APIURL}/post/${props.postToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({ post: { media: editMedia, description: editDescription } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchAll();
        })
    }

    return (
        <>
            <Form onSubmit={postUpdate}>
                <FormGroup>
                    <Label htmlFor="media">Update Media</Label>
                    <Input type="file" name="media" value={editMedia} onChange={(e) => setEditMedia(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Update Description</Label>
                    <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                </FormGroup>
                <Button type="submit">Update Post</Button>
            </Form>
        </>
    )
}

export default UpdatePost;