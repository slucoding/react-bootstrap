import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand className='m-2'>WebDev Blog</Navbar.Brand>
                <Navbar.Toggle className='me-3' aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'
                    className='justify-content-between'>
                    <Nav className='m-2'>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Users</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                    </Nav>
                    <Nav >
                        <Button variant='primary' className='m-2'>Log In</Button>
                        <Button variant='primary' className='m-2'>Sign Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}