import { Container, Form, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink, useSearchParams } from "react-router-dom";
const FeHeader = () => {
  const [query,setQuery] = useSearchParams()
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary"  >
        <Container fluid>
          <Navbar.Brand>
            Broadway
          </Navbar.Brand>
          <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink className={"nav-link"} to="/about-us">About Us</NavLink>
              </Nav.Item>
              <NavDropdown title="Brand" id="brand-dropdown">
                <NavLink className={"dropdown-item"} to="/brand/apple">Apple</NavLink>
                <NavLink className={"dropdown-item"} to="/brand/samsung">Samsung</NavLink>
              </NavDropdown>
              <NavDropdown title="Category" id="nav-dropdown">
                <NavDropdown.Item to="/category/clothings">Clothings</NavDropdown.Item>
                <NavDropdown.Item to="/category/smart-phones">Smart Phones</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" role="search" onSubmit={(e) => {e.preventDefault()}}>
              <Form.Control type="search" className="me-2" placeholder="Search" name="q" onChange={(e)=>{
                const type = e.target.value
                 setQuery({q: type}) }}>
              </Form.Control>
            </Form>
            <Nav>
              <Nav.Item>
                 <NavLink className={"nav-link"} to="/register">Register</NavLink>
              </Nav.Item>
              <Nav.Item>
                 <NavLink className={"nav-link"} to="/login">Login</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default FeHeader;
