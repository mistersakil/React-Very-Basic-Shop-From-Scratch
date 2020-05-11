import React from "react";
import { Card, Button } from "react-bootstrap";

export default ({id, image_url, title, body, price}) => {
  const priceStyle = {
    float: "right",
    fontSize: "14px",
    padding: "3px 5px",
    borderRadius: "5px",
    marginTop: "7px"
  };

  return (
   <Card key={id}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title} ({id})</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button className="btn-info">Add to Cart</Button>
        <span className="btn-warning" style={priceStyle}>
          {price}
        </span>
      </Card.Footer>
    </Card>
  )
}
