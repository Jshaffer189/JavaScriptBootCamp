// Reduce - executes a reducer function on each element of array resulting in a single value
// first callback value will be totalValue stored by reduce
// second callback value will be each element in array as reduce works it way across

// starting value is first element, a starting value can be passed in passed the callback function:
// arr.reduce((a,b) => {} c )
// c - initial starting value

// 35
console.log(
	[ 3, 5, 7, 9, 11 ].reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	})
);

const NUMS = [ 3, 5, 7, 9, 11 ];

NUMS.reduce((total, currentVal) => {
	return total * currentVal;
});

const GRADES = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];

const MAXGRADE = GRADES.reduce((max, currVal) => {
	if (currVal > max) {
		return currVal;
	}
	return max;
});

// returns highest similar to reduce
Math.max(GRADES);

const VOTES = [
	'y',
	'y',
	'absent',
	'n',
	'y',
	'n',
	'y',
	'n',
	'y',
	'n',
	'n',
	'n',
	'n',
	'n',
	'y',
	'y',
	'n',
	'y',
	'n',
	'y',
	'n'
];

// initial value will be a empty object
const RESULTS = VOTES.reduce((tally, val) => {
	tally[val] = (tally[val] || 0) + 1;
	// {y: 1} after first return
	return tally;
}, {});

// {y: 9,absent: 1, n: 11}
console.log(RESULTS);

const BACKPACK = [
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

// Group books based on rating in a object

const GROOUPEDBYRATINGS = BACKPACK.reduce((groupedBooks, book) => {
	const KEY = Math.floor(book.rating);
	if (!groupedBooks[KEY]) {
		groupedBooks[KEY] = [];
	}
	groupedBooks[KEY].push(book);
	return groupedBooks;
}, {});
console.log(GROOUPEDBYRATINGS);
