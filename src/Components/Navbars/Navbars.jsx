import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

export const Navbars = (props) => {
  const expand = false;
  return (
    //     <>
    //   {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
    <Navbar
      key={expand}
      bg="dark"
      variant="dark"
      expand={expand}
      className="mb-3"
      style={{ width: "90%", position: "fixed", left: "5%" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">The Food List</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={() => props.setIsShow(false)}>Home</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    //   ))}
    // </>
  );
};
