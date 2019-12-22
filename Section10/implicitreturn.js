//

const square = (n) => {
	n * n;
};

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

// with function
const DOUBLES1 = nums.map(function(n) {
	return n * 2;
});

// with simple returning arrow function
const DOUBLES = nums.map((n) => n * 2);
