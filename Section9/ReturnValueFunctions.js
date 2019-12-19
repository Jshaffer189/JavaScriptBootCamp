// return no named function with in a function factory
function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3);
// console.log(triple(4));
// 4 is the second parameter for function(x)

function makeBetweenFunc(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}

// first set of Parameters
const isChild = makeBetweenFunc(0, 18);
// 2nd set of Parameters
isChild(5);
isChild(67);
isChild();
// isChild = (num) => Boolean
