import React, {useState} from 'react'
import User from '../assets/user.svg';
import Add from '../assets/add.svg';
import Home from '../assets/home.svg'
import Peace from '../assets/peace.png'
import Dashboard from '../assets/data-analysis.svg';
import NewPost from '../components/CreatePost'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'reactstrap'
import Switch from '@material-ui/core/Switch';

  
const NavBar = (props:any) => {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(props.admin === true){
        setState({ ...state, [event.target.name]: event.target.checked });
    } else {
        alert('you cant see me')
        }
    };
    
  
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
                    New Post
                </ModalHeader>
                <ModalBody>
                <NewPost token={props.token}/>
                </ModalBody>
                </Modal>
                <Navbar.Brand><Link to ='/Profile'><img src={User} style={imgStyles}/></Link></Navbar.Brand>
                <Navbar.Brand><Link to ='/Search'><img src={Dashboard} style={imgStyles}/></Link></Navbar.Brand>
                        
                        
        {console.log(props.admin)}
               
                    {props.admin === true  ?
                    <Switch
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label':  ' primary checkbox' }}
                        /> : <h1>hi</h1>}
                        
            </Navbar>
        </div>
    )
}

export default NavBar


  