const RESUTLS = [
	{
		first: 'larry',
		last: 'bird',
		country: 'usa'
	},
	{
		first: 'venus',
		last: 'williams',
		country: 'french'
	},
	{
		first: 'mike',
		last: 'jordan',
		country: 'japan'
	}
];

// how to access 2nd item in an array object
const [ {}, { country } ] = RESUTLS;

const [ { first: goldWinner }, { country } ] = RESUTLS;
