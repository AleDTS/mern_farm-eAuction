import React from 'react';
import {
	Button,
	ListGroup,
	Card
} from 'react-bootstrap';

import BidModal from "./BidModal"

export default class FarmInfo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			attShown: {
				'culture': 'Culture',
				'variety': 'Variety',
				'yield_estimation': 'Yield Estimation',
				'price': 'Price'
		  	},
			farm: this.props.farm,
			showModal: false
		};
	}

	openModal = () =>{
		this.refs.modal.handleShow();
	}

	render() {
		const {attShown, farm} = this.state
		let rows = []

		Object.keys(attShown).forEach( (attribute) => {
			rows.push(
				<ListGroup.Item>
					{attShown[attribute]}: {farm[attribute]}
				</ListGroup.Item>
			)
		});

		return(
			<>
			<Card style={{}}>
				<Card.Body>
					<Card.Title>{farm['name']}</Card.Title>
					<ListGroup variant="flush">
						{rows}
					</ListGroup>
				</Card.Body>
				<Card.Footer>
					<Button variant="secondary">Buy now</Button>
					<Button
						variant="primary"
						onClick={this.openModal}
						>Bid
					</Button>
				</Card.Footer>
			</Card>
			<BidModal ref="modal"/>
		   </>
		)
	}
}
