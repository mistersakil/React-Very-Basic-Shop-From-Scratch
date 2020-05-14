import React, {Fragment, useContext} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import {ProductsContextApi} from '../../App'
import './CartSidebar.css'
import CartItem from './CartItem'
export default props => {
	const {cartItems} = useContext(ProductsContextApi)
	return (
		<Fragment>	        
			<section className="cartSidebar">
				<h3 className="text-center text-secondary">Cart Items - {cartItems.length}</h3>
				<hr/>
				
				<ListGroup variant="flush" className="cartItems">
				{ cartItems.length > 0 &&
					<ListGroup.Item>
				  		<strong>Item Name</strong> <small>Price</small>
				  	</ListGroup.Item>
				
				}  	
				{ cartItems.map(item => <CartItem key={item.id} {...item}/>) }
				{ cartItems.length > 0 &&
				  <ListGroup.Item>
				  	<strong>Total:</strong>
				  	<small>${cartItems.reduce((total,item) => total + item.price, 0)}</small>
				  </ListGroup.Item>
				}
				</ListGroup>
			</section>
		</Fragment>

	)
}