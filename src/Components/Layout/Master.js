import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductList from "../Products/ProductList";
export default props => {
  // console.log(props.productsApi);
  const productsApi = props.productsApi;
  return (
    <Container fluid>
      {props.children}
      <Row style={{ marginTop: "70px" }}>
        <Col sm={8}>
          <ProductList productsApi={productsApi} />
        </Col>
        <Col sm={4}>Cart</Col>
      </Row>
    </Container>
  );
};
