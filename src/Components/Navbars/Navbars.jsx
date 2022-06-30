import React from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";

export const Navbars = () => {
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
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    //   ))}
    // </>
  );
};
