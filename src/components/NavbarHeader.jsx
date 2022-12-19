import { Container, Navbar } from "react-bootstrap";

export default function NavbarHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* nav comonents */}
        <Navbar.Brand className="me-auto">
          <h3>Image Gallery</h3>
        </Navbar.Brand>
        <Navbar.Brand>
          <h5>COMP 584 Project API</h5>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
