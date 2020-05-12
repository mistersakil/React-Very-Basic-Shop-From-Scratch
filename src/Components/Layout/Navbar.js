import React, {useContext} from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import {ProductsContextApi} from '../../App'

export default props => {
  const {productSearchHandler} = useContext(ProductsContextApi)
  const [navKeyword, setNavKeyword] = React.useState('')
  const navKeywordHandler = event => {
    const keyword = event.target.value.toLowerCase()
    setNavKeyword(keyword)
    productSearchHandler(keyword)
  }
  return (
    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="./">React-Shop</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="./">Home</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={navKeywordHandler} name="keyword" value={navKeyword}/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
