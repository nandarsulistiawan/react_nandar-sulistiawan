import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">CLOUDDESIGN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#hero">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
