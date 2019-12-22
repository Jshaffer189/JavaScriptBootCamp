// Sort() - turns an array of numbers to strings than sorts them based on the string, mutating the original array if not doing slice()
const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

let money = prices.sort();
console.log(money);

// Sorts by comparing two integers at a time
// Ascending order, based on returning
const ASCENDINGSORT = prices.sort((a, b) => a - b);
// Descending order
const DESCENDINGSORT = prices.sort((a, b) => b - a);

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

// sort by rating
console.log(BACKPACK.sort((a, b) => a.rating - b.rating));
