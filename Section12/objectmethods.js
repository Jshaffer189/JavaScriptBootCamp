// Adding custom built functions inside objects key: func()

// const ADD = function(x, y) {
// 	return x + y;
// };

// accessed MATH.key(arg, arg)
const MATH = {
	numbers: [ 1, 2, 3, 4, 5 ],
	add(x, y) {
		return x + y;
	},
	multiply(x, y) {
		return x * y;
	}
};

const auth = {
	username: 'tommy boy',
	login() {
		console.log('logged you in!');
	},
	logout() {
		console.log('Goodbye');
	}
};
