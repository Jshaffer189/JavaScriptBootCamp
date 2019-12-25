// Obect parameter

// destructuring the first and last properties from object
const FULLNAME = ({ first, last }) => {
	return `${first} ${last}`;
};

const RUNNER = {
	first: 'mike',
	last: 'jordan',
	country: 'usa'
};

// returns "mike jordan"
FULLNAME(RUNNER);

// Array parameter

const RESPONSE = [ 'HTTP/1.1', '200 OK', 'application/json' ];

function parseResponse([ protocol, statusCode, contentType ]) {
	console.log(`Status: ${statusCode}`);
	// Logs: 200 OK
}
