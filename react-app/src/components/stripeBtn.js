//https://hackernoon.com/stripe-api-reactjs-and-express-bc446bf08301
//https://blog.bam.tech/developper-news/setup-stripe-react-native-nodejs
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { doPayment } from '../api.js';

export default class StripeBtn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			publishableKey: "pk_test_ZU3mlTy0q00DATc9EyF9A8jX",
			body: {}
		}
	}

	onToken = (token) => {
		this.setState({
			body: {
				amount: 999,
				token: token
			}
		})
		this.callPayment();
	}

	callPayment(){
		const {body} = this.state
		fetch("http://localhost:9000/payment", {
			method: 'POST',
			body: body
		}).then(res => {
			console.log(res);
			alert('Payment success')
		}).catch(err => {
			console.log(err);
			alert('Payment error')
		})
	}


	render(){
		const {publishableKey} = this.state;
		return (
			<StripeCheckout
				label="Go Premium" //Component button text
				name="Business LLC" //Modal Header
				description="Upgrade to a premium account today."
				panelLabel="Go Premium" //Submit button in modal
				amount={999} //Amount in cents $9.99
				token={this.onToken}
				stripeKey={publishableKey}
				billingAddress={false}
			/>
		)
	}
}
