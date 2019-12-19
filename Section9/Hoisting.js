// Hoisting - not declaring the variables before calling them

// Undefined
console.log(animal);
var animal = 'Bear';

console.log(elder);
console.log(young);

// Reference Error
const elder = 'old';
let young = 'Teen';

// TyperError, javascript reads as a var/variable not a function and does not hoist it. Varaible hoisted, the value is not
hoot();
var hoot = function() {
	console.log('hooot');
};
