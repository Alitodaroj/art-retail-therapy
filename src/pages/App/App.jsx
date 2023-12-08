import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <main className="App">
        <Navbar expand="lg" classname="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Home </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
    </main>
  );
}

export default App;
