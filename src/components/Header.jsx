import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context/GlobalContext';
import { CgDarkMode } from 'react-icons/cg';

function Header() {

    const { themeMode, setThemeMode, lightMode, darkMode } = useGlobalContext()

    const handleClick = () => {
        localStorage.setItem("theme", themeMode.id === darkMode.id ? lightMode.id : darkMode.id)
        setThemeMode(localStorage.getItem("theme") === darkMode.id ? darkMode : lightMode)

    }

    return (
        <div id='header'>
            <Navbar expand="lg" className="bg-dark" style={{ minHeight: "80px" }}>
                <Container>
                    <Navbar.Brand href="/" className="text-light">VALOGAMES</Navbar.Brand>
                    <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className='btn text-light' to='/agents'>Ajanlar</NavLink>
                            <NavLink className='btn text-light' to='/weapons'>Silahlar</NavLink>
                            <NavLink className='btn text-light' to='/playingcards'>Oyun Kartları</NavLink>
                            <NavLink className='btn text-light' to='/sprays'>Spreyler</NavLink>
                            <NavLink className='btn text-light' to='/bundles'>Paketler</NavLink>
                            <NavLink className='btn text-light' to='/maps'>Haritalar</NavLink>
                        </Nav>
                        <button className='btn btn-dark' onClick={handleClick}>
                            <CgDarkMode />
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header