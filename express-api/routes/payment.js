const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY || '	');

exports.hello = (req, res) => {
	res.send({
		message: "Hello Stripe checkout server!",
		timestamp: new Date().toISOString()
	});
}

exports.charge = (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: "brl"
	};
	stripe.charges
		.create(body)
		.then(result => {
			res.status(200).json(result)
		});
}
