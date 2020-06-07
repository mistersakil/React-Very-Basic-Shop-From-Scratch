import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from "../Home/Home"
import Checkout from "../Checkout/Checkout"
import ProductDetails from "../Products/ProductDetails"
import Category from "../Category/Category"
import NotFound from "../404/NotFound"
export default () => {
  return (
	 <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/checkout" component={Checkout} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/category/:slug"  component={Category} />
      <Route path="" exact component={NotFound} />
    </Switch>
  )
}
