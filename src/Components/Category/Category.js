import React, {Fragment} from "react"
import {Col, Card} from 'react-bootstrap'
export default (props) => {  
	console.log(props)
	const {slug} = props.match.params
	return (
		<Fragment>			
	        <Col sm={12}>
	        <h1>Category: {slug}</h1>
	        </Col>
		</Fragment>
	)
}
