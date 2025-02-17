const schedule = require('node-schedule');
const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.EXCHANGE_RATE_API_KEY;
const baseUrl = 'https://api.currencyfreaks.com/v2.0/rates/latest';

async function updateExchangeRates(){
	try {
		const response = await axios.get(baseUrl, {
		  params: {apikey: apiKey}
		});
		
		// Save response.data rates to your database or in-memory store
		console.log('Exchange rates updated:', response.data.rates);
	}catch(error){
	console.error('Error updating exchange rates:', error);
	}
}

// Schedule the job to run hourly
schedule.scheduleJob('0 * * * *', updateExchangeRates);