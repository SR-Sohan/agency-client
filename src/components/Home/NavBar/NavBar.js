import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './NavBar.css'

const NavBar = () => {
    //LoggedInUser Context api
    const{loggedInUser} = useContext(UserContext);

    return (
        <div className="g pt-5">
            <Container>
            <Navbar  expand="lg">
                <Navbar.Brand href="#home">
                  <img style={{height: '50px',maxWidth: '150px'}} className="img-fluid" src={require('../../../images/logos/logo.png')} alt=""/>
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-item ml-auto d-flex align-items-center">
                            <Link to="/" className="mr-5">Home</Link>
                            <Link to="" className="mr-5">Our Portfolio</Link>
                            <Link to="" className="mr-5">Our Team</Link>
                            <Link to="" className="mr-5">Contact Us</Link>

                          { loggedInUser.email ?<Link to="/dasboard"  className="login-style d-flex align-items-center justify-content-center">Dasboard</Link>: <Link to="/login"  className="login-style d-flex align-items-center justify-content-center">Login</Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavBar;