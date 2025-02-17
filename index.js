const convertCurrency = require('./currencyConverter');
const initializePayment = require('./seerbitPayment');

async function processPayment(amount, fromCurrency, toCurrency, email){
	try{
		const convertedAmount = await convertCurrency(amount, fromCurrency, toCurrency);
		await initializePayment(convertedAmount, toCurrency, email);
		// console.log('Payment processed successfully:', paymentResponse);
	} catch(error){
		console.error('Error processing payment:', error);}
}

processPayment(100, 'USD', 'NGN', 'folasayosamuel@gmail.com')