// 'https://swapi.co/api/planets/'
//  axios.get('https://pokeapi.co/api/v2/pokemon/1')

// SEQUENTIAL REQUESTS!
// async function get3Pokemon() {
// 	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }

// get3Pokemon();

// sent in parrell;
async function get3Pokemon() {
	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
	console.log(prom1);
	const poke1 = await prom1;
	const poke2 = await prom2;
	const poke3 = await prom3;
	console.log(prom1);
	console.log(poke1.data);
	console.log(poke2.data);
	console.log(poke3.data);
}

get3Pokemon();

function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
}

// all request are parrell awaited at the end of the function call
async function lightShow() {
	const p1 = changeBodyColor('teal', 1000);
	const p2 = changeBodyColor('pink', 1000);
	const p3 = changeBodyColor('red', 1000);
	const p4 = changeBodyColor('blue', 1000);
	await p1;
	await p2;
	await p3;
	await p4;
}

lightShow();
