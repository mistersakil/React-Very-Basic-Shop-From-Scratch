import React , {Fragment, useContext} from 'react'
import { Col } from "react-bootstrap"
import CartSidebar from "../Cart/CartSidebar"
import ProductList from "../Products/ProductList"
import {ProductsContextApi} from '../../App'
export default props => {
	const {cartItems} = useContext(ProductsContextApi)  
	console.log(cartItems.length)
	return (
		<Fragment>			
			
	        <Col sm={cartItems.length == 0 ? 12 : 8}>
	          <ProductList/>
	        </Col>
	        <Col sm={cartItems.length == 0 ? 0 : 4}>
	        	<CartSidebar />
	        </Col>
			
		</Fragment>
	)
}