// Map - Creates new array with the results of calling a callback on every element in the array
import { books } from '/foreach.js';
// const caps = texts.map(function(t) {
// 	return t.toUpperCase();
// });
// returns each array item with Upper Case in a new array
// console.log(caps);

const NUMBERS = [ 20, 21, 22, 23, 24, 25, 26, 27 ];

const doubles = NUMBERS.map(function(num) {
	return num * 2;
});

const NEWARRAY = NUMBERS.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});

console.log(NEWARRAY);

const WORDS = [ 'asap', 'byob', 'rsvp', 'diy' ];

// TEXTS.map(function(s) {
// 	let newArray = [];
// 	for (let str of s) {

// 		newArray.push(newString);
// 	}
// });

let arr = WORDS.map(function(word) {
	return word.toUpperCase().split('').join('.');
});

console.log(arr);

const titles = books.map(function(b) {
	return b.title;
});
console.log(titles);
