// arr.every(var => Test) - test every element of an array and passes back a boolean if everything passes True
// Simialr to && and
// arr.some(var => Test) - test every element of an array and passes back a boolean if anything passes True
// Simialr to || or

const words = [ 'dog', 'dig', 'log', 'bag', 'wag' ];

// True
words.every((word) => {
	return word.length === 3;
});

// False
words.every((word) => word[0] === 'd');

// True
words.every((w) => {
	let last_letter = w[w.length - 1];
	return last_letter === 'g';
});

let books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		generes: [ 'Fantasy' ]
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		generes: [ 'Romance' ]
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		generes: [ 'Dragons' ]
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36,
		generes: [ null ]
	},
	{
		title: 'Harry Potter 1',
		authors: [ 'JK Rowling' ],
		rating: 4.15,
		generes: [ 'Danger' ]
	},
	{
		title: 'Bones',
		authors: [ 'Josh Shaffer' ],
		rating: 4.52,
		generes: [ 'Fanatasy' ]
	},
	{
		title: 'X Men',
		authors: [ 'Jean Gray' ],
		rating: 4.1,
		generes: [ 'Fantasy' ]
	},
	{
		title: 'Advengers',
		authors: [ 'Tony Stark' ],
		rating: 4.0,
		generes: [ 'Fiction' ]
	}
];

// True
let ALLGOODBOOKS = books.every((book) => book.rating > 3.5);
// False
let ANY2AUTHORS = books.every((book) => book.authors.length === 2);
