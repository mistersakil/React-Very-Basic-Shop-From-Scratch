import React, {Fragment} from "react"
import {Col, Card} from 'react-bootstrap'
export default (props) => {  
	console.log(props)
	const {id} = props.match.params
	return (
		<Fragment>
			
			<Col sm={4}>
	          	<Card style={{ width: '100%' }}>
				  <Card.Img variant="top" src="http://dummyimage.com/400x400.jpg/5fa2dd/ffffff" />				  
				</Card>
	        </Col>
	        <Col sm={8}>
	        <h1>Product Details {id}</h1>
	        </Col>
		</Fragment>
	)
}
