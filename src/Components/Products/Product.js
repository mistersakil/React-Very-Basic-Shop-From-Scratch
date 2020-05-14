import React, {useContext} from "react";
import { Card, Button } from "react-bootstrap";
import {ProductsContextApi} from '../../App'
export default ({id, image_url, title, body, price}) => {
  const priceStyle = {
    float: "right",
    fontSize: "14px",
    padding: "3px 5px",
    borderRadius: "5px",
    marginTop: "7px"
  };
  
  const {setCartItemsHandler, cartItems} = useContext(ProductsContextApi)
  const addToCartHandler = event => {
    setCartItemsHandler(event.target.dataset.id)
  }
  
  return (
   <Card key={id}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title} ({id})</Card.Title>
        <Card.Text>{body.slice(0,80)}</Card.Text>
      </Card.Body>
      <Card.Footer>
          <Button variant="info" onClick={addToCartHandler} data-id={id} name={`product${id}`}>Add To Cart</Button>               
          <span className="btn-warning" style={priceStyle}>
          ${price}
        </span>
      </Card.Footer>
    </Card>
  )
}
