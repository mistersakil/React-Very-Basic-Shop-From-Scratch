import React, {useContext} from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { Container , Row} from "react-bootstrap"
import {ProductsContextApi} from '../../App'
import Routes from './Routes'

export default props => {
  const {theme} = useContext(ProductsContextApi)  
  
  return (
    <Router>
    <Container fluid className={theme && 'bg-dark'}>
      <Row style={{ paddingTop: "70px" }}>
      {props.children}      
        <Routes />      
      </Row>
    </Container>
    </Router>
  );
};
