import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap';

const MenuBar = () => {



    return (
        <div>
                <Nav  variant="tabs" defaultActiveKey="/home" >
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" >
                            Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
        
        </div>
    )
}

export default MenuBar;