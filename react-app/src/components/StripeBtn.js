//https://hackernoon.com/stripe-api-reactjs-and-express-bc446bf08301
//https://blog.bam.tech/developper-news/setup-stripe-react-native-nodejs
import React from "react";
import StripeCheckout from "react-stripe-checkout";

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
				amount: this.props.amount,
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
				label="Credit card" //Component button text
				panelLabel="Pay" //Submit button in modal
				amount={this.props.amount} //Amount in cents $9.99
				token={this.onToken}
				stripeKey={publishableKey}
				billingAddress={false}
			/>
		)
	}
}
