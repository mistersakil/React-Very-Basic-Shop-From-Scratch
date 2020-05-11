import React, {useContext} from "react";
import { Card, CardColumns, Button } from "react-bootstrap";
import Product from './Product'
import {ProductsContextApi} from '../../App'

export default props => {
  const {products} = useContext(ProductsContextApi)

  return (
    <CardColumns>
      {products.map(product => <Product key={product.id} {...product}/>)}
    </CardColumns>
  );
};
