let movies = [
	'The fantastic beast and where to find them',
	'Dark pheniox',
	'Gone in 60 seconds',
	'Van helsing',
	'Justice league'
];

// returns first array item that matches .find value
const movie = movies.find((movie) => {
	return movie.includes('Van');
});
console.log(movie);

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

const GOODBOOK = books.find((b) => b.rating >= 4.3);
const NEILBOOK = books.find((n) => n.authors.includes('Neil Gaiman'));
console.log(GOODBOOK);
console.log(NEILBOOK);
