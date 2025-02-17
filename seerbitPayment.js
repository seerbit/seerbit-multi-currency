const {Client, Config, StandardCheckout} = require('seerbit-nodejs');
require('dotenv').config();

const config = new Config({
	publicKey: process.env.SEERBIT_PUBLIC_KEY,
	secretKey: process.env.SEERBIT_SECRET_KEY,
	bearerToken: process.env.SEERBIT_BEARER_TOKEN
});

const client = new Client(config);
const standardCheckout = new StandardCheckout(client);

async function initializePayment(amount, currency, email){
	const payload = {
		amount,
		callbackUrl: 'https://www.yourapp.com/callback',
		country: 'NG',
		currency,
		email,
		paymentReference: Date.now().toString()
	};
	
	try{
		const response = await standardCheckout.Initialize(payload);
		console.log('Payment initialized successfully:', response);
		return response;
	}catch(error){
		console.error('Error initializing payment:', error);
		throw error;
	}
}

module.exports = initializePayment;