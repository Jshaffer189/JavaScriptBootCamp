// Map - Creates new array with the results of calling a callback on every element in the array

const texts = [ 'rofl', 'lol', 'omg', 'ttyl' ];
const caps = texts.map(function(t) {
	return t.toUpperCase();
});
// returns each array item with Upper Case
console.log(caps);
console;
