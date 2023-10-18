import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        expand="lg"
        className="py-3"
        sticky="top"
        style={{ backgroundColor: "#37517e" }}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Simple Header
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto link">
              <Nav.Link
                onClick={() => navigate("/")}
                href="#"
                style={{ color: "white" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/createaccount")}
                href="#"
                style={{ color: "white" }}
              >
                Create Account
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/createproduct")}
                href="#"
                style={{ color: "white" }}
              >
                Create Product
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/aipage")}
                href="#"
                style={{ color: "white" }}
              >
                OpenAI
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
