// Rest - collects data into a single array - new way

// arguments object - old way
function sumAll() {
	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total = +arguments[i];
	}
	return total;
}

// collect all arguments and name in array
function add(...restArrayName) {
	return restArrayName.reduce((total, currentVal) => {
		return total + currentVal;
	});
}

// 15
console.log(add(1, 2, 3, 4, 5));

// arguments are: string, string, Array of string called titles
function fullName(first, last, ...titles) {}

// spread in a arrow function
const multiply = (...nums) => {
	nums.reduce((total, curVal) => {
		total * curVal;
	});
};
