import React from 'react'
import User from '../assets/user.svg';
import Add from '../assets/add.svg';
import Home from '../assets/home.svg'
import Dashboard from '../assets/data-analysis.svg';
import { Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const NavBar = (props:any) => {

    const imgStyles = {
        height: '5vh',
    }
    const navStyles = {
        display: 'flex',
        justifyContent: 'space-evenly'
    }

    return (
        <div>
            <Navbar  expand="lg" bg="dark" variant="dark" fixed='bottom' style={navStyles}>
                <Navbar.Brand ><Link to ='/'><img src={Home} style={imgStyles}/></Link></Navbar.Brand>
                <Navbar.Brand ><Link to ='/CreatePost'><img src={Add} style={imgStyles}/></Link></Navbar.Brand>
                <Navbar.Brand><Link to ='/Search'><img src={Dashboard} style={imgStyles}/></Link></Navbar.Brand>
                <Navbar.Brand><Link to ='/Profile'><img src={User} style={imgStyles}/></Link></Navbar.Brand>
                <button onClick={props.clearToken}>Logout</button>
            </Navbar>
        </div>
    )
}

export default NavBar