import React, {Fragment, useContext} from 'react'
import {Button} from 'react-bootstrap'
import {ProductsContextApi} from '../../App'
export default ({title,price, quantity, id}) => {
	const {updateCartItemsHandler, removeCartItemsHandler} = useContext(ProductsContextApi)
	const updateCartItem = event => {
		const {id, is_increase} = event.target.dataset
		updateCartItemsHandler({ id: parseInt(id), is_increase: parseInt(is_increase) })
	}
	
	return (
		<Fragment>	
		  	<tr key={id}>
		  		<td>
		  			<Button variant="danger" size="sm" onClick={() => removeCartItemsHandler(id)} >X</Button> 
		  			{title}
		  		</td>
		  		<td style={{position: 'relative'}}>
		  			{quantity}
		  			<div className="cartQuantity">
		  				<span title="Increase" onClick={updateCartItem} data-id={id} data-is_increase={1}></span>
		  				<span title="Decrease"  onClick={updateCartItem} data-id={id} data-is_increase={0}></span>
		  			</div>
		  		</td>
		  		<td>
		  			${price}
		  		</td>
		  	</tr>
		</Fragment>

	)
}