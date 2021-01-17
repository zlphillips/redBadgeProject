import React, {useState}from 'react';
import {Button, Form, FormGroup,Input, UncontrolledTooltip} from 'reactstrap'
import Add from '../../assets/fileimg.png'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import APIURL from '../../helpers/environment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import '../../css/CreateProfile.css'


interface CorynneElement extends HTMLElement {
    files : HTMLInputElement & any 
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const NewProfile = (props: any) => {
    const classes = useStyles();
    const [media, setMedia] = useState<any>('');
    const [bio, setBio] = useState<string>('');
    const [likes, setLikes] = useState<number>();
    const [owner, setOwner] = useState('');
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  
               
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(props.token);

        const Gerald = document.getElementById("gerald") as CorynneElement
        if (Gerald.files[0]){
        const file = Gerald.files[0]
       

        let reader = new FileReader();
        reader.onload = async function () {
            console.log(reader.result)
            const url = reader.result
            setMedia(url)
            // console.log(JSON.stringify({media}))
            
            


        // console.log(reader.readAsBinaryString(media))
        fetch(`${APIURL}/redBadge/profile/new-profile`, {
            method: 'POST',
            body: JSON.stringify({ 
                profile: { 
                    profilePic: reader.result, 
                    bio: bio, 
                    owner: owner 
                } 
        }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((data) => {
               console.log(data) 
            })
          .catch(err => console.log(err))
    }
    reader.readAsDataURL(file)
} else {
    fetch(`${APIURL}/redBadge/profile/new-profile`, {
        method: 'POST',
        body: JSON.stringify({ 
            post: { 
                profilePic: null, 
                bio: bio, 
                owner: owner 
            } 
    }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }).then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
      .catch(err => console.log(err))
}



    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
           <Form onSubmit={handleSubmit}>
                    <FormGroup className="script">
                        <Input className='description' value={bio} placeholder="Post..Man" type="textarea" onChange={(e) => setBio(e.target.value)}
                        style={{outline: "none", userSelect:"text", whiteSpace:"pre-wrap", overflowWrap:"break-word", flexGrow: 1, fontWeight:"bold" }}/>
                    </FormGroup>
                    <FormGroup className="upld">
                      
                        <AddCircleIcon />
                        
                        <Input type="file" id="gerald" accepts="image/jpeg" name='media'/>
                        <UncontrolledTooltip placement="bottom-start" id="fileType" target="gerald">Media must be JPG</UncontrolledTooltip>
                  
                          
                    <Button type="submit" className="postbtn" style={{color:"#F2CC8F", backgroundColor:"none", fontSize:"20px"}}>Post</Button>
                   
                    </FormGroup>
                </Form>
        </div>
    ); 

    return (
      
        <div className="newProfile">
              <div>
        <p onClick={handleOpen} style={{marginBottom: '-3px'}}>Create Profile</p>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}

            </Modal>
        </div>
        </div>
    )
}

export default NewProfile;