// axios - a external http library
// allows for parseing and checking of status codes

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	return axios.get(url);
};

const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	// api next page url
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log(err);
	});
