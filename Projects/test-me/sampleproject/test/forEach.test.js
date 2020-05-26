const assert = require('assert');
const { forEach } = require('../index');

it('Should sum an array', () => {
	const numbers = [ 1, 2, 3 ];

	let total = 0;
	forEach(numbers, (value) => {
		total += value;
	});

	assert.strictEqual(total, 6);
});
