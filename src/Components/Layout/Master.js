import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "../Products/ProductList";
export default props => {
  
  const productsApi = props.productsApi;
  return (
    <Container fluid>
      {props.children}
      <Row style={{ marginTop: "70px" }}>
        <Col sm={9}>
          <ProductList productsApi={productsApi} />
        </Col>
        <Col sm={3}>Cart</Col>
      </Row>
    </Container>
  );
};
