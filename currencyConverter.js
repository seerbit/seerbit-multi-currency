require('dotenv').config();
const axios = require('axios');

const apiKey = process.env.EXCHANGE_RATE_API_KEY;
const baseURL = 'https://api.currencyfreaks.com/v2.0/rates/latest';

async function convertCurrency(amount, fromCurrency, toCurrency){
	try{
		const response = await axios.get(baseURL, {
		params: {
			apikey: apiKey,
			symbols: toCurrency,
			base: fromCurrency
		}
		});
		const rate = response.data.rates[toCurrency];
		const convertedAmount = amount * rate;
		return convertedAmount.toFixed(2);
	}catch(error){
	   console.error('Error fetching exchange rates:', error);
	   throw new Error('Currency conversion failed');
	}
}

module.exports = convertCurrency;