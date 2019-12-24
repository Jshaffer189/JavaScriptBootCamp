// Spread - allows an iterable (ex. array) to be expanded and placed inside of a new array,
// argument that is spread is not change or mutated

const NUMS = [ 4, 5, 55, 5, 58 ];

// Error
Math.max(NUMS);

// each array index is passed in as a argument instead of one argument/array =  (4, 5, 55, 5, 58)
Math.max(...NUMS);

function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}

const COLORS = [ 'red', 'orage', 'yellow', 'green' ];

// spread COLORS to four arguments
giveMeFour(...COLORS);

const STR = 'GOAT';

// four seperate strings of 'G', 'O', 'A', 'T'
giveMeFour(...STR);

// -- -- -- -- -- -- -- -- -- //
// Spread in Array Literals

const NUMS1 = [ 1, 2, 3 ];
const NUMS2 = [ 4, 5, 6 ];

// [1,2,3,4,5,6]
console.log([ ...NUMS1, ...NUMS2 ]);

// Array of strings alphabet
console.log([ ...'abcdefghijklmnopqrstuvwxyz' ]);

// single strings without being in an array
console.log(...'abcdefghijklmnopqrstuvwxyz');

// -- -- -- -- -- -- -- -- //
// Spread in Object Literals

const CANINE = {
	family: 'Caninae',
	furry: true,
	legs: 3
};

// spreads the CANINE Key Value pairs in to DOG
// properties are spread not object (not the const DOG)
const DOG = {
	...CANINE,
	// family: 'Caninae',
	// furry: true
	isPet: true,
	// legs is over written using newest prop (4)
	legs: 4
};

console.log(DOG);

const SPREADNUMBERS = { ...[ 4, 5, 6 ] };

// {0: 4, 1: 5, 2: 6}
console.log(SPREADNUMBERS);
