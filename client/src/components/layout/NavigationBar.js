import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

//Custom styles for navs
const Styles = styled.div`   //Instead of div, can be any html tag required like button, container, etc.
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;


        &:hover {        
        /* &:hover = Append the hover to the three classes above */
            color: yellow;
        }
    }
`

const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand='lg'>
                <Navbar.Brand href='/'>CatKingdom</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Item>
                            <Nav.Link href='/'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/signup'>Newsletter</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='/status'>Server Status</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default NavigationBar