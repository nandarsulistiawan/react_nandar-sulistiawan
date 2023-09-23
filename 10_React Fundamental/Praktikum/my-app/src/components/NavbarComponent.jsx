import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="shadow sticky-top">
        <Container>
          <Navbar.Brand href="#">Simple Header</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/")} href="#">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/createaccount")} href="#">
              Create Account
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/createproduct")} href="#">
              Create Product
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
