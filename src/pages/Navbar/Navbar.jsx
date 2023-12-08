import React, { useState } from 'react';
import { Navbar } from "react-bootstrap";
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function NavBar() {
    const[expanded, setExpanded] = useState(false);
return <>
        <Navbar expand="dark" expanded={expanded} classname="bg-body-tertiary">
          <Container>
            <Navbar.Brand className="dark" href="#home">Art Retail Therapy </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded => !expanded)} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav classname="me-auto">
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Classes & Events</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Products</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
}
export default NavBar;