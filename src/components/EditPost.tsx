import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import APIURL from '../helpers/environment';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditIcon from '@material-ui/icons/Edit';




interface CorynneElement extends HTMLElement {
    files : HTMLInputElement & any 
}



const UpdatePost = (props: any) => {
    const [editMedia, setEditMedia] = useState<any>();
    const [editDescription, setEditDescription] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
      
        const Gerald = document.getElementById("gerald") as CorynneElement
        if (Gerald.files[0]){
        const file = Gerald.files[0]
       
    
        let reader = new FileReader();
        reader.onload = async function () {
            console.log(reader.result)
            const url = reader.result
            // setEditMedia(url)
       
            
            
    
    
        // console.log(reader.readAsBinaryString(media))
        fetch(`${APIURL}/redBadge/post/${props.post.id}`, {
            method: 'PUT',
            body: JSON.stringify({ post: { media: reader.result, description: editDescription } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
          .catch(err => console.log(err))
    }
    reader.readAsDataURL(file)
    } else {
    fetch(`${APIURL}/redBadge/post/${props.post.id}`, {
        method: 'POST',
        body: JSON.stringify({ post: { media: editMedia, description: editDescription } }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).catch(err => console.log(err))
    }
    }




    const postUpdate = (e: any) => {
        e.preventDefault();
        fetch(`${APIURL}/redBadge/post/${props.post.id}`, {
            method: 'PUT',
            body: JSON.stringify({ post: { media: editMedia, description: editDescription } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchAll(props);
        })
    }
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);

    return (
    
        <div>
            <Button onClick={toggle}><EditIcon/></Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalBody>
                <Form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                    <Label htmlFor="media">Update Media</Label>
                    <Input accepts='image/jpeg' type="file" id='gerald' name="media" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Update Description</Label>
                    <Input name="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                </FormGroup>
                <Button type="submit">Update Post</Button>
            </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Update Post</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
            
        
    )
}

export default UpdatePost;



