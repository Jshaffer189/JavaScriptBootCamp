const nums = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];

// n is whatever index value foreach is on
nums.forEach(function(n) {
	console.log(n * n);
});

// el is the value of index foreach is on
nums.forEach(function(el) {
	if (el % 2 === 0) {
		console.log(el);
	}
});

const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

// Array foreach anonymous function
numbers.forEach(function(x) {
	console.log(x);
});

function printTriple(idx) {
	console.log(idx * 3);
}

// array foreach function call to pass numbers through
numbers.forEach(printTriple);

// logging number and index
numbers.forEach(function(num, idx) {
	console.log(idx, num);
});

//
const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36
	}
];

// arrow function print out titles
books.forEach((element) => console.log(element.title));
// anonymous function pass in books object
books.forEach(function(book) {
	console.log(book.title.toUpperCase());
});
