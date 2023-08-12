import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-dark" style={{ height: "80px" }}>
            <Container>
                <Navbar.Brand href="/" className="text-light">VALOGAMES</Navbar.Brand>
                <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='btn text-light' to='/agents'>Ajanlar</NavLink>
                        <NavLink className='btn text-light' to='/weapons'>Silahlar</NavLink>
                        <NavLink className='btn text-light' to='/maps'>Haritalar</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
