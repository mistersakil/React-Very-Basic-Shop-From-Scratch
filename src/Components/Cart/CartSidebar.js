import React, {Fragment, useContext} from 'react'
import {ListGroup, Table, Button} from 'react-bootstrap'
import {ProductsContextApi} from '../../App'
import './CartSidebar.css'
import CartItem from './CartItem'
export default props => {
	const {cartItems, clearCartItemsHandler, theme} = useContext(ProductsContextApi)
	return (
		<Fragment>	        
			<section className={cartItems.length == 0 ? 'cartSidebar hidden' : 'cartSidebar'}>
				<h3 className="text-center text-secondary">Cart Items : {cartItems.length}</h3>
				<hr/>
				
				<ListGroup variant="flush" className="cartItems">
				{ cartItems.length > 0 &&	
				
				<Table responsive className={theme && 'text-light' }>	
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
				{ cartItems.map(item => <CartItem key={item.id} {...item}/>) }
				</tbody>
				<tfoot>
					<tr>
						<th>Total:</th>
						<th></th>
						<th>${cartItems.reduce((total,item) => total + item.price, 0)}</th>
					</tr>
				</tfoot>
				</Table>
				}
								
				</ListGroup>
				{ cartItems.length > 0 &&	
				<div className="text-center">
					<Button variant="secondary" onClick={() => clearCartItemsHandler() }>Clear Cart Items</Button> 
					<span> | </span>
					<a className="btn btn-primary text-light">Checkout</a>
				</div>
				}
				{ cartItems.length == 0 &&	
				<div className="jumbotron text-center text-primary">
					<h5><em>Your cart is empty, please add some products</em></h5>
				</div>
				}
			</section>
		</Fragment>

	)
}