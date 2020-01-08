// 'https://swapi.co/api/planets/'

async function greet() {
	return 'hello!';
}

greet().then((val) => {
	console.log('Promises RESOLVED WITH ', val);
});

async function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers';
	}
	return x + y;
}

add(4, 3);
add('e', 4).then((val) => {
	console.log(console.log('Promises RESOLVED WITH ', val)).catch((err) => {
		console.log('promise rejected with ', err);
	});
});
