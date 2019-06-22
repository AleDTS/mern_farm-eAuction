import React from 'react';
import {
	Button,
	ListGroup,
	Card,
	Modal,
	InputGroup,
	FormControl,
	DropdownButton,
	Dropdown
} from 'react-bootstrap';

import StripeBtn from "./stripeBtn";
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class FarmInfo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			attShown: [
				'culture',
				'variety',
				'yield_estimation',
				'price'
		  	],
			farm: this.props.farm,
			showModal: false
		};
		this.handleShow = this.handleShow.bind(this);
	    this.handleClose = this.handleClose.bind(this);
	}

	handleShow = () =>{
		this.setState({ showModal: true });
	}

	handleClose = () =>{
		this.setState({ showModal: false });
	}

	render() {
		const {attShown, farm} = this.state
		let rows = []

		attShown.forEach( (attribute) => {
			rows.push(
				<ListGroup.Item>
					{attribute}: {farm[attribute]}
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
						onClick={this.handleShow}
						>Bid
					</Button>
				</Card.Footer>
			</Card>
			<Modal show={this.state.showModal} onHide={this.handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Offer bid</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Radio name="groupOptions"/>
						</InputGroup.Prepend>
						<FormControl
							placeholder="Price"
							aria-label="Price"
							aria-describedby="price"
						/>
						<InputGroup.Append>
							<InputGroup.Text id="price">$/sac/ton</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
					<InputGroup className="mb-3">
						<InputGroup.Prepend>
							<InputGroup.Radio name="groupOptions"/>
						</InputGroup.Prepend>
						<FormControl
							placeholder="Yield"
							aria-label="Yield"
							aria-describedby="yield"
						/>
						<InputGroup.Append>
							<InputGroup.Text id="yield">sac/ton</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>
					<p>
						Total: {} $
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={this.handleClose}>
					 Close
					</Button>
					<StripeBtn />
					<PaypalExpressBtn
						client={{
				            sandbox:    'YOUR-SANDBOX-APP-ID',
				            production: 'YOUR-PRODUCTION-APP-ID',
				        }}
						currency={'BRL'}
						total={1.00}
					 />
				</Modal.Footer>
			</Modal>
		   </>
		)
	}
}
