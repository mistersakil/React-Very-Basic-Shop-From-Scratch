import React, {useContext} from "react"
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import {ProductsContextApi} from '../../App'


export default props => {
  const {productSearchHandler, themeChangeHandler} = useContext(ProductsContextApi)
  const [navKeyword, setNavKeyword] = React.useState('')
  const navKeywordHandler = event => {
    const keyword = event.target.value.toLowerCase()
    setNavKeyword(keyword)
    productSearchHandler(keyword)
  }

  return (
    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
      
      <NavLink to="/" exact ><Navbar.Brand>React-Shop</Navbar.Brand></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" exact style={{color: '#fff', textDecoration:'none'}}>Shop</NavLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={navKeywordHandler} name="keyword" value={navKeyword}/>
        </Form>
        <Button variant="info" onClick={() => themeChangeHandler() }>Change Theme</Button>
        <NavLink to="/checkout" ><Button className="btn btn-danger ml-1 text-light">Checkout</Button></NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
