import React, {useState} from 'react'
import User from '../assets/user.svg';
import Add from '../assets/add.svg';
import Home from '../assets/home.svg'
import Dashboard from '../assets/data-analysis.svg';
import NewPost from '../components/CreatePost'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'reactstrap'


const NavBar = (props:any) => {

    const imgStyles = {
        height: '5vh',
        color: 'white',
        fill: 'white'
    }
    const navStyles = {
        display: 'flex',
        justifyContent: 'space-evenly'
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Navbar  expand="lg" bg="dark" variant="dark" fixed='bottom' style={navStyles}>
                <Navbar.Brand ><Link to ='/'><img src={Home} style={imgStyles}/></Link></Navbar.Brand>
                <Navbar.Brand ><Button onClick={toggle}><img src={Add} style={imgStyles}/></Button></Navbar.Brand>

                <Button color="danger" onClick={toggle}>Buttonhere</Button>
                <Modal isOpen={modal} toggle={toggle} className="header">
                <ModalHeader toggle={toggle}>New Post</ModalHeader>
                <ModalBody>
                <NewPost/>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
                </Modal>

                <Navbar.Brand><Link to ='/Search'><img src={Dashboard} style={imgStyles}/></Link></Navbar.Brand>
                <Navbar.Brand><Link to ='/Profile'><img src={User} style={imgStyles}/></Link></Navbar.Brand>
                <button onClick={props.clearToken}>Logout</button>
            </Navbar>
        </div>
    )
}

export default NavBar