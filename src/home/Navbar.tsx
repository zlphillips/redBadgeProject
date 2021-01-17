import React, {useState} from 'react'
import User from '../assets/user.svg';
import Add from '../assets/add.svg';
import Home from '../assets/home.svg'
import Dashboard from '../assets/data-analysis.svg';
import NewPost from '../components/Four04Home/CreatePost';
import AdminUsers from '../assets/group.svg';
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'reactstrap'


  
const NavBar = (props:any) => {
  
    console.log(props.admin)
  
    const imgStyles = {
        height: '4vh',
        color: 'white',
        fill: 'white',
        outline: 'none',
        border: 'none'
    }
    const navStyles = {
        display: 'flex',
        justifyContent: 'space-evenly'
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    console.log(props.admin)

    return (
        <div style={{backgroundColor: 'rgba(242, 204, 143, 0.79)'}}>
            <Navbar  expand="lg" bg="transparent" variant="light" fixed='bottom' style={navStyles}>
                <Navbar.Brand >
                    <Link to ='/'>
                        <img src={Home} style={imgStyles}/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand >
                    <Button onClick ={toggle} style={{outline:"none", backgroundColor:"transparent", border:"none"}}>
                        <img src={Add} style={imgStyles}/>
                    </Button>
                </Navbar.Brand>
                <Modal isOpen={modal} toggle={toggle} className="header">
                <ModalHeader toggle={toggle}>
                    What's up Doc?
                </ModalHeader>

                <ModalBody>
                <NewPost token={props.token}/>
                </ModalBody>
                </Modal>

                <Navbar.Brand><Link to ='/Profile'><img src={User} style={imgStyles}/></Link></Navbar.Brand>
                
                { props.admin === true ? 
                <Navbar.Brand><Link to ='/AdminUsers'><img src={AdminUsers} style={imgStyles}/></Link></Navbar.Brand>
                : ''
                }
            </Navbar>

        </div>
    )
}

export default NavBar


  