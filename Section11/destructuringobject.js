// destructuring the objects properties
// curly brackets for object
// variable names have to be exisiting key names within the object
// naming to variables have to include the key

const RUNNER = {
	fist: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};

// destructing to:
// const first = "Eliud" , and so on.....
const { first, last, country } = runner;

// naming to variables have to include the key
// const nation = 'Kenya'
// const myName = 'Eliud'
const { country: nation, first: myName } = RUNNER;

// destructuring by using rest operator
const { first, last, ...other } = RUNNER;
