import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Dropdown, Icon } from 'semantic-ui-react';

export const NavigationBar = () => {
    return (
      <Navbar className="px-3 fixed-top navbar-transparent my-4" expand="lg">
        <Container fluid>
          <Nav></Nav>
          <Nav
            className="ml-auto"
            style={{ alignItems: 'Right', }}
          >
            <Button.Group>
              <Button animated="vertical" inverted size="massive" onClick={() => {window.location.href = "/";}}>
                <Button.Content visible>Home</Button.Content>
                <Button.Content hidden><Icon name='home'/></Button.Content>
              </Button>
              <Button animated="vertical" inverted size="massive" onClick={() => {window.location.href = "/";}}>
                <Button.Content visible>Projects</Button.Content>
                <Button.Content hidden><Icon name='microchip'/></Button.Content>
              </Button>
              <Button animated="vertical" inverted size="massive" onClick={() => {window.location.href = "/";}}>
                <Button.Content visible>Misc</Button.Content>
                <Button.Content hidden><Icon name='folder'/></Button.Content>
              </Button>
              <Button animated="vertical" inverted size="massive" onClick={() => {window.location.href = "/";}}>
                <Button.Content visible>Contact</Button.Content>
                <Button.Content hidden><Icon name='phone'/></Button.Content>
              </Button>
            </Button.Group>
            {/* <Nav.Link className="navigation" href="/">Home</Nav.Link>
            <Nav.Link className="navigation">Resume</Nav.Link>
            <NavDropdown align="end" className="navigation" title="Hobbies" id="dropdown-menu dropdown-menu-left">
              <NavDropdown.Item href="#action3">Origami</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Lock-picking</NavDropdown.Item>
              <NavDropdown.Item href="https://na.op.gg/summoners/na/ButtaYe">League</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
      </Container>
    </Navbar>
    )
}