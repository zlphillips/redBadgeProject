import React, {useState, useEffect} from 'react';
import { Toast, ToastBody, ToastHeader, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import Comment from './Comment';
import { Base64 } from 'js-base64';


const Post = (props: any) => {
const [user, setUser] = useState('')
const [image, setImage] = useState('')




const [modal, setModal] = useState<any>(false);

const toggle = () => setModal(!modal);


function fetchUser (id: '')  {
         fetch(`http://localhost:3002/redBadge/user/${id}`, {
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


    const singleToast = {
        minWidth: '95vw',
        minHeight: '10vh'
    }

    const photoStyle = {
        borderStyle: 'solid',
        width: '5vh',
        height: '5vh',
        overflow: 'hidden',
        borderRadius: '50%',
    }

    const userStyles = {
        display: 'flex',
    }

    function newBlob(photo: any) {
        const ascii = Base64.btoa(photo)
    
        // var arrayBufferView = new Int8Array( ascii )
        // var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
        // var urlCreator = window.URL || window.webkitURL;
        // var imageUrl = urlCreator.createObjectURL( blob );
        // console.log(imageUrl)
        // return imageUrl 
        return ascii
    }
       


    return(
        <Toast style={singleToast}>
                        <div>
                            <ToastHeader>
                                <div style={userStyles}>
                                <img/>
                                        <h1>{user}</h1>
                                    <div>
                                        <p>{`posted ${0} minutes ago`}</p>
                                    </div>
                                </div>
                            </ToastHeader>
                            <ToastBody>
                            <img src={`data:image/jpeg:base64,${newBlob(props.post.media.data)}`} style={{ fontSize: '3vh' }}/>
                                <h3>{props.post.description}</h3>
                               
                                 {/* <form action="/upload/photo" enctype="multipart/form-data" method="POST"> 
                                <input type="file" name="myImage" accept="image/*" />
                                <input type="submit" value="Upload Photo"/>
                                </form>  */}
                                <h3>{props.post.likes}</h3>
                            </ToastBody>
                        </div>
                        <Button onClick ={toggle}>Clapback</Button>
                        <Modal isOpen={modal} toggle={toggle} className="header">
                        <ModalHeader toggle={toggle}>
                            Got something to say punk?
                        </ModalHeader>
                        <ModalBody>
                        <Comment token={props.token}/>
                        </ModalBody>
                        </Modal>
                    </Toast>
    )
}

export default Post;