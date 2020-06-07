import React, {useContext} from "react";
import {NavLink, Link} from 'react-router-dom'
import { Card, Button } from "react-bootstrap";
import {ProductsContextApi} from '../../App'
export default ({id, image_url, title, body, price, category, created_at}) => {
  const priceStyle = {
    float: "right",
    fontSize: "14px",
    padding: "3px 5px",
    borderRadius: "5px",
    marginTop: "7px"
  };
  
  const {setCartItemsHandler} = useContext(ProductsContextApi)
  const addToCartHandler = event => {
    setCartItemsHandler(parseInt(event.target.dataset.id))
  }
  
  return (
   <Card key={id}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>
        <NavLink to={`product/${id}`} exact >{title} ({id})</NavLink> 
        <br /><em> on </em>
        <Link to={`category/${category}`}>
          <small>{category}</small>
        </Link>
        <em> at </em>
        <small>{created_at}</small>

        </Card.Title>
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
