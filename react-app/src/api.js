import axios from 'axios';

export const doPayment = (body) => {
	const headers = {
		'Content-Type': 'application/json',
	};
	return axios
		    .post("http://localhost:9000/payment", body)
		    .then(response => {
				alert("Payment Success");
				return response;
		    })
		    .catch(error => {
				alert("Payment Error");
				return Promise.reject('Error in making payment', error);
		    });
};
