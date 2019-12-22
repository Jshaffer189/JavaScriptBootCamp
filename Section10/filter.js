// creates new array with all elements that pass test
// import books from '/foreach.js';
const nums = [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
const odds = nums.filter((n) => n % 2 === 1);
// new array odds, filters to all odd numbers from nums
console.log(odds);

const books = [
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

const GOODBOOKS = books.filter((b) => b.rating >= 4.2);
const FANT = books.filter((b) => b.generes.includes('Fantasy'));
console.log(GOODBOOKS);
console.log(FANT);
