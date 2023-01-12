import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NaviBar() {
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand className='m-2'>WebDev Blog</Navbar.Brand>
                    <Navbar.Toggle className='me-3' aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'
                        className='justify-content-between'>
                        <Nav className='m-2'>
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                        </Nav>
                        <Nav >
                            <Button variant='primary' className='m-2'>Log In</Button>
                            <Button variant='primary' className='m-2'>Sign Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}