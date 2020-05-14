import React, {Fragment, useContext} from 'react'
import {ListGroup, Table} from 'react-bootstrap'
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
				
				<Table responsive>	
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
			</section>
		</Fragment>

	)
}