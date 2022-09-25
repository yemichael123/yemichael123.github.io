import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavigationBar = () => {
    return (
      <Navbar className="px-3 fixed-top navbar-transparent" expand={true}>
      <Container fluid>
          <Nav></Nav>
          <Nav
            className="ml-auto"
            style={{ alignItems: 'Right', }}
          >
            <Nav.Link className="navigation" href="/">Home</Nav.Link>
            <Nav.Link className="navigation">Resume</Nav.Link>
            <NavDropdown align="end" className="navigation" title="Hobbies" id="dropdown-menu dropdown-menu-left">
              <NavDropdown.Item href="#action3">Origami</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lock-picking</NavDropdown.Item>
              <NavDropdown.Item href="https://na.op.gg/summoners/na/ButtaYe">League</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
    )
}