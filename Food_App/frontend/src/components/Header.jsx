import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none text-white ">
              Uber <b>Eats</b>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>Features</Nav.Link>
          </Nav>
          <Nav className="me-end">
            <Nav.Link>
              <Link to="/login" className="text-decoration-none text-white">
                Login
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup" className="text-decoration-none text-white">
                SignUp
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
