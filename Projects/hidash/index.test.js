const assert = require('assert').strict;
const { forEach, map } = require('./index');

// test function
// const test = (desc, fn) => {
// 	console.log('---', desc);
// 	try {
// 		fn();
// 	} catch (err) {
// 		console.log(err.message);
// 	}
// };

it('the foreach function', () => {
	let sum = 0;
	forEach([ 1, 2, 3 ], (value) => {
		sum += value;
	});

	// arg 1 value produced
	// arg 2 value expected
	// arg 3 optional error message
	assert.strictEqual(sum, 6, 'Expected forEach to sum the array');
});

it('the map function', () => {
	const result = map([ 1, 2, 3 ], (value) => {
		return value * 2;
	});

	// assert.strictEqual(result[0], 2, `Expected to find 2, but found ${result[0]}`);
	// assert.strictEqual(result[1], 4, `Expected to find 4, but found ${result[0]}`);
	// assert.strictEqual(result[2], 6, `Expected to find 6, but found ${result[0]}`);

	// compares both and includes error between comparison in terminal
	assert.deepStrictEqual(result, [ 2, 4, 6 ]);
});
