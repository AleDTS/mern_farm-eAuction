import React from 'react';
import {
	Button,
	Modal,
	InputGroup,
	FormControl
} from 'react-bootstrap';

import StripeBtn from "./StripeBtn";
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class BidModal extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			amount: 0
		};
	}

	handleShow = () =>{
		this.setState({ showModal: true });
	}

	handleClose = () =>{
		this.setState({ showModal: false });
	}

	render(){
		const {amount} = this.state;
		return(
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
							inputRef={yld=>this.amount = yld}
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
					<StripeBtn
						amount={amount}
					/>
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
		)
	}

}
