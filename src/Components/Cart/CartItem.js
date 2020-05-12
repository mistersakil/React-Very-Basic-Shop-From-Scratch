import React, {Fragment} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
export default ({title,price}) => {
	return (
		<Fragment>	
		  	<ListGroup.Item>
		  		<Button variant="danger" size="sm">x</Button> 
		  		{title}
		  		<small>${price}</small>
		  	</ListGroup.Item>
		</Fragment>

	)
}