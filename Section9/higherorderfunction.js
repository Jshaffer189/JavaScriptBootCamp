// Calling functions as variables from an array

// in named function
function add(x, y) {
	return x + y;
}

// in named variable
const subtract = function(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
}

const divide = function(x, y) {
	return x / y;
};

// in arrary
const operations = [ add, subtract, multiply, divide ];

// in a for loop
for (let func of operations) {
	let result = func(30, 5);
	console.log(result);
}

// in a js object
const functionObject = {
	doSomething: multiply
};

// custom made function
// object prop function
console.log(functionObject.doSomething(3, 5));
