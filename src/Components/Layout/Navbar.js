import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
export default props => {
  return (
    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="./">React-Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};