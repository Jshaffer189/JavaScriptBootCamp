// Default parameters that use a default value if not passed in or parameter passed in is undefined

function add(a, b = 10) {
	return a + b;
}

const GREET = (person, greeting = 'hi') => {
	console.log(`${greeting}, ${person}`);
};
