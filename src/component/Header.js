import React from 'react';
import { Navbar, Container, Nav, Button,Col} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';


function Header() {
    return(
        <Navbar bg="dark" expand="lg" sticky="top" variant="dark" className="py-4" collapseOnSelect>
            <Container fluid="md">
                <Navbar.Brand href="/portfolio" style={{fontSize:"26px", borderRight:"2px solid grey", padding:"0 10px"}}>
                    PORTFOLIO
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{padding: "10 10px"}}
                        navbarScroll
                    >
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                <Col sm={6} md={3} lg={3} style={{display: 'flex', justifyContent: 'right'}}>
                    <SocialIcon url='https://github.com/lespan14' fgColor="#dee2e6" />
                </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;