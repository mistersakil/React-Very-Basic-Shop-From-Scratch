import React , {Fragment} from 'react'
import { Col } from "react-bootstrap"
import CartSidebar from "../Cart/CartSidebar"
import ProductList from "../Products/ProductList"
export default props => {
	return (
		<Fragment>			
			
	        <Col sm={8}>
	          <ProductList/>
	        </Col>
	        <Col sm={4}>
	        <CartSidebar />
	        </Col>
			
		</Fragment>
	)
}