import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand className="logo" href="#"><b>LGM USERS</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success" size="lg" onClick={()=>window.location.href="/CardsFetch/"}><b>Get Users</b></Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Header;
