import React from "react";
import { Card, CardColumns, Button } from "react-bootstrap";
export default props => {
  const priceStyle = {
    float: "right",
    fontSize: "14px",
    padding: "3px 5px",
    borderRadius: "5px",
    marginTop: "7px"
  };
  return (
    <CardColumns>
      {props.productsApi.map(product => {
        return (
          <Card key={product.id}>
            <Card.Img variant="top" src={product.image_url} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.body.slice(0, 80)}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="btn-info">Add to Cart</Button>
              <span className="btn-warning" style={priceStyle}>
                {product.price}
              </span>
            </Card.Footer>
          </Card>
        );
      })}
    </CardColumns>
  );
};
