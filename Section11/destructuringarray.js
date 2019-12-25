// Destructing unpack values from arrays or properties from objects, without changing the original item
// curly brackets for objects
// square brackets for arrays

// orginal array does not get mutated
const RACERESULTS = [ 'ray', 'larry', 'karry', 'perry', 'freddy', 'jerry' ];

// same as:
// const gold = RACERESULTS[0]
// const silver = RACERESULTS[1]
// const bronze = RACERESULTS[2]
const [ gold, silver, bronze ] = RACERESULTS;

// Same as:
// const gold = RACERESULTS[0]
// const pink = RACERESULTS[4]
const [ gold, , , pink ] = MORERACERESULTS;

// using spread for destructuring
// ['ray', [ 'karry', 'perry', 'freddy', 'jerry']]
const [ winner, , ...others ] = RACERESULTS;
