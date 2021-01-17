import React, {useState}from 'react';
import {Button, Form, FormGroup,Input, Label, UncontrolledTooltip} from 'reactstrap'
import APIURL from '../../helpers/environment';



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
        if (Gerald.files[0]){
        const file = Gerald.files[0]
       

        let reader = new FileReader();
        reader.onload = async function () {
 
            const url = reader.result
            setMedia(url)

        fetch(`${APIURL}/redBadge/post/new-post`, {
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
} else {
    fetch(`${APIURL}/redBadge/post/new-post`, {
        method: 'POST',
        body: JSON.stringify({ 
            post: { 
                media: null, 
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
}

 

    return (
        <div className="newPost">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input type="file" id="gerald" accepts="image/jpeg" name='media'/>
                        <UncontrolledTooltip placement="bottom-start" id="fileType" target="gerald">Media must be JPG</UncontrolledTooltip>
                    </FormGroup>
                    <Input type="textarea"  onChange={(e) => setDescription(e.target.value)}/>
                    <FormGroup className="upld">
                        <div className="img-upld">
                    <Button type="submit" className="postbtn" 
                    style={{color:"#F2CC8F", backgroundColor:"none", fontSize:"20px"}}>Post</Button>
                        </div>
                    </FormGroup>
                </Form>
        </div>
    )
}

export default NewPost;